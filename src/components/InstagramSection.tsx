
import { Instagram } from 'lucide-react';

export const InstagramSection = () => {
  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/porto_preseesouvenirs?igsh=MWQwN2Q4aW51eTg4NA%3D%3D&utm_source=qr";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-8 shadow-lg">
            <Instagram className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Siga nosso Instagram
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Temos novidades no nosso Instagram, clique no botão abaixo para conferir
          </p>
          
          <button 
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium"
            aria-label="Visitar Instagram da Porto Presentes e Souvenirs"
          >
            <Instagram className="w-6 h-6" />
            @porto_preseesouvenirs
          </button>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Novidades Diárias</h3>
              <p className="text-gray-600">Acompanhe nossos lançamentos e produtos exclusivos</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspirações</h3>
              <p className="text-gray-600">Veja como nossos produtos ficam nos destinos turísticos</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Promoções</h3>
              <p className="text-gray-600">Fique por dentro das ofertas especiais e descontos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
