
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Porto Presentes e{' '}
            <span className="text-gray-700">Souvenirs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Souvenirs temáticos e presentes personalizados para lojistas, parques temáticos e pontos turísticos em todo o Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
              aria-label="Entrar em contato"
            >
              Entre em Contato
            </button>
            
            <button 
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              aria-label="Ver nossos produtos"
            >
              Ver Produtos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Produtos Únicos</h3>
              <p className="text-gray-600">Souvenirs temáticos que capturam a essência das cidades turísticas brasileiras</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalização</h3>
              <p className="text-gray-600">Desenvolvimento de artes personalizadas com o tema desejado pelo cliente</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇧🇷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Todo o Brasil</h3>
              <p className="text-gray-600">Atendemos lojistas, parques temáticos e pontos turísticos em todo território nacional</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-gray-900 transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};
