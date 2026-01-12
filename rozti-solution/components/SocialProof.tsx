import React from 'react';
import { TECH_STACK, TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black border-y border-white/5">
      {/* Ticker */}
      <div className="relative overflow-hidden w-full mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex space-x-12 px-6"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-white/20 uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white mb-12">
          Что говорят клиенты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: TESTIMONIALS.indexOf(t) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="absolute top-6 right-8 text-6xl text-white/10 font-serif">"</div>
              <p className="text-gray-300 mb-6 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mr-3"></div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500 uppercase">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;