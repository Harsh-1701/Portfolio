export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
  status?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "AI-Based Skin Cancer Detection System",
    description:
      "AI-powered skin lesion classification using EfficientNet-B0 with Grad-CAM explainability and PDF diagnostic report generation.",
    image: "/projects/skin-cancer.png",
    github: "https://github.com/Harsh-1701/Skin-Cancer-Detection",
    featured: true,
    status: "Research Paper in Progress",
    technologies: [
      "PyTorch",
      "EfficientNet-B0",
      "Streamlit",
      "Grad-CAM",
      "OpenCV",
      "Albumentations",
      "ReportLab",
    ],
  },
  {
    title: "Immersive Pomodoro Timer",
    description:
      "Modern productivity timer with ambient themes, animated backgrounds and relaxing nature sounds.",
    image: "/projects/pomodoro.png",
    github: "https://github.com/Harsh-1701/pomodoro-timer",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "AR Educational Tool",
    description:
      "Interactive augmented reality application that helps students visualize complex concepts through 3D models.",
    image: "/projects/ar-tool.png",
    github: "",
    technologies: [
      "Unity",
      "Vuforia",
      "C#",
      "Android SDK",
    ],
  },
  {
    title: "File Integrity Monitoring System",
    description:
      "SHA-256 based file integrity monitoring with real-time directory monitoring, email alerts and tampering detection.",
    image: "/projects/fim.png",
    github: "https://github.com/Harsh-1701/File-Integrity-Checker",
    technologies: [
      "Python",
      "SHA-256",
      "Watchdog",
      "JSON",
    ],
  },
  {
    title: "Quiz App",
    description:
      "Responsive React quiz application with instant feedback, score tracking and restart functionality.",
    image: "/projects/quiz.png",
    github: "https://github.com/Harsh-1701/quiz-app",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
    ],
  },
];