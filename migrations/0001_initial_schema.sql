-- جدول بدء المستخدمين (عداد المستخدمين الذين بدأوا)
CREATE TABLE IF NOT EXISTS starts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_name TEXT NOT NULL,
  student_class TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- جدول التقارير المنجزة
CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_name TEXT NOT NULL,
  student_class TEXT,
  holland_code TEXT NOT NULL,
  holland_title TEXT,
  talent1 TEXT,
  talent2 TEXT,
  holland_scores TEXT,
  talent_scores TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- إنشاء فهارس للبحث السريع
CREATE INDEX IF NOT EXISTS idx_reports_student_name ON reports(student_name);
CREATE INDEX IF NOT EXISTS idx_reports_holland_code ON reports(holland_code);
CREATE INDEX IF NOT EXISTS idx_reports_created_at ON reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_starts_created_at ON starts(created_at DESC);
