const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      talk: "Let's Talk",
    },

    hero: {
      available: "Available for freelance",
      hello: "Hi, I'm",
      name: "Mohamed Ahmed",
      role: "Flutter & Frontend Developer",

      description:
        "I build modern, responsive, and user-friendly web applications with React and JavaScript, as well as mobile applications with Flutter and Dart. I focus on clean design, performance, and great user experiences.",

      projects: "View Projects",
      cv: "Download CV",
    },

    stats: {
      projects: "Projects",
      technologies: "Technologies",
      areas: "Tech Areas",
    },

    // =========================
    // ABOUT
    // =========================

    about: {
      label: "ABOUT ME",

      title: "Flutter & Frontend Developer",

      subtitle:
        "Building modern digital experiences with clean code, thoughtful design, and a focus on user experience.",

      text1:
        "I'm a Computer Science student and Flutter & Frontend Developer focused on building modern, responsive, and high-performance web and mobile applications.",

      text2:
        "I work with React, JavaScript, HTML, CSS, Tailwind CSS, Flutter, and Dart. I enjoy turning ideas into clean, functional, and engaging digital experiences.",

      locationLabel: "Location",
      location: "Egypt",

      focusLabel: "My Focus",

      focus: {
        frontend: "Frontend Development",
        mobile: "Flutter Development",
      },
    },

    // =========================
    // SKILLS
    // =========================

    skills: {
      label: "MY SKILLS",

      title: "Technologies I Work With",

      subtitle:
        "Technologies and tools I use to build modern web and mobile applications.",

      frontend: {
        title: "Frontend Development",
        description:
          "Building responsive and interactive web interfaces using modern frontend technologies.",
      },

      mobile: {
        title: "Mobile Development",
        description:
          "Creating modern cross-platform mobile applications using Flutter and Dart.",
      },

      firebase: {
        title: "Firebase",
        description:
          "Integrating authentication, databases, storage, and other Firebase services.",
      },

      architecture: {
        title: "Architecture & Patterns",
        description:
          "Building organized and maintainable applications using clean architecture and design patterns.",
      },

      tools: {
        title: "Tools & Workflow",
        description:
          "Using modern development tools and workflows to build and manage projects.",
      },
    },

    mySkills: [
      {
        key: "frontend",
        icon: "💻",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },

      {
        key: "mobile",
        icon: "📱",
        technologies: ["Flutter", "Dart", "BLoC", "Cubit"],
      },

      {
        key: "firebase",
        icon: "🔥",
        technologies: ["Firebase Auth", "Firestore", "Firebase Storage"],
      },

      {
        key: "architecture",
        icon: "🏗️",
        technologies: ["Clean Architecture", "Repository Pattern", "GetIt"],
      },

      {
        key: "tools",
        icon: "🛠️",
        technologies: ["Git", "GitHub", "VS Code", "Postman"],
      },
    ],

    // =========================
    // PROJECTS
    // =========================

    projects: {
      label: "MY WORK",

      title: "Featured Projects",

      subtitle: "Some of the projects I've worked on.",

      view: "View Project",

      items: [
        {
          key: "docdoc",
          icon: "🩺",
          tech: ["Flutter", "BLoC", "Dio", "REST API"],
          github: "https://github.com/1-mohamed-ahmed/doc_doc",
          live: "#",
        },

        {
          key: "chatApp",
          icon: "💬",
          tech: ["Flutter", "Dart", "Firebase", "BLoC"],
          github: "https://github.com/1-mohamed-ahmed/chat_app",
          live: "#",
        },
      ],

      docdoc: {
        title: "DocDoc",

        description:
          "A medical appointment application built with Flutter using Clean Architecture, BLoC, and REST APIs.",
      },

      chatApp: {
        title: "Chat App",

        description:
          "A real-time chat application built with Flutter and Firebase, featuring authentication and messaging.",
      },
    },

    // =========================
    // EXPERIENCE
    // =========================

    experience: {
      label: "MY JOURNEY",

      title: "Experience & Learning",

      subtitle: "My journey as a Flutter & Frontend Developer.",

      items: [
        {
          key: "frontend",
          icon: "💻",

          title: "Frontend Development",

          date: "2026 — Present",

          description:
            "Building modern and responsive web interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
        },

        {
          key: "flutter",
          icon: "📱",

          title: "Flutter Development",

          date: "2025 — Present",

          description:
            "Building cross-platform mobile applications using Flutter and Dart with BLoC, Clean Architecture, APIs, and Firebase.",
        },

        {
          key: "projects",
          icon: "🚀",

          title: "Personal Projects",

          date: "2025 — Present",

          description:
            "Building practical web and mobile projects to improve my development skills and create real-world applications.",
        },
      ],
    },

    // =========================
    // SERVICES
    // =========================

    services: {
      label: "SERVICES",

      title: "What I Can Do",

      subtitle: "Services I can provide.",

      mobile: {
        title: "Mobile Applications",

        description:
          "Building modern, responsive, and cross-platform mobile applications using Flutter and Dart.",
      },

      api: {
        title: "Frontend Development",

        description:
          "Building modern, responsive, and interactive websites using React, JavaScript, HTML, CSS, and Tailwind CSS.",
      },

      firebase: {
        title: "Firebase Integration",

        description:
          "Integrating Firebase Authentication, Firestore, and other Firebase services into applications.",
      },
    },

    // =========================
    // CONTACT
    // =========================

    contact: {
      title: "Let's Work Together",

      subtitle: "Have a project in mind? Let's build something great together.",

      name: "Your Name",

      email: "Your Email",

      message: "Your Message",

      send: "Send Message",

      success: "Message sent successfully!",
    },

    footer: "Built with React & Tailwind CSS.",
  },

  // =========================================================
  // ARABIC
  // =========================================================

  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      contact: "تواصل معي",
      talk: "تحدث معي",
    },

    hero: {
      available: "متاح للعمل الحر",

      hello: "أهلاً، أنا",

      name: "محمد أحمد",

      role: "مطور Flutter و Frontend",

      description:
        "أقوم بتطوير تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام باستخدام React وJavaScript، بالإضافة إلى تطبيقات موبايل باستخدام Flutter وDart. أركز على التصميم النظيف والأداء وتجربة المستخدم.",

      projects: "مشاريعي",

      cv: "تحميل السيرة الذاتية",
    },

    stats: {
      projects: "مشاريع",
      technologies: "تقنيات",
      areas: "مجالات تقنية",
    },

    // =========================
    // ABOUT
    // =========================

    about: {
      label: "عني",

      title: "مطور Flutter و Frontend",

      subtitle:
        "أبني تجارب رقمية حديثة باستخدام كود نظيف وتصميم مدروس مع التركيز على تجربة المستخدم.",

      text1:
        "أنا طالب Computer Science ومطور Flutter وFrontend، أركز على بناء تطبيقات ويب وموبايل حديثة ومتجاوبة وعالية الأداء.",

      text2:
        "أعمل باستخدام React وJavaScript وHTML وCSS وTailwind CSS وFlutter وDart، وأستمتع بتحويل الأفكار إلى تجارب رقمية نظيفة وعملية وجذابة.",

      locationLabel: "الموقع",

      location: "مصر",

      focusLabel: "مجالات التركيز",

      focus: {
        frontend: "تطوير واجهات الويب",
        mobile: "تطوير تطبيقات Flutter",
      },
    },

    // =========================
    // SKILLS
    // =========================

    skills: {
      label: "مهاراتي",

      title: "التقنيات التي أعمل بها",

      subtitle:
        "مجموعة من التقنيات والأدوات التي أستخدمها لبناء تطبيقات ويب وموبايل حديثة.",

      frontend: {
        title: "تطوير واجهات الويب",

        description:
          "بناء واجهات ويب متجاوبة وتفاعلية باستخدام تقنيات Frontend الحديثة.",
      },

      mobile: {
        title: "تطوير تطبيقات الموبايل",

        description:
          "إنشاء تطبيقات موبايل حديثة ومتعددة المنصات باستخدام Flutter وDart.",
      },

      firebase: {
        title: "Firebase",

        description:
          "دمج Authentication وقواعد البيانات وStorage وخدمات Firebase المختلفة.",
      },

      architecture: {
        title: "Architecture & Patterns",

        description:
          "بناء تطبيقات منظمة وقابلة للصيانة باستخدام Clean Architecture وDesign Patterns.",
      },

      tools: {
        title: "الأدوات وبيئة العمل",

        description: "استخدام أدوات وبيئة تطوير حديثة لبناء المشاريع وإدارتها.",
      },
    },

    mySkills: [
      {
        key: "frontend",
        icon: "💻",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      },

      {
        key: "mobile",
        icon: "📱",
        technologies: ["Flutter", "Dart", "BLoC", "Cubit"],
      },

      {
        key: "firebase",
        icon: "🔥",
        technologies: ["Firebase Auth", "Firestore", "Firebase Storage"],
      },

      {
        key: "architecture",
        icon: "🏗️",
        technologies: ["Clean Architecture", "Repository Pattern", "GetIt"],
      },

      {
        key: "tools",
        icon: "🛠️",
        technologies: ["Git", "GitHub", "VS Code", "Postman"],
      },
    ],

    // =========================
    // PROJECTS
    // =========================

    projects: {
      label: "أعمالي",

      title: "أهم مشاريعي",

      subtitle: "بعض المشاريع التي عملت عليها.",

      view: "عرض المشروع",

      items: [
        {
          key: "docdoc",
          icon: "🩺",
          tech: ["Flutter", "BLoC", "Dio", "REST API"],
          github: "https://github.com/1-mohamed-ahmed/doc_doc",
          live: "#",
        },

        {
          key: "chatApp",
          icon: "💬",
          tech: ["Flutter", "Dart", "Firebase", "BLoC"],
          github: "https://github.com/1-mohamed-ahmed/chat_app",
          live: "#",
        },
      ],

      docdoc: {
        title: "DocDoc",

        description:
          "تطبيق لحجز المواعيد الطبية باستخدام Flutter وClean Architecture وBLoC وREST APIs.",
      },

      chatApp: {
        title: "تطبيق المحادثة",

        description:
          "تطبيق محادثة فوري باستخدام Flutter وFirebase، مع نظام تسجيل دخول وإرسال واستقبال الرسائل.",
      },
    },

    // =========================
    // EXPERIENCE
    // =========================

    experience: {
      label: "رحلتي",

      title: "الخبرات والتعلم",

      subtitle: "رحلتي كمطور Flutter وFrontend.",

      items: [
        {
          key: "frontend",
          icon: "💻",

          title: "تطوير واجهات الويب",

          date: "2026 — حتى الآن",

          description:
            "بناء واجهات ويب حديثة ومتجاوبة باستخدام React وJavaScript وHTML وCSS وTailwind CSS.",
        },

        {
          key: "flutter",
          icon: "📱",

          title: "تطوير تطبيقات Flutter",

          date: "2025 — حتى الآن",

          description:
            "بناء تطبيقات موبايل متعددة المنصات باستخدام Flutter وDart مع BLoC وClean Architecture وAPIs وFirebase.",
        },

        {
          key: "projects",
          icon: "🚀",

          title: "المشاريع الشخصية",

          date: "2025 — حتى الآن",

          description:
            "بناء مشاريع عملية للويب والموبايل لتطوير مهاراتي وإنشاء تطبيقات حقيقية قابلة للاستخدام.",
        },
      ],
    },

    // =========================
    // SERVICES
    // =========================

    services: {
      label: "خدماتي",

      title: "ماذا أستطيع أن أقدم؟",

      subtitle: "الخدمات التي يمكنني تقديمها.",

      mobile: {
        title: "تطبيقات الموبايل",

        description:
          "بناء تطبيقات موبايل حديثة ومتجاوبة ومتعددة المنصات باستخدام Flutter وDart.",
      },

      api: {
        title: "تطوير واجهات الويب",

        description:
          "بناء مواقع ويب حديثة ومتجاوبة وتفاعلية باستخدام React وJavaScript وHTML وCSS وTailwind CSS.",
      },

      firebase: {
        title: "دمج Firebase",

        description:
          "دمج Firebase Authentication وFirestore وخدمات Firebase المختلفة داخل التطبيقات.",
      },
    },

    // =========================
    // CONTACT
    // =========================

    contact: {
      title: "لنعمل معًا",

      subtitle: "عندك مشروع في دماغك؟ خلينا نبني حاجة قوية مع بعض.",

      name: "اسمك",

      email: "البريد الإلكتروني",

      message: "رسالتك",

      send: "إرسال الرسالة",

      success: "تم إرسال الرسالة بنجاح!",
    },

    footer: "تم بناء الموقع باستخدام React و Tailwind CSS.",
  },
};

export default translations;
