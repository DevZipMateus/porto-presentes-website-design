import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  const productCategories = [
    {
      title: "Souvenirs Regionais",
      description: "Produtos que representam a cultura e tradições locais",
      image: "🏛️",
      items: ["Miniaturas de monumentos", "Produtos artesanais", "Itens temáticos regionais", "Objetos decorativos"],
      gallery: [
        {
          src: "/lovable-uploads/bee31944-278f-47cf-a858-817a90fe4568.png",
          alt: "Ímã de Gramado e Canela com ilustração do famoso prédio histórico"
        },
        {
          src: "/lovable-uploads/63c63f19-bfb2-4f70-973e-d1e9e3023b48.png",
          alt: "Prato decorativo de Curitiba com pontos turísticos da cidade"
        },
        {
          src: "/lovable-uploads/3bf2ec03-0c02-4ee4-8145-1c17df2b79d7.png",
          alt: "Caneca de vidro pequena com marco histórico impresso"
        }
      ]
    },
    {
      title: "Presentes Personalizados",
      description: "Produtos customizados com a identidade do seu estabelecimento",
      image: "🎁",
      items: ["Chaveiros personalizados", "Canecas temáticas", "Camisetas exclusivas", "Ímãs de geladeira"],
      gallery: [
        {
          src: "/lovable-uploads/0deec3d1-ee84-4b05-9ef1-92db5afd235e.png",
          alt: "Canecas personalizadas e copos de vidro com temas regionais"
        },
        {
          src: "/lovable-uploads/ed884fbc-e190-4fe3-8b77-a16e00d1b6b9.png",
          alt: "Canecas coloridas do Brasil em diversas cores - azul, verde, rosa e branca"
        }
      ]
    },
    {
      title: "Lembranças Turísticas",
      description: "Itens especiais para visitantes levarem como recordação",
      image: "📷",
      items: ["Cartões postais", "Marcadores de livros", "Pins e broches", "Porta-retratos temáticos"]
    },
    {
      title: "Produtos Sazonais",
      description: "Itens especiais para datas comemorativas e eventos",
      image: "🎊",
      items: ["Produtos natalinos", "Itens de carnaval", "Souvenirs de festa junina", "Produtos de reveillon"]
    },
    {
      title: "Artigos para Parques",
      description: "Produtos específicos para parques temáticos e de diversão",
      image: "🎠",
      items: ["Brinquedos temáticos", "Produtos licenciados", "Itens colecionáveis", "Lembranças exclusivas"]
    },
    {
      title: "Corporativo",
      description: "Soluções para empresas e eventos corporativos",
      image: "🏢",
      items: ["Brindes empresariais", "Produtos para eventos", "Itens promocionais", "Presentes corporativos"]
    }
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nossos Produtos
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gray-900 mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Descubra nossa ampla variedade de souvenirs e presentes que capturam a essência do Brasil
          </p>
        </div>

        {/* Product Gallery Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Galeria de Produtos</h3>
          
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img 
                        src="/lovable-uploads/bee31944-278f-47cf-a858-817a90fe4568.png" 
                        alt="Ímã de Gramado e Canela" 
                        className="w-full h-full object-contain p-2 sm:p-3 lg:p-4" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Ímã Regional</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Gramado e Canela - Souvenir regional exclusivo</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img 
                        src="/lovable-uploads/0deec3d1-ee84-4b05-9ef1-92db5afd235e.png" 
                        alt="Canecas e copos personalizados" 
                        className="w-full h-full object-contain p-2 sm:p-3 lg:p-4" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Canecas Personalizadas</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Canecas e copos com temas regionais</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img 
                        src="/lovable-uploads/ed884fbc-e190-4fe3-8b77-a16e00d1b6b9.png" 
                        alt="Canecas coloridas do Brasil" 
                        className="w-full h-full object-contain p-2 sm:p-3 lg:p-4" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Canecas Brasil</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Coleção colorida com temas brasileiros</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img 
                        src="/lovable-uploads/63c63f19-bfb2-4f70-973e-d1e9e3023b48.png" 
                        alt="Prato decorativo de Curitiba" 
                        className="w-full h-full object-contain p-2 sm:p-3 lg:p-4" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Prato Decorativo</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Curitiba - Arte com pontos turísticos</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-square relative">
                      <img 
                        src="/lovable-uploads/3bf2ec03-0c02-4ee4-8145-1c17df2b79d7.png" 
                        alt="Caneca de vidro com marco histórico" 
                        className="w-full h-full object-contain p-2 sm:p-3 lg:p-4" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Caneca de Vidro</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Mini caneca with marco histórico</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* ... keep existing code (product category content) */}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Por que escolher nossos produtos?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">✨</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Qualidade Premium</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Materiais selecionados e acabamento impecável</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">🎨</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Design Exclusivo</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Criações únicas que destacam seu negócio</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">⚡</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Entrega Rápida</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Prazos cumpridos e logística eficiente</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">💰</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Preço Justo</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Melhor custo-benefício do mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
