import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import api from './api'
import type { Bindings } from './types'

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// Mount API routes
app.route('/api', api)

// Main HTML page
app.get('/', (c) => {
  return c.html(`<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>مرشدك المهني - مقياس الميول والمواهب</title>
  <meta name="description" content="نظام تفاعلي لاكتشاف ميولك المهنية ومواهبك مع تقرير ذكي واقتراحات للتخصصات.">
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <link href="/static/style.css" rel="stylesheet">
</head>
<body class="bg-[#FDFBFC] text-slate-800 antialiased" style="font-family: 'Tajawal', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji';">
  <div id="app" class="container mx-auto p-4 md:p-6 max-w-6xl"></div>

  <footer class="text-center py-6 text-sm text-gray-500">
    <p>بإشراف المرشد المهني: د. عبدالغني النقيب</p>
    <button id="toggle-admin" class="text-xs text-gray-400 hover:text-gray-600 mt-2 no-print">عرض لوحة التحكم</button>
  </footer>

  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
