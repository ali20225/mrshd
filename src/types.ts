// TypeScript Types for Career Guidance System

export type Bindings = {
  DB: D1Database;
}

export interface StudentInfo {
  name: string;
  class: string;
}

export interface HollandScore {
  code: string;
  name: string;
  score: number;
}

export interface TalentScore {
  code: string;
  name: string;
  score: number;
}

export interface ReportData {
  studentInfo: StudentInfo;
  hollandScores: [string, number][];
  talentScores: [string, number][];
}

export interface StartRecord {
  id?: number;
  student_name: string;
  student_class: string;
  created_at?: string;
}

export interface ReportRecord {
  id?: number;
  student_name: string;
  student_class: string;
  holland_code: string;
  holland_title: string;
  talent1: string;
  talent2: string;
  holland_scores?: string;
  talent_scores?: string;
  created_at?: string;
}

export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  limit?: number;
}
