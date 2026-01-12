import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section id="get-in-touch" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Готовы начать проект?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Давайте обсудим вашу идею. Мы поможем превратить её в успешный цифровой продукт.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="px-8 py-4 text-lg"
            onClick={() => {
              const element = document.querySelector('#project-inquiry');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Стать клиентом
          </Button>
          <Button 
            variant="secondary" 
            className="px-8 py-4 text-lg"
            onClick={() => {
              const element = document.querySelector('#project-inquiry');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Узнать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;