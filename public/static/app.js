// ============ DATA ============
// البيانات والقوائم
const AppData = {
  icons: {
    profile: '<i class="fa-solid fa-id-card text-[22px]"></i>',
    strengths: '<i class="fa-solid fa-bolt text-[20px]"></i>',
    environment: '<i class="fa-solid fa-briefcase text-[20px]"></i>',
    advice: '<i class="fa-solid fa-lightbulb text-[20px]"></i>',
    R: '<i class="fa-solid fa-screwdriver-wrench text-[16px]"></i>',
    I: '<i class="fa-solid fa-magnifying-glass text-[16px]"></i>',
    A: '<i class="fa-solid fa-palette text-[16px]"></i>',
    S: '<i class="fa-solid fa-people-group text-[16px]"></i>',
    E: '<i class="fa-solid fa-chart-line text-[16px]"></i>',
    C: '<i class="fa-solid fa-file-lines text-[16px]"></i>'
  },
  interests: {
    'واقعي': { title: 'الواقعي (Realistic)', code: 'R' },
    'بحثي': { title: 'الباحث (Investigative)', code: 'I' },
    'فني': { title: 'الفنان (Artistic)', code: 'A' },
    'اجتماعي': { title: 'الاجتماعي (Social)', code: 'S' },
    'مقدام': { title: 'المُقدام (Enterprising)', code: 'E' },
    'تقليدي': { title: 'التقليدي (Conventional)', code: 'C' }
  },
  majorCombinations: {},
  talents: {
    'ذهنية': { title: 'الموهبة الذهنية' },
    'لغوية': { title: 'الموهبة اللغوية' },
    'بصرية': { title: 'الموهبة البصرية المكانية' },
    'حركية': { title: 'الموهبة الجسدية الحركية' },
    'اجتماعية': { title: 'الموهبة الاجتماعية' },
    'طبيعية': { title: 'الموهبة الطبيعية' },
    'موسيقية': { title: 'الموهبة الموسيقية' }
  }
};

// أسئلة هولاند (30)
const HOLLAND_QUESTIONS = [
  { id: 1, text: "أستمتع بإصلاح الأجهزة أو الأدوات بنفسي في المنزل.", code: "واقعي" },
  { id: 2, text: "أحب تنفيذ الأعمال التي تتطلب جهداً عمليًا مثل التركيب أو البناء.", code: "واقعي" },
  { id: 3, text: "أفضل العمل في أماكن مفتوحة أو ورش عمل أكثر من المكاتب.", code: "واقعي" },
  { id: 4, text: "أشعر بالإنجاز عندما أرى نتيجة عملي المادي أمامي.", code: "واقعي" },
  { id: 5, text: "أفضّل التعامل مع الأدوات والآلات على التعامل مع الأوراق والمستندات.", code: "واقعي" },
  { id: 6, text: "أستمتع بالبحث عن أسباب الظواهر وتحليلها منطقيًا.", code: "بحثي" },
  { id: 7, text: "أحب قراءة المقالات أو المجلات العلمية.", code: "بحثي" },
  { id: 8, text: "أجد متعة في إجراء التجارب أو الدراسات الصغيرة لاكتشاف النتائج.", code: "بحثي" },
  { id: 9, text: "أفضل حل المشكلات الفكرية أو العلمية على المشكلات الاجتماعية.", code: "بحثي" },
  { id: 10, text: "أشعر بالرضا عندما أتوصل إلى تفسير أو اكتشاف جديد.", code: "بحثي" },
  { id: 11, text: "أعبّر عن نفسي بالرسم أو الكتابة أو التصميم أو التصوير.", code: "فني" },
  { id: 12, text: "أحب الأعمال التي تتيح لي حرية الإبداع دون قيود رسمية.", code: "فني" },
  { id: 13, text: "أستمتع بابتكار أفكار أو أشكال جديدة في عملي أو دراستي.", code: "فني" },
  { id: 14, text: "أنجذب إلى الجماليات في الصور والألوان والأصوات والتعبير الفني.", code: "فني" },
  { id: 15, text: "أفضل بيئة العمل المرنة التي تشجّع الخيال أكثر من الالتزام بالتعليمات.", code: "فني" },
  { id: 16, text: "أشعر بالراحة عند مساعدة الآخرين أو دعمهم نفسيًا أو اجتماعيًا.", code: "اجتماعي" },
  { id: 17, text: "أستمتع بالتدريس أو الشرح أو التدريب أو الإرشاد للآخرين.", code: "اجتماعي" },
  { id: 18, text: "أجد سعادتي في المشاركة في الأنشطة التطوعية أو الإنسانية.", code: "اجتماعي" },
  { id: 19, text: "أفضل العمل ضمن فريق يحقق هدفًا مشتركًا يخدم الناس.", code: "اجتماعي" },
  { id: 20, text: "يسعدني أن أكون سببًا في تحسن حياة شخص آخر.", code: "اجتماعي" },
  { id: 21, text: "أستمتع بإقناع الآخرين بأفكاري أو عرضها بطريقة مؤثرة.", code: "مقدام" },
  { id: 22, text: "أحبّ تنظيم المشاريع أو قيادة الفرق لتحقيق الأهداف.", code: "مقدام" },
  { id: 23, text: "أشعر بالتحفيز في بيئات المنافسة والتحدي.", code: "مقدام" },
  { id: 24, text: "أفضّل اتخاذ القرار أكثر من تنفيذ التعليمات.", code: "مقدام" },
  { id: 25, text: "أرى نفسي ناجحًا في الأعمال التجارية أو التسويقية أو الإدارية.", code: "مقدام" },
  { id: 26, text: "أستمتع بترتيب الملفات وتنظيم البيانات بدقة.", code: "تقليدي" },
  { id: 27, text: "أفضل تنفيذ التعليمات بوضوح على العمل غير المنظم.", code: "تقليدي" },
  { id: 28, text: "أجد متعة في مراجعة الحسابات أو الجداول أو التقارير.", code: "تقليدي" },
  { id: 29, text: "أحب الالتزام بالقوانين والإجراءات الرسمية في العمل.", code: "تقليدي" },
  { id: 30, text: "أشعر بالراحة في بيئة عمل منظمة ومستقرة وواضحة.", code: "تقليدي" }
];

// أسئلة المواهب (21)
const TALENT_QUESTIONS = [
  { id: 31, text: "أستمتع بحل الألغاز والمسائل التي تحتاج إلى تفكير وتحليل.", code: "ذهنية" },
  { id: 32, text: "عندما أرى شيئًا جديدًا، أسأل نفسي كيف يعمل ولماذا صُنع بهذه الطريقة.", code: "ذهنية" },
  { id: 33, text: "أحب مشاهدة البرامج العلمية أو قراءة القصص عن الاكتشافات والاختراعات.", code: "ذهنية" },
  { id: 34, text: "أعبّر عن أفكاري بالكلمات بسهولة سواء في الحديث أو الكتابة.", code: "لغوية" },
  { id: 35, text: "ألاحظ الأخطاء اللغوية في حديث الآخرين حتى دون قصد.", code: "لغوية" },
  { id: 36, text: "أستمتع بقراءة الكتب والمقالات أكثر من مشاهدة الفيديوهات.", code: "لغوية" },
  { id: 37, text: "أتخيل الأشياء في ذهني بوضوح وكأنني أراها أمامي.", code: "بصرية" },
  { id: 38, text: "أستمتع بالرسم، التصميم، أو ترتيب الأشياء بشكل جميل ومتناسق.", code: "بصرية" },
  { id: 39, text: "أتعلم بسرعة عندما أرى الصور أو الرسوم التوضيحية.", code: "بصرية" },
  { id: 40, text: "أُتقن المهام التي تتطلب استخدام اليدين أو الحركة الدقيقة.", code: "حركية" },
  { id: 41, text: "أعبّر عن مشاعري أحيانًا من خلال حركاتي أو وجهي دون كلام.", code: "حركية" },
  { id: 42, text: "أتعلم بسرعة عندما أمارس الشيء بيدي لا بمجرد قراءته.", code: "حركية" },
  { id: 43, text: "أستطيع فهم مشاعر الآخرين بسهولة والتعامل معها بلطف.", code: "اجتماعية" },
  { id: 44, text: "أستمتع بالعمل مع الآخرين أكثر من العمل وحدي.", code: "اجتماعية" },
  { id: 45, text: "أساعد زملائي عندما يواجهون صعوبات أو مشكلات.", code: "اجتماعية" },
  { id: 46, text: "أحب مراقبة الحيوانات أو النباتات والتفكير في سلوكها.", code: "طبيعية" },
  { id: 47, text: "أستمتع بالتواجد في الطبيعة والاهتمام بالبيئة من حولي.", code: "طبيعية" },
  { id: 48, text: "أتعرف بسهولة على أنواع الحيوانات أو النباتات المختلفة.", code: "طبيعية" },
  { id: 49, text: "أميز الإيقاع أو اللحن الصحيح عندما أسمع أغنية أو نشيدًا.", code: "موسيقية" },
  { id: 50, text: "أستمتع بسماع الأصوات الطبيعية مثل المطر أو زقزقة العصافير.", code: "موسيقية" },
  { id: 51, text: "أجد نفسي أحيانًا أنقر بإيقاع معين أو أُدندن لحنًا خاصًا بي.", code: "موسيقية" }
];

const ALL_QUESTIONS = [...HOLLAND_QUESTIONS, ...TALENT_QUESTIONS];

// مزيج التخصصات
AppData.majorCombinations = {
  'IR': ['هندسة مدنية', 'هندسة ميكانيكية', 'هندسة كهربائية', 'هندسة الحاسب الآلي', 'الهندسة المعمارية', 'هندسة بيئية', 'الكيمياء', 'الكيمياء الحيوية', 'علم الأحياء', 'الهندسة الكيميائية', 'الهندسة الصناعية', 'الهندسة الإلكترونية', 'هندسة الميكاترونيكس', 'الهندسة النووية', 'طب الأسنان', 'الطب البشري', 'علوم المختبرات الطبية', 'علم الأرض', 'فيزياء الأرض', 'علوم البحار', 'الهندسة الزراعية', 'هندسة أجهزة طبية', 'هندسة طيران وفضاء'],
  'S': ['الطب البشري', 'صحة الأسنان', 'التمريض', 'العلاج التنفسي', 'الطوارئ والإسعاف', 'العلاج الوظيفي', 'التغذية السريرية', 'العلاج الطبيعي', 'الشريعة', 'علم الاجتماع', 'خدمة اجتماعية', 'علم النفس', 'تعليم طفولة مبكرة', 'تربية خاصة', 'العلوم الأمنية', 'اللغة العربية', 'اللغة الإنجليزية'],
  'E': ['إدارة الأعمال', 'إدارة الموارد البشرية', 'التسويق', 'القانون', 'نظم معلومات إدارية', 'تقنية المعلومات', 'علوم سياسية', 'الفندقة والسياحة', 'الإذاعة والتلفزيون', 'الصحافة'],
  'A': ['عمارة', 'تصميم داخلي', 'تربية فنية', 'الفنون الجميلة', 'تصميم الجرافيكس', 'الإنتاج المرئي والرقمي', 'تصميم أزياء', 'عمارة البيئة', 'اللغة العربية', 'اللغة الإنجليزية', 'الترجمة'],
  'C': ['إدارة الأعمال', 'إدارة المعلومات الصحية', 'الإحصاء', 'المحاسبة', 'المالية', 'الاقتصاد', 'الأمن الصناعي', 'الجغرافيا', 'الرياضيات', 'علوم الحاسب', 'تقنية المعلومات', 'أمن المعلومات', 'شبكات الحاسب', 'التغذية'],
  'CE': ['إدارة الأعمال', 'اللوجستيات', 'الهندسة الصناعية', 'هندسة الحاسب', 'القانون', 'الشريعة', 'التسويق', 'السياحة والفندقة'],
  'ES': ['إدارة الأعمال', 'الخدمة الاجتماعية', 'علم النفس', 'الشريعة', 'التسويق', 'الإعلام', 'الموارد البشرية'],
  'IS': ['الطب البشري', 'أصول الدين', 'علم النفس', 'الخدمة الاجتماعية', 'علم الاجتماع', 'تقنيات التعليم'],
  'CI': ['إدارة الأعمال', 'الاقتصاد', 'المحاسبة', 'الإحصاء', 'علوم الأرض', 'الجغرافيا', 'القانون', 'المختبرات الطبية', 'الصيدلة', 'الرياضيات', 'علوم الحاسب', 'الذكاء الاصطناعي', 'الشبكات', 'تقنية المعلومات', 'نظم المعلومات'],
  'AI': ['العمارة', 'عمارة البيئة', 'اللغة العربية', 'الإنجليزية', 'الترجمة', 'الإنتاج المرئي والرقمي', 'الصحافة والإعلام'],
  'AS': ['التربية الخاصة', 'الإعاقة السمعية', 'الخدمة الاجتماعية', 'الصحافة', 'الإنتاج المرئي', 'الفنون الإسلامية', 'الفنون الجميلة', 'التربية الفنية', 'أصول الدين', 'اللغات', 'طفولة مبكرة', 'إدارة السكن والمؤسسات'],
  'EI': ['الهندسة الميكانيكية', 'الهندسة الإلكترونية', 'هندسة الأجهزة الطبية', 'الهندسة المدنية', 'الهندسة الكهربائية', 'الهندسة الصناعية', 'هندسة الحاسب', 'إدارة الأعمال', 'الاقتصاد', 'المالية', 'القانون', 'التسويق', 'تقنية المعلومات', 'نظم المعلومات الإدارية', 'هندسة برمجيات'],
  'AE': ['إدارة الأعمال', 'أصول الدين', 'الإنتاج المرئي', 'الإعلان والاتصال التسويقي', 'التسويق', 'التجارة الإلكترونية', 'السياحة والفندقة', 'تصميم أزياء', 'تصميم داخلي', 'عمارة', 'عمارة البيئة', 'العلاقات العامة', 'الإعلام', 'اللغات'],
  'CR': ['الهندسة الميكانيكية', 'الهندسة المدنية', 'الهندسة الزراعية', 'الهندسة البيئية', 'الهندسة الكيميائية', 'الهندسة الكهربائية', 'هندسة المساحة', 'الصحة العامة', 'الفيزياء الطبية', 'تقنية التخدير', 'تقنية الأجهزة الطبية', 'علوم البيئة', 'علوم الأرض', 'فيزياء الأرض', 'الطيران المدني', 'العلوم العسكرية'],
  'AR': ['عمارة', 'تصميم داخلي', 'تصميم أزياء', 'تصميم المنتجات', 'تربية فنية', 'فنون جميلة', 'الفنون الإسلامية', 'الطباعة والتغليف', 'الاقتصاد المنزلي', 'عمارة البيئة'],
  'RS': ['طب الأسنان', 'صحة الأسنان', 'الطب البشري', 'تمريض', 'الطوارئ والإسعاف', 'العلاج التنفسي', 'العلاج الطبيعي', 'العلاج الوظيفي', 'بصريات', 'طفولة مبكرة', 'علوم أمنية', 'التربية البدنية']
};

AppData.majorCombinations['CS_note'] = 'ملاحظة: لا يوجد تخصصات جامعية تتناسب مع الميولين الاجتماعي والتقليدي في نفس الوقت.';
AppData.majorCombinations['ER_note'] = 'ملاحظة: لا يوجد تخصصات جامعية تتناسب مع الميولين المقدام والواقعي في نفس الوقت.';
AppData.majorCombinations['AC_note'] = 'ملاحظة: من النادر اجتماع الميولين الفني والتقليدي معًا.';

// أدوات مساعدة
function serializeReportData(obj) {
  const essential = { studentInfo: obj.studentInfo, hollandScores: obj.hollandScores, talentScores: obj.talentScores };
  return btoa(encodeURIComponent(JSON.stringify(essential)));
}

function deserializeReportData(str) {
  try {
    return JSON.parse(decodeURIComponent(atob(str)));
  } catch (e) {
    return null;
  }
}

function computeScores(answers, questions) {
  const scores = {};
  questions.forEach(q => {
    if (!scores[q.code]) scores[q.code] = 0;
    const v = (answers[q.id] ?? 3) - 3;
    scores[q.code] += v;
  });
  const positive = {};
  Object.keys(scores).forEach(k => positive[k] = Math.max(0, scores[k]));
  return Object.entries(positive).sort((a, b) => b[1] - a[1]);
}

// ============ API ============
async function apiLoadTable(tableName, page = 1, limit = 10, search = '', sort = '') {
  const url = new URL(`/api/tables/${tableName}`, window.location.origin);
  url.searchParams.set('page', page);
  url.searchParams.set('limit', limit);
  if (search) url.searchParams.set('search', search);
  if (sort) url.searchParams.set('sort', sort);
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error('Failed to load table ' + tableName);
  return res.json();
}

async function apiCreate(tableName, data) {
  const res = await fetch(`/api/tables/${tableName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Failed to create record');
  return res.json();
}

async function apiDelete(tableName, id) {
  const res = await fetch(`/api/tables/${tableName}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete');
}

async function apiGetStats() {
  const res = await fetch('/api/stats', { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error('Failed to load stats');
  return res.json();
}

// ============ MAIN ============
'use strict';

// حالة التطبيق
let state = {
  screen: 'start',
  studentInfo: { name: '', class: '' },
  answers: {},
  reportData: null,
  showAdmin: false,
  stats: { usersStarted: 0, reportsCompleted: 0 }
};

const appEl = () => document.getElementById('app');

// أدوات واجهة
function header(progress) {
  return `
  <header class="text-center mb-8 no-print">
    <div class="mb-6">
      <h1 class="text-xl md:text-2xl font-bold text-gray-700 mb-1">شركة مدارس النبلاء الأهلية</h1>
      <h2 class="text-2xl md:text-4xl font-extrabold gradient-text">المرشد المهني التفاعلي</h2>
    </div>
    <div class="max-w-2xl mx-auto ${state.screen === 'start' ? 'hidden' : ''}">
      <div class="bg-gray-200 rounded-full h-2.5">
        <div class="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] h-2.5 rounded-full progress-bar-fill" style="width:${progress}%"></div>
      </div>
    </div>
  </header>`;
}

function render() {
  const progress = state.screen === 'start' ? 0 : (state.screen === 'assessment' ? 50 : 100);
  let html = header(progress);
  if (state.screen === 'start') html += renderStart();
  else if (state.screen === 'assessment') html += renderAssessment();
  else if (state.screen === 'report') html += renderReport();
  appEl().innerHTML = html;
  attachEvents();
}

async function refreshCounts() {
  try {
    const stats = await apiGetStats();
    state.stats.usersStarted = stats.totalStarts || 0;
    state.stats.reportsCompleted = stats.totalReports || 0;
    const userCountEl = document.getElementById('user-count');
    const reportCountEl = document.getElementById('report-count');
    if (userCountEl) userCountEl.textContent = state.stats.usersStarted;
    if (reportCountEl) reportCountEl.textContent = state.stats.reportsCompleted;
  } catch (e) {
    console.warn('Failed to load counters', e);
  }
}

function renderStart() {
  return `
  <section id="start-screen" class="fade-in">
    <div class="grid md:grid-cols-2 gap-8 items-center custom-card p-8">
      <div class="text-center md:text-right">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[var(--brand-2)] leading-tight">اكتشف مسارك المهني بثقة</h2>
        <p class="mt-4 text-lg text-gray-600">انطلق في رحلة تفاعلية من خطوتين لتحديد ميولك ومواهبك، واحصل على تقرير مخصص يساعدك في اختيار تخصصك الجامعي والمهني.</p>
        <div class="mt-6 space-y-4">
          <div>
            <label for="student-name" class="block text-sm font-medium text-gray-700 mb-1">اسمك الكامل</label>
            <input type="text" id="student-name" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[var(--brand-1)] focus:border-[var(--brand-1)] transition" placeholder="مثال: عبد الله بن محمد" required />
          </div>
          <div>
            <label for="student-class" class="block text-sm font-medium text-gray-700 mb-1">المرحلة الدراسية</label>
            <input type="text" id="student-class" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[var(--brand-1)] focus:border-[var(--brand-1)] transition" placeholder="مثال: ثالث ثانوي" />
          </div>
        </div>
        <button id="start-btn" class="mt-8 w-full md:w-auto bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-bold py-3 px-10 rounded-lg hover:shadow-xl transition-all text-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none" disabled>
          🚀 ابدأ الرحلة
        </button>
      </div>
      <div class="hidden md:block">
        <img src="https://www.genspark.ai/api/files/s/wmOEq2Et" alt="خطوتك الأولى نحو مستقبل مشرق" class="rounded-lg" />
      </div>
    </div>
    <div class="flex justify-center gap-8 mt-6 text-gray-500 py-4">
      <div class="text-center">
        <p class="text-sm">مستخدم شارك</p>
        <span id="user-count" class="text-3xl font-bold text-[var(--brand-2)]">${state.stats.usersStarted}</span>
      </div>
      <div class="border-l"></div>
      <div class="text-center">
        <p class="text-sm">تقرير تم إنجازه</p>
        <span id="report-count" class="text-3xl font-bold text-[var(--brand-2)]">${state.stats.reportsCompleted}</span>
      </div>
    </div>
  </section>`;
}

function renderAssessment() {
  const total = ALL_QUESTIONS.length;
  const idx = state.currentIndex ?? 0;
  const q = ALL_QUESTIONS[idx];
  const step = idx < HOLLAND_QUESTIONS.length ? 'holland' : 'talent';
  const stepTotal = step === 'holland' ? HOLLAND_QUESTIONS.length : TALENT_QUESTIONS.length;
  const stepCurrent = step === 'holland' ? idx + 1 : (idx - HOLLAND_QUESTIONS.length) + 1;
  const stepProgress = Math.round(stepCurrent / stepTotal * 100);

  return `
  <div class="min-h-screen py-12 fade-in">
    <div class="container mx-auto px-4 max-w-2xl">
      <button id="btn-prev" class="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"><i class="fa-solid fa-arrow-right-long"></i> رجوع</button>

      <div class="custom-card">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-slate-600">${step === 'holland' ? `السؤال ${idx + 1}` : `السؤال ${idx - HOLLAND_QUESTIONS.length + 1}`} من ${stepTotal}</span>
            <span class="text-sm font-bold text-[var(--brand-2)]">${stepProgress}%</span>
          </div>
          <div class="bg-gray-200 rounded-full h-2.5 mb-4">
            <div class="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] h-2.5 rounded-full progress-bar-fill" style="width:${stepProgress}%"></div>
          </div>
          <h2 class="text-2xl font-bold text-[var(--brand-2)]">${step === 'holland' ? 'الخطوة 1/2: استبيان الميول المهنية' : 'الخطوة 2/2: استبيان المواهب'}</h2>
          <p class="text-gray-500 mt-2">${step === 'holland' ? 'لكل نشاط، حدد مدى استمتاعك به. كن صريحًا مع نفسك.' : 'لكل عبارة، حدِّد مدى استمتاعك بها أو توافقك معها.'}</p>
        </div>
        <div class="p-6 border-t border-gray-100 space-y-6">
          <h3 class="text-lg font-semibold text-gray-900">${q.text}</h3>
          <div class="space-y-3">
            ${[
    { value: 5, label: 'أتفق بشدة', emoji: '😍' },
    { value: 4, label: 'أتفق', emoji: '😊' },
    { value: 3, label: 'محايد', emoji: '😐' },
    { value: 2, label: 'لا أتفق', emoji: '☹️' },
    { value: 1, label: 'لا أتفق بشدة', emoji: '😞' }
  ].map(opt => {
    const selected = state.answers[q.id] === opt.value;
    return `<button class="opt w-full p-4 rounded-lg border-2 transition-all text-right ${selected ? 'border-[var(--brand-2)] bg-purple-50 ring-2 ring-[var(--brand-1)]' : 'border-slate-200 hover:border-[var(--brand-1)]'}" data-value="${opt.value}">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">${opt.emoji}</span>
                    <span class="font-medium">${opt.label}</span>
                  </div>
                  ${selected ? '<i class="fa-solid fa-circle-check text-[var(--brand-2)]"></i>' : ''}
                </div>
              </button>`
  }).join('')}
          </div>
          <div class="flex gap-4 pt-4">
            <button id="btn-prev-2" class="flex-1 flex justify-center items-center gap-2 bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors text-lg"><i class="fa-solid fa-arrow-right-long"></i> السابق</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderReport() {
  const { hollandScores, talentScores, studentInfo } = state.reportData;
  const i1 = AppData.interests[hollandScores[0][0]];
  const i2 = AppData.interests[hollandScores[1][0]];
  const codes = [i1.code, i2.code].sort();
  const combined = codes.join('');
  const total = hollandScores.reduce((a, [, s]) => a + s, 0);
  let majors = AppData.majorCombinations[combined] || [];
  let note = AppData.majorCombinations[combined + "_note"] || null;
  if (note) {
    majors = [...new Set([...(AppData.majorCombinations[codes[0]] || []), ...(AppData.majorCombinations[codes[1]] || [])])];
  }
  const uniqueMajors = [...new Set(majors)];

  return `
  <section id="report-screen" class="fade-in">
    <div id="report-container" class="custom-card p-4 md:p-8">
      <div class="text-center mb-4">
        <h1 class="text-3xl font-extrabold text-[var(--brand-2)]">التقرير المهني الشامل</h1>
      </div>
      <div class="mb-6 p-4 bg-gray-100 rounded-lg text-right">
        <p class="text-lg"><strong>الطالب/ة:</strong> ${studentInfo.name || 'غير محدد'}</p>
        <p class="text-lg"><strong>الصف:</strong> ${studentInfo.class || 'غير محدد'}</p>
      </div>

      <div class="text-center mb-8">
        <h2 id="report-main-title" class="text-2xl font-bold text-[var(--brand-2)]">ملخص تقريرك</h2>
        <p class="mt-2 text-gray-600">مرحباً <span id="report-student-name" class="font-bold">${studentInfo.name}</span>، هذا هو تحليل شخصيتك المهنية.</p>
      </div>

      <div id="report-content" class="space-y-10">
        <div class="p-6 bg-gray-50 rounded-lg report-section">
          <h3 class="text-xl font-bold mb-4 text-[var(--brand-2)]">شخصيتك المهنية (نموذج هولاند)</h3>
          <div class="md:flex md:items-center md:gap-8">
            <div class="flex-shrink-0 text-center md:text-right mb-4 md:mb-0">
              <p class="text-lg text-gray-500">رمزك هو:</p>
              <p class="font-mono font-bold text-5xl gradient-text">${combined}</p>
            </div>
            <div class="flex-grow">
              <p class="text-gray-700">وهذا يعني أن ميولك الرئيسية هي: <strong>${i1.title}</strong> و <strong>${i2.title}</strong>.</p>
            </div>
          </div>
          <div class="mt-6">
            <p class="font-semibold mb-2">توزيع ميولك:</p>
            <div class="space-y-2">
              ${hollandScores.map(([name, score]) => {
    const info = AppData.interests[name];
    const perc = total > 0 ? (score / total * 100) : 0;
    return `<div class="flex items-center gap-3">
                  <div class="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-[var(--brand-2)] flex-shrink-0">${AppData.icons[info.code]}</div>
                  <div class="w-28 text-sm font-medium text-gray-600">${info.title}</div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] h-2.5 rounded-full" style="width:${Math.max(0, perc)}%"></div>
                  </div>
                </div>`
  }).join('')}
            </div>
          </div>
        </div>

        <div class="p-6 bg-gray-50 rounded-lg report-section">
          <h3 class="text-xl font-bold mb-4 text-[var(--brand-2)]">أبرز مواهبك</h3>
          <div class="flex flex-wrap gap-4">
            ${talentScores.slice(0, 2).map(([name]) => `<span class="bg-amber-100 text-amber-800 text-md font-semibold px-4 py-2 rounded-full">${AppData.talents[name].title}</span>`).join('')}
          </div>
        </div>

        <div class="p-6 bg-gray-50 rounded-lg report-section">
          <h3 class="text-xl font-bold mb-4 text-[var(--brand-2)]">تخصصات مقترحة لك</h3>
          ${note ? `<div class="mb-4 p-3 bg-yellow-50 border-r-4 border-yellow-400 text-yellow-800 rounded">${note}</div>` : ''}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${uniqueMajors.length ? uniqueMajors.map((m, i) => `
              <div class="bg-white p-3 rounded-lg border flex flex-col justify-between items-center text-center">
                <span class="font-semibold mb-3">${m}</span>
                <div class="flex flex-wrap justify-center gap-2 w-full">
                  <button class="btn-mini about text-xs bg-[var(--brand-2)] text-white px-3 py-1 rounded-full hover:opacity-90 transition-colors flex-grow" data-major="${m}">نبذة</button>
                  <button class="btn-mini paths text-xs bg-[#DDB979] text-[var(--brand-2)] px-3 py-1 rounded-full hover:opacity-90 transition-colors flex-grow" data-major="${m}">وظائف</button>
                  <button class="btn-mini skills text-xs bg-sky-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition-colors flex-grow w-full" data-major="${m}">كيف أستعد له؟</button>
                </div>
              </div>`).join('') : '<p class="col-span-full text-center">لا توجد توصيات حالياً.</p>'}
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 border-r-4 border-blue-400 text-blue-800 rounded report-section">
          <h4 class="font-bold">ملاحظة هامة:</h4>
          <p>هذا التقرير هو نقطة بداية إرشادية. قرار اختيار التخصص يعتمد أيضاً على قدراتك الدراسية، الفرص المتاحة، وسوق العمل.</p>
        </div>
      </div>
    </div>

    <div id="report-actions" class="mt-6 pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 no-pdf no-print">
      <button id="restart" class="flex items-center justify-center gap-2 bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors text-lg shadow-md w-full sm:w-auto"><i class="fa-solid fa-rotate"></i> إعادة المقياس</button>
      <button id="export-pdf" class="flex items-center justify-center gap-2 bg-[#DDB979] text-[var(--brand-2)] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-colors text-lg shadow-md w-full sm:w-auto"><i class="fa-solid fa-file-arrow-down"></i> تصدير التقرير (PDF)</button>
      <button id="share" class="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-md w-full sm:w-auto"><i class="fa-solid fa-share-nodes"></i> مشاركة التقرير</button>
    </div>
  </section>`;
}

function attachEvents() {
  if (state.screen === 'start') {
    const nameEl = document.getElementById('student-name');
    const clsEl = document.getElementById('student-class');
    const btn = document.getElementById('start-btn');
    const toggleAdmin = document.getElementById('toggle-admin');
    const onInput = () => { btn.disabled = !(nameEl.value.trim().length > 0); };
    nameEl.addEventListener('input', onInput);
    clsEl.addEventListener('input', onInput);
    btn.addEventListener('click', async () => {
      state.studentInfo = { name: nameEl.value.trim(), class: clsEl.value.trim() };
      try {
        await apiCreate('starts', { student_name: state.studentInfo.name, student_class: state.studentInfo.class, created_at: new Date().toISOString() });
      } catch (e) {
        console.warn('start save failed', e);
      }
      await refreshCounts();
      state.currentIndex = 0;
      state.answers = {};
      state.screen = 'assessment';
      render();
    });
    if (toggleAdmin) toggleAdmin.onclick = () => openAdmin();
  }

  if (state.screen === 'assessment') {
    const prev1 = document.getElementById('btn-prev');
    const prev2 = document.getElementById('btn-prev-2');
    const idx = state.currentIndex ?? 0;
    const q = ALL_QUESTIONS[idx];
    document.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const value = Number(btn.getAttribute('data-value'));
        state.answers[q.id] = value;
        setTimeout(() => nextQuestion(), 120);
      })
    });
    const goBack = () => {
      if (state.currentIndex === 0) {
        state.screen = 'start';
        render();
      }
      else {
        state.currentIndex = state.currentIndex - 1;
        render();
      }
    };
    prev1.addEventListener('click', goBack);
    prev2.addEventListener('click', goBack);
  }

  if (state.screen === 'report') {
    document.getElementById('restart').onclick = () => {
      state = { screen: 'start', studentInfo: { name: '', class: '' }, answers: {}, reportData: null, showAdmin: false, stats: state.stats };
      window.location.hash = '';
      render();
    };
    document.getElementById('export-pdf').onclick = () => window.print();
    document.getElementById('share').onclick = async () => {
      const url = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({ title: 'تقريري المهني', text: `تقرير ${state.studentInfo.name}`, url });
        } catch (e) { }
      }
      else {
        await navigator.clipboard.writeText(url);
        alert('تم نسخ رابط التقرير بنجاح');
      }
    };

    document.querySelectorAll('.btn-mini.about').forEach(b => b.addEventListener('click', () => showModal('نبذة عن التخصص', aboutMajor(b.dataset.major))));
    document.querySelectorAll('.btn-mini.paths').forEach(b => b.addEventListener('click', () => showModal('مسارات وظيفية', listCareers(b.dataset.major))));
    document.querySelectorAll('.btn-mini.skills').forEach(b => b.addEventListener('click', () => showModal('كيف أستعد؟', listSkills(b.dataset.major))));
  }
}

function nextQuestion() {
  const idx = state.currentIndex ?? 0;
  if (idx < ALL_QUESTIONS.length - 1) {
    state.currentIndex = idx + 1;
    render();
  }
  else {
    const hollandScores = computeScores(state.answers, HOLLAND_QUESTIONS);
    const talentScores = computeScores(state.answers, TALENT_QUESTIONS);
    const i1 = AppData.interests[hollandScores[0][0]];
    const i2 = AppData.interests[hollandScores[1][0]];
    const codes = [i1.code, i2.code].sort();
    const combined = codes.join('');
    const hollandTitle = `${i1.title} و ${i2.title}`;
    const t1 = AppData.talents[talentScores[0][0]].title;
    const t2 = talentScores[1] ? AppData.talents[talentScores[1][0]].title : '';

    apiCreate('reports', {
      student_name: state.studentInfo.name,
      student_class: state.studentInfo.class,
      holland_code: combined,
      holland_title: hollandTitle,
      talent1: t1,
      talent2: t2,
      created_at: new Date().toISOString()
    }).catch(() => { }).finally(async () => { await refreshCounts(); });

    state.reportData = { hollandScores, talentScores, studentInfo: state.studentInfo };

    try {
      const serialized = serializeReportData(state.reportData);
      history.replaceState(null, '', `#report=${serialized}`);
    } catch (e) { }

    state.screen = 'report';
    render();
  }
}

function aboutMajor(major) {
  return `<p class="text-gray-700 leading-relaxed">${major}: نبذة موجزة — يتناول هذا التخصص أساسيات علمية ومهارية تؤهلك لمسارات متعددة. ستتعرف على مفاهيم رئيسية ومهارات عملية يحتاجها سوق العمل، مع فرص تدريب وتطبيقات واقعية.</p>`;
}

function listCareers(major) {
  const items = [
    { title: 'مسار أكاديمي/بحثي', description: `العمل في التعليم أو المختبرات وتطوير المعرفة في ${major}.` },
    { title: 'مسار مهني تطبيقي', description: `الانضمام إلى فرق تنفيذية أو تشغيلية في مجالات مرتبطة بـ ${major}.` },
    { title: 'مسار إداري', description: `تنسيق مشاريع وفرق عمل وتبنّي ممارسات جودة في نطاق ${major}.` },
    { title: 'مسار ريادي', description: `إنشاء مشروع ناشئ يقدم حلولاً مبتكرة في مجال ${major}.` }
  ];
  return `<ul class="space-y-4 text-right">${items.map(p => `<li class="pb-2 border-b border-gray-200 last:border-0"><strong class="font-semibold text-[var(--brand-2)]">${p.title}</strong><p class="text-gray-600 mt-1">${p.description}</p></li>`).join('')}</ul>`;
}

function listSkills(major) {
  const items = [
    { skill: 'مشروع مصغر', description: `نفّذ مشروعًا عمليًا صغيرًا مرتبطًا بـ ${major} (أسبوعان).` },
    { skill: 'دورة تأسيسية', description: `خذ دورة قصيرة لتعزيز مهارات أساسية يحتاجها ${major}.` },
    { skill: 'تطوع/تظليل وظيفي', description: `شارك مع جهة تقدم خدمات قريبة من ${major} لتجربة الواقع.` }
  ];
  return `<ul class="space-y-4 text-right">${items.map(i => `<li class="pb-2 border-b border-gray-200 last:border-0"><strong class="font-semibold text-sky-700">${i.skill}</strong><p class="text-gray-600 mt-1">${i.description}</p></li>`).join('')}</ul>`;
}

function showModal(title, content) {
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 fade-in no-print';
  overlay.addEventListener('click', () => document.body.removeChild(overlay));
  const box = document.createElement('div');
  box.className = 'bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative custom-card';
  box.addEventListener('click', e => e.stopPropagation());
  box.innerHTML = `
    <button class="absolute top-4 left-4 text-gray-400 hover:text-gray-800 text-2xl font-bold">&times;</button>
    <h3 class="text-2xl font-bold mb-4 text-[var(--brand-2)]">${title}</h3>
    <div class="text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">${content}</div>`;
  box.querySelector('button').onclick = () => document.body.removeChild(overlay);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

async function openAdmin() {
  state.showAdmin = true;
  await refreshCounts();

  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 fade-in no-print';
  overlay.addEventListener('click', () => { state.showAdmin = false; document.body.removeChild(overlay); });

  const box = document.createElement('div');
  box.className = 'bg-white rounded-lg shadow-xl w-full max-w-5xl p-6 relative custom-card max-h-[90vh] overflow-y-auto';
  box.addEventListener('click', e => e.stopPropagation());
  box.innerHTML = `
    <div class="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-4 border-b">
      <h2 class="text-2xl font-bold text-[var(--brand-2)]">لوحة التحكم</h2>
      <div class="flex gap-2">
        <button id="btn-refresh" class="p-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <i class="fa-solid fa-rotate"></i> تحديث
        </button>
        <button id="btn-export" class="p-2 text-sm bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors flex items-center gap-2">
          <i class="fa-solid fa-file-export"></i> تصدير (CSV)
        </button>
        <button class="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors" id="btn-close">
          <i class="fa-solid fa-xmark text-gray-700"></i>
        </button>
      </div>
    </div>

    <h3 class="text-lg font-semibold mb-2">إحصائيات عامة</h3>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
        <i class="fa-solid fa-users text-[22px] text-[var(--brand-1)]"></i>
        <div>
          <div class="text-3xl font-extrabold text-[var(--brand-2)]" id="adm-users">${state.stats.usersStarted}</div>
          <div class="text-sm text-gray-600">مستخدم شارك</div>
        </div>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
        <i class="fa-solid fa-file-lines text-[22px] text-[var(--brand-1)]"></i>
        <div>
          <div class="text-3xl font-extrabold text-[var(--brand-2)]" id="adm-reports">${state.stats.reportsCompleted}</div>
          <div class="text-sm text-gray-600">تقرير تم إنجازه</div>
        </div>
      </div>
    </div>

    <h3 class="text-lg font-semibold mb-4">أحدث التقارير المنجزة</h3>
    <div class="overflow-x-auto max-h-[40vh] overflow-y-auto border rounded-lg">
      <table class="min-w-full divide-y divide-gray-200" id="adm-table">
        <thead class="bg-gray-100 sticky top-0">
          <tr>
            <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
            <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الرمز/الميول</th>
            <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الموهبة</th>
            <th class="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ الإنشاء</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200" id="adm-tbody">
          <tr><td colspan="4" class="text-center p-4"><div class="spinner mx-auto"></div></td></tr>
        </tbody>
      </table>
    </div>
  `;
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  const closeOverlay = () => { state.showAdmin = false; document.body.removeChild(overlay); };
  box.querySelector('#btn-close').onclick = closeOverlay;
  box.querySelector('#btn-export').onclick = () => exportCSV();
  box.querySelector('#btn-refresh').onclick = async () => {
    await loadAdminData(box.querySelector('#adm-tbody'));
    await refreshCounts();
    box.querySelector('#adm-users').textContent = state.stats.usersStarted;
    box.querySelector('#adm-reports').textContent = state.stats.reportsCompleted;
  };

  await loadAdminData(box.querySelector('#adm-tbody'));
}

async function loadAdminData(tbody) {
  tbody.innerHTML = '<tr><td colspan="4" class="text-center p-4"><div class="spinner mx-auto"></div></td></tr>';
  try {
    const res = await apiLoadTable('reports', 1, 100);
    const rows = res.data || [];
    if (rows.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" class="text-center p-4 text-gray-500">لا توجد تقارير منجزة حتى الآن.</td></tr>';
    } else {
      tbody.innerHTML = rows.map(r => {
        const created = r.created_at ? new Date(r.created_at).toLocaleString('ar-EG', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : 'غير محدد';
        return `<tr>
          <td class="px-4 py-3 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">${r.student_name || 'غير محدد'}</div>
            <div class="text-xs text-gray-500">${r.student_class || 'غير محدد'}</div>
          </td>
          <td class="px-4 py-3 whitespace-nowrap">
            <div class="text-sm text-gray-900">${r.holland_code || '-'}</div>
            <div class="text-xs text-gray-500">${r.holland_title || '-'}</div>
          </td>
          <td class="px-4 py-3 whitespace-nowrap">
            <div class="text-sm text-gray-900">${r.talent1 || '-'}</div>
            <div class="text-xs text-gray-500">${r.talent2 || ''}</div>
          </td>
          <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-500">${created}</td>
        </tr>`;
      }).join('');
    }
  } catch (e) {
    console.error('Failed to load reports:', e);
    tbody.innerHTML = '<tr><td colspan="4" class="text-center p-4 text-red-500">حدث خطأ في تحميل البيانات. يرجى المحاولة مرة أخرى.</td></tr>';
  }
}

async function exportCSV() {
  try {
    const res = await apiLoadTable('reports', 1, 1000);
    const header = ['ID', 'الاسم', 'الصف', 'الرمز', 'الميول (هولاند)', 'الموهبة 1', 'الموهبة 2', 'تاريخ الإنشاء'];
    const rows = (res.data || []).map(r => {
      const created = r.created_at ? new Date(r.created_at).toLocaleString('ar-EG', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
      return [r.id || '', `"${r.student_name || ''}"`, `"${r.student_class || ''}"`, r.holland_code || '', r.holland_title || '', r.talent1 || '', r.talent2 || '', created].join(',');
    });
    const csv = [header.join(','), ...rows].join('\n');
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `career-guidance-reports-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (e) {
    console.error('Export failed:', e);
    alert('حدث خطأ أثناء تصدير البيانات. يرجى المحاولة مرة أخرى.');
  }
}

function initFromHash() {
  const h = location.hash;
  if (h && h.startsWith('#report=')) {
    const data = deserializeReportData(h.substring(8));
    if (data && data.studentInfo && data.hollandScores && data.talentScores) {
      state.studentInfo = data.studentInfo;
      state.reportData = data;
      state.screen = 'report';
    } else {
      location.hash = '';
    }
  }
}

(async function start() {
  await refreshCounts();
  initFromHash();
  render();
})();
