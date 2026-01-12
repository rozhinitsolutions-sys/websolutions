import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#hero" className="text-2xl font-bold tracking-tighter text-white mb-4 block" aria-label="Rozti Solution - Главная">
              rozti solution<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-500 text-sm">
              Прогрессивные веб и мобильные технологии для вашего бизнеса.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#project-inquiry" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web разработка</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile приложения</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI решения</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS платформы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Соцсети</h4>
            <div className="flex space-x-4" role="list">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/rozhinitsolutions-sys" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Rozti Solution. Все права защищены.</p>
          <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Юридические ссылки">
            <a href="#privacy" className="hover:text-gray-400">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-gray-400">Условия использования</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;