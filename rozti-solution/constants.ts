import { Monitor, Smartphone, Cpu, Rocket, BarChart, Code, ShieldCheck, Zap, LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface Benefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Главная', href: '#hero' },
  { name: 'Услуги', href: '#services' },
  { name: 'Кейсы', href: '#portfolio' },
  { name: 'Контакты', href: '#project-inquiry' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Web Разработка',
    description: 'Создаем веб-сервисы, порталы и сложные веб-системы с использованием передовых технологий.',
    icon: Monitor,
  },
  {
    title: 'Mobile Разработка',
    description: 'Нативная и кроссплатформенная разработка мобильных приложений для iOS и Android.',
    icon: Smartphone,
  },
  {
    title: 'AI Решения',
    description: 'Интеграция искусственного интеллекта и машинного обучения для автоматизации процессов.',
    icon: Cpu,
  },
  {
    title: 'Стартапы',
    description: 'От идеи до MVP и масштабируемого продукта. Полный цикл запуска технологических стартапов.',
    icon: Rocket,
  },
];

export const TECH_STACK = [
  'Mobile', 'EdTech', 'AI/ML', 'Media Tech', 'SportsTech', 'Blockchain', 'Adv Tech', 'HR Tech'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Spotbasket",
    text: "Команда Rozti Solution помогла нам создать уникальную платформу с нуля. Профессионализм на высшем уровне.",
    role: "CEO"
  },
  {
    name: "HR Blade",
    text: "Автоматизация наших HR процессов сэкономила нам сотни часов. Отличная работа с AI.",
    role: "CTO"
  },
  {
    name: "EduFind",
    text: "Сложная архитектура нашего образовательного портала работает безупречно благодаря Rozti Solution.",
    role: "Product Owner"
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Скорость",
    desc: "Быстрый запуск MVP для проверки гипотез.",
    icon: Zap
  },
  {
    title: "Качество",
    desc: "Clean code и современные архитектурные паттерны.",
    icon: Code
  },
  {
    title: "Безопасность",
    desc: "Защита данных и соответствие стандартам безопасности.",
    icon: ShieldCheck
  }
];