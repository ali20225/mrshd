import { Hono } from 'hono'
import { cors } from 'hono/cors'
import type { Bindings, StartRecord, ReportRecord, ApiResponse } from './types'

const api = new Hono<{ Bindings: Bindings }>()

// Enable CORS
api.use('/*', cors())

// ============ STARTS TABLE API ============

// GET /api/tables/starts - Get all starts with pagination
api.get('/tables/starts', async (c) => {
  const { DB } = c.env
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')
  const offset = (page - 1) * limit

  try {
    // Get total count
    const countResult = await DB.prepare('SELECT COUNT(*) as count FROM starts').first<{ count: number }>()
    const total = countResult?.count || 0

    // Get paginated data
    const { results } = await DB.prepare(
      'SELECT * FROM starts ORDER BY created_at DESC LIMIT ? OFFSET ?'
    ).bind(limit, offset).all<StartRecord>()

    return c.json<ApiResponse<StartRecord[]>>({
      data: results,
      total,
      page,
      limit
    })
  } catch (error) {
    console.error('Error fetching starts:', error)
    return c.json({ error: 'Failed to fetch starts' }, 500)
  }
})

// POST /api/tables/starts - Create new start record
api.post('/tables/starts', async (c) => {
  const { DB } = c.env
  try {
    const body = await c.req.json<StartRecord>()
    
    const result = await DB.prepare(
      'INSERT INTO starts (student_name, student_class, created_at) VALUES (?, ?, ?)'
    ).bind(
      body.student_name,
      body.student_class || '',
      new Date().toISOString()
    ).run()

    return c.json({ 
      id: result.meta.last_row_id,
      ...body,
      created_at: new Date().toISOString()
    }, 201)
  } catch (error) {
    console.error('Error creating start:', error)
    return c.json({ error: 'Failed to create start record' }, 500)
  }
})

// ============ REPORTS TABLE API ============

// GET /api/tables/reports - Get all reports with pagination
api.get('/tables/reports', async (c) => {
  const { DB } = c.env
  const page = parseInt(c.req.query('page') || '1')
  const limit = parseInt(c.req.query('limit') || '10')
  const search = c.req.query('search') || ''
  const offset = (page - 1) * limit

  try {
    // Build query with optional search
    let query = 'SELECT * FROM reports'
    let countQuery = 'SELECT COUNT(*) as count FROM reports'
    const params: any[] = []

    if (search) {
      const searchPattern = `%${search}%`
      query += ' WHERE student_name LIKE ? OR holland_code LIKE ?'
      countQuery += ' WHERE student_name LIKE ? OR holland_code LIKE ?'
      params.push(searchPattern, searchPattern)
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'

    // Get total count
    const countResult = await DB.prepare(countQuery)
      .bind(...(search ? [params[0], params[1]] : []))
      .first<{ count: number }>()
    const total = countResult?.count || 0

    // Get paginated data
    const { results } = await DB.prepare(query)
      .bind(...params, limit, offset)
      .all<ReportRecord>()

    return c.json<ApiResponse<ReportRecord[]>>({
      data: results,
      total,
      page,
      limit
    })
  } catch (error) {
    console.error('Error fetching reports:', error)
    return c.json({ error: 'Failed to fetch reports' }, 500)
  }
})

// POST /api/tables/reports - Create new report
api.post('/tables/reports', async (c) => {
  const { DB } = c.env
  try {
    const body = await c.req.json<ReportRecord>()
    
    const result = await DB.prepare(
      `INSERT INTO reports 
       (student_name, student_class, holland_code, holland_title, talent1, talent2, holland_scores, talent_scores, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      body.student_name,
      body.student_class || '',
      body.holland_code,
      body.holland_title || '',
      body.talent1 || '',
      body.talent2 || '',
      body.holland_scores || '',
      body.talent_scores || '',
      new Date().toISOString()
    ).run()

    return c.json({ 
      id: result.meta.last_row_id,
      ...body,
      created_at: new Date().toISOString()
    }, 201)
  } catch (error) {
    console.error('Error creating report:', error)
    return c.json({ error: 'Failed to create report' }, 500)
  }
})

// DELETE /api/tables/reports/:id - Delete a report
api.delete('/tables/reports/:id', async (c) => {
  const { DB } = c.env
  const id = c.req.param('id')

  try {
    await DB.prepare('DELETE FROM reports WHERE id = ?').bind(id).run()
    return c.json({ success: true })
  } catch (error) {
    console.error('Error deleting report:', error)
    return c.json({ error: 'Failed to delete report' }, 500)
  }
})

// GET /api/stats - Get statistics
api.get('/stats', async (c) => {
  const { DB } = c.env

  try {
    const startsCount = await DB.prepare('SELECT COUNT(*) as count FROM starts').first<{ count: number }>()
    const reportsCount = await DB.prepare('SELECT COUNT(*) as count FROM reports').first<{ count: number }>()
    
    // Get Holland code distribution
    const hollandDist = await DB.prepare(
      'SELECT holland_code, COUNT(*) as count FROM reports GROUP BY holland_code ORDER BY count DESC'
    ).all()

    // Get talent distribution
    const talentDist = await DB.prepare(
      'SELECT talent1, COUNT(*) as count FROM reports WHERE talent1 IS NOT NULL AND talent1 != "" GROUP BY talent1 ORDER BY count DESC'
    ).all()

    return c.json({
      totalStarts: startsCount?.count || 0,
      totalReports: reportsCount?.count || 0,
      hollandDistribution: hollandDist.results || [],
      talentDistribution: talentDist.results || []
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return c.json({ error: 'Failed to fetch statistics' }, 500)
  }
})

export default api
