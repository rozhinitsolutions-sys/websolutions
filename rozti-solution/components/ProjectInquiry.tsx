import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles, RefreshCw } from 'lucide-react';
import Button from './Button';

const QUESTIONS = [
  {
    id: 'type',
    question: "Что вы планируете создать?",
    options: ["Веб-приложение / SaaS", "Мобильное приложение", "Корпоративный портал", "AI / ML Решение", "Лендинг / Сайт"]
  },
  {
    id: 'goal',
    question: "Какова основная цель проекта?",
    options: ["Запуск стартапа (MVP)", "Автоматизация процессов", "Увеличение продаж", "Масштабирование бизнеса"]
  },
  {
    id: 'status',
    question: "Есть ли у вас уже материалы?",
    options: ["Есть ТЗ и дизайн", "Только идея", "Есть прототип", "Нужен аудит текущего"]
  },
  {
    id: 'timeline',
    question: "Какие сроки запуска?",
    options: ["Как можно скорее (< 1 мес)", "1-3 месяца", "3-6 месяцев", "Не спешу"]
  }
];

const ProjectInquiry: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionSelect = (option: string) => {
    const questionId = QUESTIONS[currentStep].id;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 250);
    } else {
      setTimeout(() => setIsCompleted(true), 250);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const handleSendEmail = () => {
    const recipient = "rozhin.it.solution@gmail.com";
    const subject = "Новая заявка с сайта (Бриф)";
    const body = `
Здравствуйте!

Я прошел быстрый бриф на сайте. Вот детали моего проекта:

1. Что планируем создать: ${answers['type'] || 'Не указано'}
2. Основная цель: ${answers['goal'] || 'Не указано'}
3. Текущий статус: ${answers['status'] || 'Не указано'}
4. Сроки запуска: ${answers['timeline'] || 'Не указано'}

Прошу связаться со мной для обсуждения деталей.
    `.trim();

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="project-inquiry" className="py-24 bg-gray-900 border-t border-white/5 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <Sparkles size={12} />
            Быстрый бриф
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Расскажите о вашей задаче
          </h2>
          <p className="text-gray-400">
            Ответьте на 4 простых вопроса, чтобы мы могли предложить лучшее решение.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl">
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm text-gray-500">Вопрос {currentStep + 1} из {QUESTIONS.length}</span>
                  <div className="flex gap-1">
                    {QUESTIONS.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-300 ${idx <= currentStep ? 'w-8 bg-blue-500' : 'w-2 bg-gray-700'}`} 
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-8">
                  {QUESTIONS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUESTIONS[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all text-left"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500">
                         <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="summary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Спасибо! Мы поняли задачу.</h3>
                
                <div className="bg-white/5 rounded-xl p-6 text-left mb-8 border border-white/10">
                  <p className="text-gray-300 mb-2">Судя по вашим ответам, вы хотите создать <span className="text-white font-semibold">{answers['type']}</span> для цели: <span className="text-white font-semibold">{answers['goal']}</span>.</p>
                  <p className="text-gray-300 mb-2">Статус проекта: <span className="text-white font-semibold">{answers['status']}</span>.</p>
                  <p className="text-gray-300">Желаемый срок: <span className="text-white font-semibold">{answers['timeline']}</span>.</p>
                </div>

                <p className="text-sm text-gray-500 mb-8">
                  Эта информация поможет нам сразу подобрать подходящий стек технологий и команду, сэкономив ваше время на первой встрече.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" showArrow onClick={handleSendEmail}>
                    Оставить заявку
                  </Button>
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <RefreshCw size={16} className="mr-2" />
                    Начать заново
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiry;