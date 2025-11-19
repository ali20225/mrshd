# ⚡ دليل البدء السريع - 5 دقائق فقط!

## 🎯 للحصول على رابط ويب دائم بسرعة:

### الطريقة الأسرع والأسهل:

#### 1️⃣ قم بتنزيل المشروع:
[📥 تحميل المشروع](https://www.genspark.ai/api/files/s/P5XMpm9g)

#### 2️⃣ افتح Terminal وقم بتنفيذ:

```bash
# فك الضغط
tar -xzf murshedak-almahani-complete.tar.gz
cd webapp

# تثبيت المكتبات
npm install

# تسجيل الدخول إلى Cloudflare
npx wrangler login

# إنشاء قاعدة البيانات
npx wrangler d1 create murshedak-almahani-db
```

#### 3️⃣ انسخ الـ database_id الذي سيظهر وضعه في ملف `wrangler.jsonc`

#### 4️⃣ تطبيق الـ Migrations:

```bash
npx wrangler d1 migrations apply murshedak-almahani-db
```

#### 5️⃣ بناء ونشر المشروع:

```bash
# بناء
npm run build

# إنشاء المشروع على Cloudflare
npx wrangler pages project create murshedak-almahani

# النشر
npx wrangler pages deploy dist --project-name murshedak-almahani
```

#### 6️⃣ احصل على الرابط! 🎉

```
https://murshedak-almahani.pages.dev
```

---

## 🆘 هل تواجه مشكلة؟

### المشكلة: "wrangler: command not found"
**الحل:**
```bash
npm install -g wrangler
```

### المشكلة: "Not logged in"
**الحل:**
```bash
npx wrangler login
```

### المشكلة: قاعدة البيانات لا تعمل
**الحل:**
تأكد من:
1. تطبيق الـ migrations
2. وضع الـ database_id الصحيح في wrangler.jsonc

---

## 📱 اختبار محلي قبل النشر:

```bash
npm run build
npm run dev:d1
```

افتح: `http://localhost:3000`

---

## 💡 نصائح إضافية:

1. **للتحديثات المستقبلية:**
```bash
npm run build
npx wrangler pages deploy dist --project-name murshedak-almahani
```

2. **لمشاهدة الإحصائيات:**
انتقل إلى لوحة تحكم Cloudflare → Workers & Pages

3. **ربط دومين مخصص:**
من لوحة التحكم → Custom domains → Add domain

---

## ✅ جاهز للاستخدام!

بعد النشر، شارك الرابط مع المستخدمين:
```
https://murshedak-almahani.pages.dev
```

**يدعم مئات المستخدمين في نفس الوقت! 🚀**
