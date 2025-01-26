export const translations = {
  en: {
    nav: {
      practice: "Practice",
      questions: "Questions",
      progress: "Progress",
      login: "Login",
      signup: "Sign Up"
    },
    hero: {
      badge: "400+ Interview Questions",
      title: "Master Your Front-End Interview",
      description: "Practice with curated front-end interview questions, track your progress, and boost your confidence for your next interview.",
      startPractice: "Start Practice",
      browseQuestions: "Browse Questions",
      stats: {
        questions: "Questions",
        topics: "Topics",
        activeUsers: "Active Users"
      }
    }
  },
  uk: {
    nav: {
      practice: "Практика",
      questions: "Питання",
      progress: "Прогрес",
      login: "Увійти",
      signup: "Реєстрація"
    },
    hero: {
      badge: "400+ Питань для Інтерв'ю",
      title: "Опануйте Фронтенд Інтерв'ю",
      description: "Практикуйтесь із ретельно підібраними питаннями для фронтенд-інтерв'ю, відстежуйте свій прогрес та підвищуйте впевненість перед наступною співбесідою.",
      startPractice: "Почати Практику",
      browseQuestions: "Переглянути Питання",
      stats: {
        questions: "Питань",
        topics: "Тем",
        activeUsers: "Активних Користувачів"
      }
    }
  }
};

export type Language = 'en' | 'uk';
export type TranslationKey = keyof typeof translations.en;