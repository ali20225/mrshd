// Career Guide Application - Main Script

// Application State
const appState = {
  currentStep: 0,
  studentData: {
    name: '',
    class: '',
    email: ''
  },
  selectedInterests: [],
  skillRatings: {},
  results: null
};

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  test: document.getElementById('test-screen'),
  results: document.getElementById('results-screen')
};

const steps = {
  step1: document.getElementById('step1'),
  step2: document.getElementById('step2')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupEventListeners();
  loadCounters();
});

/**
 * Initialize the application
 */
function initializeApp() {
  // Check if there are saved results
  const savedResults = loadResults();
  if (savedResults) {
    // Could offer to view previous results
    console.log('Previous results found', savedResults);
  }
  
  // Initialize counters with animation
  updateCounters();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  // Start form submission
  const startForm = document.getElementById('student-form');
  if (startForm) {
    startForm.addEventListener('submit', handleStartTest);
  }
  
  // Navigation buttons
  const nextStep1 = document.getElementById('next-step1');
  if (nextStep1) {
    nextStep1.addEventListener('click', () => navigateToStep(2));
  }
  
  const prevStep2 = document.getElementById('prev-step2');
  if (prevStep2) {
    prevStep2.addEventListener('click', () => navigateToStep(1));
  }
  
  const submitTest = document.getElementById('submit-test');
  if (submitTest) {
    submitTest.addEventListener('click', handleSubmitTest);
  }
  
  // Results actions
  const printReport = document.getElementById('print-report');
  if (printReport) {
    printReport.addEventListener('click', () => window.print());
  }
  
  const downloadPDF = document.getElementById('download-pdf');
  if (downloadPDF) {
    downloadPDF.addEventListener('click', () => {
      generatePDF(appState.studentData, appState.results);
    });
  }
  
  const restartTest = document.getElementById('restart-test');
  if (restartTest) {
    restartTest.addEventListener('click', handleRestartTest);
  }
}

/**
 * Handle start test form submission
 */
function handleStartTest(e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('student-name');
  const classInput = document.getElementById('student-class');
  const emailInput = document.getElementById('student-email');
  
  // Validate inputs
  if (!nameInput.value.trim()) {
    showNotification('الرجاء إدخال الاسم', 'error');
    nameInput.focus();
    return;
  }
  
  if (!classInput.value) {
    showNotification('الرجاء اختيار المرحلة الدراسية', 'error');
    classInput.focus();
    return;
  }
  
  if (emailInput.value && !validateEmail(emailInput.value)) {
    showNotification('الرجاء إدخال بريد إلكتروني صحيح', 'error');
    emailInput.focus();
    return;
  }
  
  // Save student data
  appState.studentData = {
    name: nameInput.value.trim(),
    class: classInput.value,
    email: emailInput.value.trim()
  };
  
  // Show test screen
  showScreen('test');
  renderInterestsStep();
  
  // Update user count
  const userCount = parseInt(localStorage.getItem('userCount') || '1247') + 1;
  localStorage.setItem('userCount', userCount.toString());
  
  // Show progress bar
  const progressContainer = document.getElementById('progress-container');
  if (progressContainer) {
    progressContainer.classList.remove('hidden');
  }
  
  updateProgress(1, 2);
  
  showNotification('بدأت الرحلة! اختر المجالات التي تهمك', 'success');
}

/**
 * Render interests selection step
 */
function renderInterestsStep() {
  const container = document.getElementById('interests-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  careersData.interests.forEach(interest => {
    const card = document.createElement('div');
    card.className = 'interest-card';
    card.dataset.interestId = interest.id;
    
    card.innerHTML = `
      <span class="interest-icon">${interest.icon}</span>
      <h3 class="interest-title">${interest.title}</h3>
      <p class="interest-description">${interest.description}</p>
    `;
    
    card.addEventListener('click', () => toggleInterest(interest.id, card));
    
    container.appendChild(card);
  });
  
  updateSelectionCounter();
}

/**
 * Toggle interest selection
 */
function toggleInterest(interestId, cardElement) {
  const index = appState.selectedInterests.indexOf(interestId);
  
  if (index > -1) {
    // Remove selection
    appState.selectedInterests.splice(index, 1);
    cardElement.classList.remove('selected');
  } else {
    // Add selection (max 5)
    if (appState.selectedInterests.length >= 5) {
      showNotification('يمكنك اختيار 5 مجالات كحد أقصى', 'error');
      return;
    }
    appState.selectedInterests.push(interestId);
    cardElement.classList.add('selected');
  }
  
  updateSelectionCounter();
  
  // Enable/disable next button
  const nextBtn = document.getElementById('next-step1');
  if (nextBtn) {
    nextBtn.disabled = appState.selectedInterests.length === 0;
  }
}

/**
 * Update selection counter
 */
function updateSelectionCounter() {
  const counter = document.getElementById('selected-count');
  if (counter) {
    counter.textContent = appState.selectedInterests.length;
  }
}

/**
 * Navigate to specific step
 */
function navigateToStep(stepNumber) {
  if (stepNumber === 2) {
    if (appState.selectedInterests.length === 0) {
      showNotification('الرجاء اختيار مجال واحد على الأقل', 'error');
      return;
    }
    
    steps.step1.classList.add('hidden');
    steps.step2.classList.remove('hidden');
    renderSkillsStep();
    updateProgress(2, 2);
    scrollToElement('test-screen', 50);
  } else {
    steps.step2.classList.add('hidden');
    steps.step1.classList.remove('hidden');
    updateProgress(1, 2);
    scrollToElement('test-screen', 50);
  }
}

/**
 * Render skills assessment step
 */
function renderSkillsStep() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  skillsData.skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    skillItem.innerHTML = `
      <div class="skill-name">
        <span>${skill.icon}</span>
        <span>${skill.name}</span>
      </div>
      <div class="skill-rating" data-skill-id="${skill.id}">
        ${[1, 2, 3, 4, 5].map(rating => `
          <button type="button" class="rating-btn" data-rating="${rating}">
            ${rating}
          </button>
        `).join('')}
      </div>
      <p class="text-sm text-gray-500 text-center mt-2">${skill.description}</p>
    `;
    
    // Add click handlers to rating buttons
    const ratingButtons = skillItem.querySelectorAll('.rating-btn');
    ratingButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = parseInt(btn.dataset.rating);
        selectRating(skill.id, rating, skillItem);
      });
    });
    
    container.appendChild(skillItem);
  });
}

/**
 * Select rating for a skill
 */
function selectRating(skillId, rating, skillElement) {
  appState.skillRatings[skillId] = rating;
  
  // Update UI
  const ratingButtons = skillElement.querySelectorAll('.rating-btn');
  ratingButtons.forEach(btn => {
    const btnRating = parseInt(btn.dataset.rating);
    if (btnRating <= rating) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

/**
 * Handle test submission
 */
function handleSubmitTest() {
  // Check if all skills are rated
  const totalSkills = skillsData.skills.length;
  const ratedSkills = Object.keys(appState.skillRatings).length;
  
  if (ratedSkills < totalSkills) {
    showNotification(`الرجاء تقييم جميع المهارات (${ratedSkills}/${totalSkills})`, 'error');
    return;
  }
  
  // Show loading
  showLoading(true);
  
  // Simulate processing delay
  setTimeout(() => {
    // Generate results
    appState.results = generateRecommendations(
      appState.selectedInterests,
      appState.skillRatings
    );
    
    // Save results
    saveResults(appState.studentData, appState.results);
    
    // Hide loading
    showLoading(false);
    
    // Show results
    showScreen('results');
    renderResults();
    
    // Update counters
    updateCounters();
    
    showNotification('تم إنشاء تقريرك بنجاح! 🎉', 'success');
  }, 2000);
}

/**
 * Render results
 */
function renderResults() {
  const container = document.getElementById('results-content');
  if (!container) return;
  
  const topSkills = getTopSkills(appState.skillRatings, 5);
  const selectedInterestDetails = appState.selectedInterests.map(id =>
    careersData.interests.find(i => i.id === id)
  );
  
  container.innerHTML = `
    <!-- Student Info -->
    <div class="result-section">
      <h3><i class="fas fa-user-circle text-purple-600"></i> معلومات الطالب</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <p class="text-gray-600 text-sm">الاسم</p>
          <p class="text-xl font-bold text-gray-800">${appState.studentData.name}</p>
        </div>
        <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <p class="text-gray-600 text-sm">المرحلة الدراسية</p>
          <p class="text-xl font-bold text-gray-800">${appState.studentData.class}</p>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-4">
        <i class="fas fa-calendar-alt ml-1"></i>
        تاريخ التقرير: ${formatDateArabic(new Date())}
      </p>
    </div>
    
    <!-- Selected Interests -->
    <div class="result-section">
      <h3><i class="fas fa-heart text-pink-600"></i> ميولك المهنية</h3>
      <div class="grid md:grid-cols-3 gap-4">
        ${selectedInterestDetails.map(interest => `
          <div class="p-4 bg-white rounded-lg border-2 border-purple-200 text-center hover-lift">
            <span class="text-4xl mb-2 block">${interest.icon}</span>
            <h4 class="font-bold text-gray-800">${interest.title}</h4>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Top Skills -->
    <div class="result-section">
      <h3><i class="fas fa-star text-yellow-500"></i> أبرز مهاراتك</h3>
      <div class="space-y-4">
        ${topSkills.map(([skillId, rating]) => {
          const skill = skillsData.skills.find(s => s.id === skillId);
          const interpretation = getSkillInterpretation(rating);
          const percentage = (rating / 5) * 100;
          
          return `
            <div class="p-4 bg-white rounded-lg border border-gray-200">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">${skill.icon}</span>
                  <span class="font-semibold text-gray-800">${skill.name}</span>
                </div>
                <span class="text-lg font-bold" style="color: ${interpretation.color}">
                  ${rating}/5
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div class="h-3 rounded-full transition-all duration-1000" 
                     style="width: ${percentage}%; background: ${interpretation.color}">
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-2">${interpretation.description}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    
    <!-- Career Recommendations -->
    <div class="result-section">
      <h3><i class="fas fa-graduation-cap text-blue-600"></i> التخصصات الموصى بها</h3>
      <p class="text-gray-600 mb-4">بناءً على ميولك ومهاراتك، إليك أفضل التخصصات المناسبة لك:</p>
      <div class="space-y-4">
        ${appState.results.map((rec, index) => `
          <div class="recommendation-card">
            <div class="flex justify-between items-start mb-3">
              <h4 class="recommendation-title">
                ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '✨'} 
                ${rec.title}
              </h4>
              <span class="match-percentage">${rec.matchPercentage}% مطابقة</span>
            </div>
            <p class="recommendation-description">${rec.description}</p>
            <div class="mb-3">
              <p class="font-semibold text-gray-700 mb-2">التخصصات المقترحة:</p>
              <div class="career-paths">
                ${rec.majors.map(major => `
                  <span class="career-tag">${major}</span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Next Steps -->
    <div class="result-section bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
      <h3><i class="fas fa-route text-purple-600"></i> الخطوات القادمة</h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
          <div>
            <strong>ابحث أكثر:</strong> اقرأ عن التخصصات المقترحة وفرص العمل المتاحة
          </div>
        </li>
        <li class="flex items-start gap-3">
          <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
          <div>
            <strong>تحدث مع الخبراء:</strong> استشر مرشدك المهني أو متخصصين في المجال
          </div>
        </li>
        <li class="flex items-start gap-3">
          <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
          <div>
            <strong>جرّب:</strong> ابحث عن فرص تطوعية أو تدريبية في هذه المجالات
          </div>
        </li>
        <li class="flex items-start gap-3">
          <i class="fas fa-check-circle text-purple-600 text-xl mt-1"></i>
          <div>
            <strong>طوّر مهاراتك:</strong> ركز على تطوير المهارات المطلوبة لتخصصك المفضل
          </div>
        </li>
      </ul>
    </div>
  `;
  
  scrollToElement('results-screen', 50);
}

/**
 * Show specific screen
 */
function showScreen(screenName) {
  Object.keys(screens).forEach(key => {
    screens[key].classList.add('hidden');
  });
  
  if (screens[screenName]) {
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('fade-in');
  }
}

/**
 * Handle restart test
 */
function handleRestartTest() {
  if (confirm('هل أنت متأكد من رغبتك في إعادة الاختبار؟ سيتم حذف النتائج الحالية.')) {
    // Reset state
    appState.currentStep = 0;
    appState.selectedInterests = [];
    appState.skillRatings = {};
    appState.results = null;
    
    // Clear form
    document.getElementById('student-form').reset();
    
    // Show start screen
    showScreen('start');
    
    // Hide progress bar
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
      progressContainer.classList.add('hidden');
    }
    
    scrollToElement('app', 0);
    showNotification('يمكنك البدء من جديد!', 'info');
  }
}

/**
 * Load and update counters
 */
function loadCounters() {
  const userCount = parseInt(localStorage.getItem('userCount') || '1247');
  const reportCount = parseInt(localStorage.getItem('reportCount') || '892');
  
  const userCountElements = document.querySelectorAll('#user-count');
  const reportCountElements = document.querySelectorAll('#report-count');
  
  userCountElements.forEach(el => {
    animateNumber(el, userCount, 1500);
  });
  
  reportCountElements.forEach(el => {
    animateNumber(el, reportCount, 1500);
  });
}

/**
 * Update counters
 */
function updateCounters() {
  const userCount = parseInt(localStorage.getItem('userCount') || '1247');
  const reportCount = parseInt(localStorage.getItem('reportCount') || '892');
  
  const userCountElements = document.querySelectorAll('#user-count');
  const reportCountElements = document.querySelectorAll('#report-count');
  
  userCountElements.forEach(el => {
    el.textContent = userCount;
  });
  
  reportCountElements.forEach(el => {
    el.textContent = reportCount;
  });
}

// Export for debugging
if (typeof window !== 'undefined') {
  window.appState = appState;
  window.debugApp = () => console.log('App State:', appState);
}
