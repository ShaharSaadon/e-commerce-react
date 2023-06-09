const INITIAL_STATE = {
  articles: [
    {
      id: 'article1',
      image: 'bambuk',
      title: 'כמה שעות אתם ישנים בלילה ומה זה אומר עליכם?',
      content:
        'הגיע הזמן לענות על שאלת השאלות- כמה שעות צריך לישון בלילה? האם 6 שעות שינה בלילה זה מספיק? האם כל האנשים זקוקים לאותו מספר של שעות שינה? האם מבוגרים וילדים צריכים לישון אותו מספר שעות? אנחנו כבר יודעים ששנת הלילה...',
    },
    {
      id: 'article2',
      image: 'bambuk',
      title: 'איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?',
      content:
        'צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון יוקרתי. שאבנו השראה מהחג ובנינו עבורכם את המדריך המלא לעיצוב חדר השינה ברוח חג שבועות! החל מיצירת פלטת צבעים מרגיעה...',
    },
    {
      id: 'article3',
      image: 'bambuk',
      title: 'איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?',
      content:
        'צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון',
    },
    {
      id: 'article4',
      image: 'bambuk',
      title: 'איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?',
      content:
        'צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון יוקרתי. שאבנו השראה מהחג ובנינו עבורכם את המדריך המלא לעיצוב חדר השינה ברוח חג שבועות! החל מיצירת פלטת צבעים מרגיעה...',
    },
  ],
};

export function articleReducer(state = INITIAL_STATE, action) {
  // Handle actions and update the state accordingly
  return state;
}
