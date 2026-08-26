import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Work() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'UI Design', 'Webflow Design', 'Figma Design'];

  const templates = [
    {
      id: 1,
      category: 'UI Design',
      title: 'Template 1',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      action: 'View Portfolio',
    },
    {
      id: 2,
      category: 'Webflow Design',
      title: 'Template 2',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      action: 'View Portfolio',
    },
    {
      id: 3,
      category: 'Figma Design',
      title: 'Template 3',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      action: 'Read case study',
    },
    {
      id: 4,
      category: 'UI Design',
      title: 'Template 4',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      action: 'Read case study',
    },
    {
      id: 5,
      category: 'Webflow Design',
      title: 'Template 5',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      action: 'Read case study',
    },
    {
      id: 6,
      category: 'Figma Design',
      title: 'Template 6',
      description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      action: 'Read case study',
    },
  ];

  const filteredTemplates = activeTab === 'All' 
    ? templates 
    : templates.filter(t => t.category === activeTab);

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. ШАПКА: Заголовок, описание и социальные иконки */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-2">
            What we created
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
          </p>

          {/* Социальные иконки */}
          <div className="flex justify-center items-center space-x-6">
            {/* Facebook */}
            <a href="#facebook" className="text-slate-700 hover:text-slate-900 transition-colors p-2" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#twitter" className="text-slate-700 hover:text-slate-900 transition-colors p-2" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#instagram" className="text-slate-700 hover:text-slate-900 transition-colors p-2" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#linkedin" className="text-slate-700 hover:text-slate-900 transition-colors p-2" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. ТЕЛО: Фильтры категорий */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm sm:text-base font-medium transition-colors pb-1 ${
                activeTab === cat
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка шаблонов (2 колонки) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="flex flex-col group bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              {/* Контейнер картинки */}
              <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-amber-50/60 via-purple-50/40 to-blue-50/60 border border-slate-100 mb-6 overflow-hidden">
                <div className="rounded-xl overflow-hidden shadow-md bg-white aspect-video relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Название */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {template.title}
              </h3>

              {/* Описание */}
              <p className="text-slate-500 text-sm sm:text-base mb-4 leading-relaxed max-w-xl">
                {template.description}
              </p>

              {/* Ссылка / Действие */}
              <a
                href="#details"
                className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors mt-auto w-fit group/link"
              >
                <span>{template.action}</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* 3. НИЗ: Блок "Let's build something great together" */}
        <div className="text-center max-w-2xl mx-auto pt-10 border-t border-slate-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's build something great together
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-200 hover:bg-amber-300 text-slate-900 font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}

export default Work;