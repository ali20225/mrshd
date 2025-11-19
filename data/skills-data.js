// Skills Assessment Data
const skillsData = {
  skills: [
    {
      id: 'problem-solving',
      icon: '🧩',
      name: 'حل المشكلات',
      description: 'القدرة على تحليل المشكلات وإيجاد حلول إبداعية',
      category: 'cognitive'
    },
    {
      id: 'communication',
      icon: '💬',
      name: 'التواصل',
      description: 'مهارات التحدث والكتابة والاستماع الفعّال',
      category: 'interpersonal'
    },
    {
      id: 'creativity',
      icon: '💡',
      name: 'الإبداع',
      description: 'التفكير خارج الصندوق وإنتاج أفكار جديدة',
      category: 'cognitive'
    },
    {
      id: 'leadership',
      icon: '👑',
      name: 'القيادة',
      description: 'القدرة على قيادة الفرق وإلهام الآخرين',
      category: 'interpersonal'
    },
    {
      id: 'analytical',
      icon: '📊',
      name: 'التحليل',
      description: 'تحليل البيانات واستخلاص النتائج',
      category: 'cognitive'
    },
    {
      id: 'teamwork',
      icon: '🤝',
      name: 'العمل الجماعي',
      description: 'التعاون مع الآخرين لتحقيق أهداف مشتركة',
      category: 'interpersonal'
    },
    {
      id: 'technical',
      icon: '⚙️',
      name: 'المهارات التقنية',
      description: 'استخدام التكنولوجيا والأدوات الرقمية',
      category: 'technical'
    },
    {
      id: 'organization',
      icon: '📋',
      name: 'التنظيم',
      description: 'إدارة الوقت والمهام بكفاءة',
      category: 'personal'
    },
    {
      id: 'research',
      icon: '🔍',
      name: 'البحث',
      description: 'جمع المعلومات وتحليلها بطريقة منهجية',
      category: 'cognitive'
    },
    {
      id: 'presentation',
      icon: '🎤',
      name: 'العرض والتقديم',
      description: 'عرض الأفكار والمعلومات بشكل فعال',
      category: 'interpersonal'
    },
    {
      id: 'attention-detail',
      icon: '🔬',
      name: 'الانتباه للتفاصيل',
      description: 'الدقة والحرص في العمل',
      category: 'personal'
    },
    {
      id: 'adaptability',
      icon: '🔄',
      name: 'المرونة والتكيف',
      description: 'التكيف مع التغييرات والظروف الجديدة',
      category: 'personal'
    },
    {
      id: 'writing',
      icon: '✍️',
      name: 'الكتابة',
      description: 'كتابة نصوص واضحة ومؤثرة',
      category: 'interpersonal'
    },
    {
      id: 'math',
      icon: '🔢',
      name: 'الرياضيات',
      description: 'العمليات الحسابية والتفكير المنطقي',
      category: 'cognitive'
    },
    {
      id: 'artistic',
      icon: '🎨',
      name: 'الفنون البصرية',
      description: 'الرسم والتصميم والحس الفني',
      category: 'creative'
    }
  ],

  // Skill mapping to careers
  skillMapping: {
    'problem-solving': ['tech', 'engineering', 'science', 'medicine'],
    'communication': ['business', 'education', 'media', 'psychology'],
    'creativity': ['design', 'media', 'tech', 'culinary'],
    'leadership': ['business', 'education', 'law', 'security'],
    'analytical': ['tech', 'science', 'finance', 'engineering'],
    'teamwork': ['business', 'sports', 'education', 'hospitality'],
    'technical': ['tech', 'engineering', 'aviation', 'security'],
    'organization': ['business', 'finance', 'law', 'education'],
    'research': ['science', 'medicine', 'psychology', 'agriculture'],
    'presentation': ['business', 'media', 'education', 'law'],
    'attention-detail': ['medicine', 'finance', 'law', 'engineering'],
    'adaptability': ['business', 'hospitality', 'social', 'media'],
    'writing': ['media', 'law', 'education', 'psychology'],
    'math': ['engineering', 'finance', 'tech', 'science'],
    'artistic': ['design', 'media', 'culinary', 'hospitality']
  },

  // Scoring and interpretation
  interpretation: {
    veryHigh: {
      range: [5, 5],
      label: 'ممتاز جداً',
      color: '#10b981',
      description: 'لديك موهبة استثنائية في هذا المجال'
    },
    high: {
      range: [4, 4.9],
      label: 'جيد جداً',
      color: '#3b82f6',
      description: 'لديك قدرات قوية يمكن تطويرها'
    },
    medium: {
      range: [3, 3.9],
      label: 'جيد',
      color: '#f59e0b',
      description: 'لديك أساس جيد قابل للتحسين'
    },
    low: {
      range: [2, 2.9],
      label: 'متوسط',
      color: '#ef4444',
      description: 'يحتاج إلى تطوير وممارسة'
    },
    veryLow: {
      range: [1, 1.9],
      label: 'ضعيف',
      color: '#dc2626',
      description: 'يحتاج إلى عمل كبير لتطويره'
    }
  }
};

// Helper function to get skill interpretation
function getSkillInterpretation(rating) {
  const interpretations = skillsData.interpretation;
  
  if (rating >= 5) return interpretations.veryHigh;
  if (rating >= 4) return interpretations.high;
  if (rating >= 3) return interpretations.medium;
  if (rating >= 2) return interpretations.low;
  return interpretations.veryLow;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { skillsData, getSkillInterpretation };
}
