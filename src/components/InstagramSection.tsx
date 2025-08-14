
import { Instagram } from 'lucide-react';

export const InstagramSection = () => {
  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/portopresentesesouvenirs?igsh=aGJpM3JpNHB5c28y";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Instagram className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Siga nosso Instagram
            </h2>
            
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium px-4">
              Venha conferir nosso Instagram! Temos novidades quentinhas esperando por vocês. 
              Dê um foco e faça com que essa seja uma sessão que chame a atenção dos clientes.
            </p>

            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100 mb-6 sm:mb-8 mx-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-8 w-8 sm:h-10 sm:w-10 text-pink-600" />
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    @portopresentesesouvenirs
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Novidades, produtos e inspirações diárias
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-12 px-2">
              <button 
                onClick={handleInstagramClick}
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg font-medium inline-flex items-center justify-center gap-3"
                aria-label="Visitar Instagram da Porto Presentes e Souvenirs"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                Seguir no Instagram
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">📸</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Produtos Novos</h4>
                <p className="text-sm sm:text-base text-gray-600">Veja em primeira mão nossos lançamentos</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">💡</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Inspirações</h4>
                <p className="text-sm sm:text-base text-gray-600">Ideias criativas para seu negócio</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🎁</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Promoções</h4>
                <p className="text-sm sm:text-base text-gray-600">Ofertas especiais exclusivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
