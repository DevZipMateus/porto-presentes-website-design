
import { Instagram } from 'lucide-react';

export const InstagramSection = () => {
  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/porto_preseesouvenirs?igsh=MWQwN2Q4aW51eTg4NA%3D%3D&utm_source=qr";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="instagram" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Instagram className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Siga nosso Instagram
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
              Venha conferir nosso Instagram! Temos novidades quentinhas esperando por vocês. 
              Dê um foco e faça com que essa seja uma sessão que chame a atenção dos clientes.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Instagram className="h-10 w-10 text-pink-600" />
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    @porto_preseesouvenirs
                  </h3>
                  <p className="text-gray-600">
                    Novidades, produtos e inspirações diárias
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium inline-flex items-center gap-3"
              aria-label="Visitar Instagram da Porto Presentes e Souvenirs"
            >
              <Instagram className="h-6 w-6" />
              Seguir no Instagram
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Produtos Novos</h4>
                <p className="text-gray-600">Veja em primeira mão nossos lançamentos</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Inspirações</h4>
                <p className="text-gray-600">Ideias criativas para seu negócio</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Promoções</h4>
                <p className="text-gray-600">Ofertas especiais exclusivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
