# 📤 دليل رفع المشروع على GitHub

## 🎯 الطريقة الأولى: عبر الموقع (الأسهل)

### الخطوات:

#### 1️⃣ تحميل المشروع
[📥 تحميل الكود الكامل](https://www.genspark.ai/api/files/s/nvCIJD3o)

#### 2️⃣ فك الضغط
```bash
tar -xzf murshedak-almahani-ready-to-deploy.tar.gz
cd webapp
```

#### 3️⃣ إنشاء مستودع على GitHub

1. اذهب إلى [github.com/new](https://github.com/new)
2. أدخل اسم المستودع: `murshedak-almahani`
3. اجعله **Public** (للمشاركة) أو **Private** (خاص)
4. **لا تختر** "Initialize with README" (لدينا واحد بالفعل)
5. انقر على **Create repository**

#### 4️⃣ رفع الكود

```bash
# في مجلد المشروع، نفذ الأوامر التالية:

# إضافة رابط المستودع (استبدل YOUR_USERNAME باسم حسابك)
git remote add origin https://github.com/YOUR_USERNAME/murshedak-almahani.git

# تغيير اسم الـ branch إلى main (إذا لم يكن كذلك)
git branch -M main

# رفع الكود
git push -u origin main
```

#### 5️⃣ إدخال البيانات

سيطلب منك GitHub:
- **Username:** اسم المستخدم في GitHub
- **Password:** استخدم **Personal Access Token** بدلاً من كلمة المرور

**للحصول على Token:**
1. اذهب إلى GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. اختر `repo` (full control)
5. انسخ الـ Token واستخدمه كـ password

#### 6️⃣ تأكد من الرفع

افتح رابط المستودع: `https://github.com/YOUR_USERNAME/murshedak-almahani`

✅ يجب أن ترى جميع الملفات!

---

## 🚀 الطريقة الثانية: عبر GitHub Desktop (سهلة)

### الخطوات:

1. **حمّل GitHub Desktop:** [desktop.github.com](https://desktop.github.com)
2. **سجّل الدخول** بحساب GitHub
3. **أضف المشروع:**
   - File → Add Local Repository
   - اختر مجلد `webapp`
4. **انشر المستودع:**
   - Publish repository
   - اختر الاسم والوصف
   - Public أو Private
5. **انقر Publish!**

---

## 🌐 الطريقة الثالثة: عبر GitHub CLI (للمحترفين)

```bash
# تثبيت GitHub CLI
# macOS
brew install gh

# Windows (Chocolatey)
choco install gh

# Linux
# راجع: https://github.com/cli/cli#installation

# تسجيل الدخول
gh auth login

# إنشاء مستودع ورفع الكود مباشرة
cd webapp
gh repo create murshedak-almahani --public --source=. --push
```

---

## 📋 التحقق من الملفات المرفوعة

بعد الرفع، تأكد من وجود هذه الملفات في المستودع:

### ✅ ملفات أساسية:
- [ ] `README.md` - الواجهة الرئيسية للمشروع
- [ ] `package.json` - المكتبات والأوامر
- [ ] `wrangler.jsonc` - إعدادات Cloudflare
- [ ] `LICENSE` - الترخيص
- [ ] `.gitignore` - الملفات المستبعدة

### ✅ ملفات الكود:
- [ ] `src/` - الكود المصدري
  - [ ] `index.tsx` - ملف الدخول الرئيسي
  - [ ] `api.ts` - الـ API
  - [ ] `types.ts` - أنواع TypeScript
- [ ] `public/static/` - الملفات الثابتة
  - [ ] `app.js` - JavaScript الأمامي
  - [ ] `style.css` - الأنماط

### ✅ قاعدة البيانات:
- [ ] `migrations/` - هيكل قاعدة البيانات
- [ ] `seed.sql` - بيانات تجريبية

### ✅ التوثيق:
- [ ] `DEPLOYMENT_GUIDE.md` - دليل النشر الشامل
- [ ] `QUICK_START.md` - البدء السريع
- [ ] `CONTRIBUTING.md` - دليل المساهمة
- [ ] `CHANGELOG.md` - سجل التغييرات
- [ ] `GITHUB_UPLOAD_GUIDE.md` - هذا الملف

### ✅ إعدادات:
- [ ] `vite.config.ts` - إعدادات Vite
- [ ] `tsconfig.json` - إعدادات TypeScript
- [ ] `.env.example` - نموذج متغيرات البيئة
- [ ] `ecosystem.config.cjs` - إعدادات PM2

### ❌ ملفات يجب أن لا تُرفع (في .gitignore):
- ❌ `node_modules/`
- ❌ `dist/`
- ❌ `.wrangler/`
- ❌ `.env`
- ❌ `*.log`

---

## 🎉 بعد الرفع

### تحسينات اختيارية:

#### 1️⃣ إضافة وصف للمستودع
في صفحة المستودع:
- انقر على ⚙️ Settings
- أضف **Description:** "نظام تفاعلي لاكتشاف الميول المهنية والمواهب المتعددة"
- أضف **Topics:** `career-guidance`, `holland-code`, `arabic`, `cloudflare-pages`, `hono`

#### 2️⃣ تفعيل GitHub Pages (اختياري)
- Settings → Pages
- Source: Deploy from a branch
- Branch: `main` → `/ (root)`
- Save

⚠️ **ملاحظة:** GitHub Pages لن يدعم قاعدة البيانات. استخدم Cloudflare Pages للنشر الكامل.

#### 3️⃣ إضافة Badges للـ README
يمكنك إضافة شارات جميلة مثل:
- ![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/murshedak-almahani)
- ![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/murshedak-almahani)
- ![License](https://img.shields.io/github/license/YOUR_USERNAME/murshedak-almahani)

---

## 🔗 روابط مفيدة

- [GitHub Docs - إنشاء مستودع](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [GitHub Docs - رفع مشروع موجود](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [دليل استخدام Git بالعربية](https://git-scm.com/book/ar/v2)

---

## 🆘 حل المشاكل الشائعة

### المشكلة: "remote origin already exists"
**الحل:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/murshedak-almahani.git
```

### المشكلة: "authentication failed"
**الحل:** استخدم Personal Access Token بدلاً من كلمة المرور

### المشكلة: "failed to push"
**الحل:**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع [GitHub Docs](https://docs.github.com)
2. ابحث في [GitHub Community](https://github.community)
3. افتح Issue في المستودع

---

**المطور:** د. عبدالغني النقيب  
**المؤسسة:** شركة مدارس النبلاء الأهلية

---

🎉 **تهانينا! مشروعك الآن على GitHub!** 🎉
