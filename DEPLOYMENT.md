# 🚀 دليل النشر على Cloudflare Pages

## المتطلبات الأساسية
- حساب Cloudflare نشط
- Cloudflare API Token

## خطوات النشر

### 1️⃣ إعداد Cloudflare API Key
```bash
# في الـ sandbox
setup_cloudflare_api_key

# أو قم بزيارة Deploy tab وأضف API key
```

### 2️⃣ إنشاء قاعدة البيانات D1
```bash
npx wrangler d1 create webapp-production
```

**انسخ الـ database_id من الناتج وحدّث `wrangler.jsonc`**

### 3️⃣ تحديث wrangler.jsonc
```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "webapp-production",
      "database_id": "YOUR_DATABASE_ID_HERE"  // <-- انسخه هنا
    }
  ]
}
```

### 4️⃣ تطبيق Migrations على Production
```bash
npm run db:migrate:prod
```

### 5️⃣ إنشاء مشروع Cloudflare Pages
```bash
npx wrangler pages project create webapp \
  --production-branch main \
  --compatibility-date 2024-01-01
```

### 6️⃣ النشر
```bash
npm run deploy:prod
```

## 🔗 الروابط بعد النشر

سيعطيك Cloudflare:
- **Production URL**: `https://random-id.webapp.pages.dev`
- **Branch URL**: `https://main.webapp.pages.dev`

## ⚙️ إعدادات إضافية

### إضافة Domain مخصص (اختياري):
```bash
npx wrangler pages domain add yourdomain.com --project-name webapp
```

### إضافة Environment Variables:
```bash
npx wrangler pages secret put API_KEY --project-name webapp
```

### عرض قائمة Secrets:
```bash
npx wrangler pages secret list --project-name webapp
```

## 🔄 تحديث الموقع

عند تحديث الكود:
```bash
# 1. Build
npm run build

# 2. Deploy
npm run deploy:prod
```

## 📊 فحص قاعدة البيانات Production

### عرض البيانات:
```bash
npm run db:console:prod
```

ثم:
```sql
SELECT * FROM reports LIMIT 10;
SELECT COUNT(*) FROM starts;
```

## 🐛 استكشاف الأخطاء

### مشكلة: Database not found
**الحل**: تأكد من تطبيق migrations على production
```bash
npm run db:migrate:prod
```

### مشكلة: 403 Forbidden
**الحل**: تحقق من API Token permissions

### مشكلة: Static files 404
**الحل**: تأكد من أن `public/static/` موجود وتم بناء المشروع

## 📈 المراقبة

### مراقبة Logs:
عبر Cloudflare Dashboard:
1. اذهب إلى Pages
2. اختر webapp
3. اضغط على Logs

### مراقبة Analytics:
Cloudflare Dashboard > Analytics

## 🔐 الأمان

### أفضل الممارسات:
- ✅ لا تشارك API Tokens
- ✅ استخدم Environment Variables للأسرار
- ✅ فعّل HTTPS only
- ✅ راجع Access logs بانتظام

## 💡 نصائح

1. **Testing قبل النشر**: دائماً اختبر محلياً أولاً
2. **Backup**: احتفظ بنسخة احتياطية من البيانات
3. **Versioning**: استخدم git tags للإصدارات
4. **Monitoring**: راقب الأداء والأخطاء

## 📞 الدعم

للمزيد من المساعدة:
- Cloudflare Docs: https://developers.cloudflare.com/pages
- Wrangler Docs: https://developers.cloudflare.com/workers/wrangler
- Hono Docs: https://hono.dev

---

**آخر تحديث**: نوفمبر 2025
