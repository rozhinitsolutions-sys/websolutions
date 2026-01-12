import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-blue-400 text-sm font-medium mb-6">
              Разработка и продвижение
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Инновационные <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                IT Решения
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Разрабатываем веб-сервисы, порталы, мобильные приложения и ERP системы. 
              Цифровизируем и автоматизируем бизнес-процессы, объединяя технологии и дизайн.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                showArrow
                onClick={() => {
                  const element = document.querySelector('#project-inquiry');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Сделать запрос
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Наши услуги
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Element / 3D Abstract */}
        <motion.div 
          className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative z-10 w-full h-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
               <div className="text-center p-6">
                 <div className="text-4xl font-bold text-white mb-2">100+</div>
                 <div className="text-sm text-gray-400">Успешных проектов</div>
                 <div className="mt-6 text-4xl font-bold text-white mb-2">10+</div>
                 <div className="text-sm text-gray-400">Лет опыта</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;