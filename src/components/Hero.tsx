
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleContactClick = () => {
    const message = "Olá! Vim através do site e gostaria de saber mais sobre os produtos da Porto Presentes e Souvenirs.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Porto Presentes e{' '}
            <span className="text-gray-700">Souvenirs</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Souvenirs temáticos e presentes personalizados para lojistas, parques temáticos e pontos turísticos em todo o Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={handleContactClick}
              className="w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg font-medium"
              aria-label="Entrar em contato"
            >
              Entre em Contato
            </button>
            
            <button 
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 text-base sm:text-lg font-medium"
              aria-label="Ver nossos produtos"
            >
              Ver Produtos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 px-2">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎁</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Produtos Únicos</h3>
              <p className="text-sm sm:text-base text-gray-600">Souvenirs temáticos que capturam a essência das cidades turísticas brasileiras</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎨</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Personalização</h3>
              <p className="text-sm sm:text-base text-gray-600">Desenvolvimento de artes personalizadas com o tema desejado pelo cliente</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🇧🇷</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Todo o Brasil</h3>
              <p className="text-sm sm:text-base text-gray-600">Atendemos lojistas, parques temáticos e pontos turísticos em todo território nacional</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-gray-900 transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
    </section>
  );
};
