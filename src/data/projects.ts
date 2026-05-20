export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "电子商务平台",
    description: "一个全栈电子商务解决方案，包含产品管理、购物车、支付集成和用户认证等功能。",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com"
  },
  {
    title: "任务管理应用",
    description: "一个用于团队协作的任务管理工具，支持实时更新、拖拽排序和进度追踪。",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://github.com"
  },
  {
    title: "天气预报仪表盘",
    description: "基于第三方 API 的实时天气预报应用，提供精美的图表展示和地理位置服务。",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    techStack: ["Vue.js", "ECharts", "Axios", "OpenWeather API"],
    link: "https://github.com"
  }
];
