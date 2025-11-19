// Utility Functions for Career Guide App

/**
 * Calculate match percentage between selected interests and a career path
 */
function calculateMatchPercentage(selectedInterests, careerInterests) {
  if (!careerInterests || careerInterests.length === 0) return 0;
  
  const matches = selectedInterests.filter(interest => 
    careerInterests.includes(interest)
  ).length;
  
  return Math.round((matches / careerInterests.length) * 100);
}

/**
 * Get top skills based on ratings
 */
function getTopSkills(skillRatings, count = 5) {
  const sortedSkills = Object.entries(skillRatings)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
  
  return sortedSkills;
}

/**
 * Generate career recommendations based on interests and skills
 */
function generateRecommendations(selectedInterests, skillRatings) {
  const recommendations = [];
  
  // Check for specific interest combinations
  const interestCombos = Object.keys(careersData.recommendations);
  
  interestCombos.forEach(combo => {
    const interests = combo.split('+');
    const hasAllInterests = interests.every(interest => 
      selectedInterests.includes(interest)
    );
    
    if (hasAllInterests) {
      const rec = careersData.recommendations[combo];
      recommendations.push({
        ...rec,
        type: 'combination'
      });
    }
  });
  
  // Add individual interest recommendations
  selectedInterests.forEach(interestId => {
    const interest = careersData.interests.find(i => i.id === interestId);
    if (interest) {
      // Calculate match based on skills
      const relevantSkills = Object.entries(skillsData.skillMapping)
        .filter(([_, careers]) => careers.includes(interestId))
        .map(([skillId]) => skillId);
      
      const avgSkillRating = relevantSkills.length > 0
        ? relevantSkills.reduce((sum, skillId) => sum + (skillRatings[skillId] || 0), 0) / relevantSkills.length
        : 3;
      
      const matchPercentage = Math.round(avgSkillRating * 20); // Convert 1-5 to percentage
      
      recommendations.push({
        title: interest.title,
        description: interest.description,
        majors: interest.careers,
        matchPercentage: matchPercentage,
        type: 'single'
      });
    }
  });
  
  // Sort by match percentage
  recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage);
  
  // Return top 5 recommendations
  return recommendations.slice(0, 5);
}

/**
 * Format date to Arabic
 */
function formatDateArabic(date) {
  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

/**
 * Save results to localStorage
 */
function saveResults(studentData, results) {
  const savedResults = {
    student: studentData,
    results: results,
    date: new Date().toISOString(),
    id: generateId()
  };
  
  localStorage.setItem('careerGuideResults', JSON.stringify(savedResults));
  
  // Update counters
  const reportCount = parseInt(localStorage.getItem('reportCount') || '0') + 1;
  localStorage.setItem('reportCount', reportCount.toString());
  
  return savedResults;
}

/**
 * Load results from localStorage
 */
function loadResults() {
  const saved = localStorage.getItem('careerGuideResults');
  return saved ? JSON.parse(saved) : null;
}

/**
 * Generate unique ID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Update progress bar
 */
function updateProgress(current, total) {
  const percentage = Math.round((current / total) * 100);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
  
  if (progressText) {
    progressText.textContent = `${percentage}%`;
  }
  
  return percentage;
}

/**
 * Show loading overlay
 */
function showLoading(show = true) {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.toggle('hidden', !show);
  }
}

/**
 * Animate number counting
 */
function animateNumber(element, targetNumber, duration = 1000) {
  const start = parseInt(element.textContent) || 0;
  const increment = (targetNumber - start) / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= targetNumber) || (increment < 0 && current <= targetNumber)) {
      element.textContent = Math.round(targetNumber);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, 16);
}

/**
 * Generate PDF report (simplified version)
 */
function generatePDF(studentData, results) {
  // Note: For full PDF generation, you would use a library like jsPDF
  // This is a simplified version that prepares data for printing
  
  const printContent = document.getElementById('results-content');
  const printWindow = window.open('', '_blank');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>تقرير التوجيه المهني - ${studentData.name}</title>
      <style>
        body { 
          font-family: 'Tajawal', Arial, sans-serif; 
          padding: 20px; 
          line-height: 1.6;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px; 
          border-bottom: 3px solid #9333ea;
          padding-bottom: 20px;
        }
        .section { 
          margin-bottom: 30px; 
          page-break-inside: avoid;
        }
        .recommendation { 
          border: 1px solid #ddd; 
          padding: 15px; 
          margin-bottom: 15px; 
          border-radius: 8px;
        }
        @media print {
          body { font-size: 12pt; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>تقرير التوجيه المهني</h1>
        <p><strong>الاسم:</strong> ${studentData.name}</p>
        <p><strong>المرحلة الدراسية:</strong> ${studentData.class}</p>
        <p><strong>التاريخ:</strong> ${formatDateArabic(new Date())}</p>
      </div>
      ${printContent.innerHTML}
      <div style="margin-top: 50px; text-align: center; color: #666;">
        <p>إعداد: د. عبدالغني النقيب - المرشد المهني</p>
      </div>
    </body>
    </html>
  `);
  
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
  }, 500);
}

/**
 * Validate email format
 */
function validateEmail(email) {
  if (!email) return true; // Email is optional
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    'bg-blue-500'
  } text-white font-semibold`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translate(-50%, 0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

/**
 * Scroll to element smoothly
 */
function scrollToElement(elementId, offset = 100) {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/**
 * Get random item from array
 */
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle array
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
