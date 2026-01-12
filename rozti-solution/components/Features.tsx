import React from 'react';
import { FEATURES, BENEFITS } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
            Комплексная разработка
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            SaaS платформы, B2B и B2C решения, AI и Blockchain. Мы создаем продукты, которые меняют рынки.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section (Pain -> Solution) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Почему бизнес выбирает нас?
            </h3>
            <div className="space-y-8">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-400 border border-white/10">
                      <benefit.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="49.5" stroke="white"/>
                        <path d="M50 0V100" stroke="white"/>
                        <path d="M0 50H100" stroke="white"/>
                    </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Технологический стек</h4>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'Go', 'Flutter', 'Swift', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-8 p-4 bg-black/50 rounded-lg border border-white/5">
                    <code className="text-sm text-green-400">
                        &gt; git commit -m "Initial commit"<br/>
                        &gt; git push origin main<br/>
                        <span className="text-gray-500">Deployment started...</span><br/>
                        <span className="text-blue-400">Build successful in 42s</span>
                    </code>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;