import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All products from catalog page
  const products = [{
    id: 1,
    image: "/lovable-uploads/f906c12c-51ae-4f47-b01c-794ab0aafacb.png",
    title: "Canecas Temáticas - Linha Preta"
  }, {
    id: 2,
    image: "/lovable-uploads/4f87b2d9-17b0-4945-b7bc-d4eb3765e624.png",
    title: "Canecas Temáticas - Linha Amarela"
  }, {
    id: 3,
    image: "/lovable-uploads/ea13aaee-2b8d-4afa-a93a-c04148b14593.png",
    title: "Canecas Temáticas - Linha Azul/Rosa"
  }, {
    id: 4,
    image: "/lovable-uploads/9448d98f-d3df-4354-bcac-8fbdc32059d1.png",
    title: "Canecas Regionais - Linha Marrom"
  }, {
    id: 5,
    image: "/lovable-uploads/da596c2c-aff5-4ccf-8450-d9120c93c304.png",
    title: "Canecas Regionais - Linha Preta"
  }, {
    id: 6,
    image: "/lovable-uploads/9c4e46e8-e1ff-47bb-9331-db6f2b82682d.png",
    title: "Canecas Regionais - Linha Branca"
  }, {
    id: 7,
    image: "/lovable-uploads/92de80f1-e30b-47c5-9c4e-4e3e88df5258.png",
    title: "Canecas Regionais - Linha Amarela"
  }, {
    id: 8,
    image: "/lovable-uploads/4d0e73a8-45a4-4964-b484-0e88d471ef59.png",
    title: "Canecas Regionais - Linha Azul"
  }, {
    id: 9,
    image: "/lovable-uploads/49c7ffd2-e24c-4011-a20b-45ef712bc3fe.png",
    title: "Canecas Regionais - Linha Rosa"
  }, {
    id: 10,
    image: "/lovable-uploads/b0c7d8c2-0d96-490c-a637-4a4f249fa5da.png",
    title: "Canecas Regionais - Linha Verde"
  }, {
    id: 11,
    image: "/lovable-uploads/af2c9f18-6627-4e02-aa0b-02ae8a7d07f0.png",
    title: "Canecas Temáticas Rosa - Cristo Redentor, Bondinho e Praia"
  }, {
    id: 12,
    image: "/lovable-uploads/af874fcf-1d94-434c-b9f0-a1093824eb74.png",
    title: "Canecas Regionais Transparentes - Diferentes Cores"
  }, {
    id: 13,
    image: "/lovable-uploads/cf5c586a-141b-4fd2-9233-59c0a7aa916b.png",
    title: "Canecas Azuis e Amarelas - Linha Regional"
  }, {
    id: 14,
    image: "/lovable-uploads/2be2ec80-7d40-4363-9fd1-8661752b2034.png",
    title: "Canecas Azuis e Roxas - Linha Regional"
  }, {
    id: 15,
    image: "/lovable-uploads/aed827c9-398f-4986-8d20-c9e9072edc41.png",
    title: "Canecas Pretas Temáticas - Linha Premium"
  }, {
    id: 16,
    image: "/lovable-uploads/6239ecfd-2724-4ddb-8521-ca8280263273.png",
    title: "Canecas Brancas Temáticas - Linha Clássica"
  }, {
    id: 17,
    image: "/lovable-uploads/be4bd2f8-2128-4cbe-8257-36d30d5ede96.png",
    title: "Canecas Pretas - Linha Temática Especial"
  }, {
    id: 18,
    image: "/lovable-uploads/6f8c1404-6dd3-41d7-a1a5-b16338be6828.png",
    title: "Canecas Azuis - Linha Regional Especial"
  }, {
    id: 19,
    image: "/lovable-uploads/d9dbb97c-7d73-41a9-a8ea-783372009ada.png",
    title: "Canecas Azuis e Amarelas - Mix Regional"
  }, {
    id: 20,
    image: "/lovable-uploads/eecd52fe-d390-40b8-8e6a-adce7a817831.png",
    title: "Canecas Amarelas - Linha Regional Completa"
  }, {
    id: 21,
    image: "/lovable-uploads/7ee5a9af-30b3-4b2c-88bc-4626ff46a2a6.png",
    title: "Canecas Temáticas Azul Claro - Linha Regional"
  }, {
    id: 22,
    image: "/lovable-uploads/063b7016-1f88-407c-98fa-775ed5fa5589.png",
    title: "Canecas Temáticas Roxas - Linha Regional"
  }, {
    id: 23,
    image: "/lovable-uploads/98e63421-80f7-4e13-a6ea-9e5e6c8122c1.png",
    title: "Canecas Temáticas Rosa - Linha Regional"
  }, {
    id: 24,
    image: "/lovable-uploads/ad7b8098-f7d0-47e4-b469-5664f1fa0435.png",
    title: "Copos Transparentes - Linha Temática Regional"
  }, {
    id: 25,
    image: "/lovable-uploads/8d46226a-4d6c-4211-9fd1-037f5f0b572a.png",
    title: "Copos Shot - Linha Temática Regional"
  }, {
    id: 26,
    image: "/lovable-uploads/80f8e31b-0d2e-4bff-9df7-b4929943d016.png",
    title: "Copos Baixos Transparentes - Linha Temática"
  }, {
    id: 27,
    image: "/lovable-uploads/f3a021e7-4f2e-4b7d-b106-94edcc9c208c.png",
    title: "Copos Altos Transparentes - Linha Regional"
  }, {
    id: 28,
    image: "/lovable-uploads/80376178-f983-4b52-9224-a1307cbeff7c.png",
    title: "Copos Shot Transparentes - Mix Regional"
  }, {
    id: 29,
    image: "/lovable-uploads/7ee5a883-4364-4e72-89f0-71d9f95d80a3.png",
    title: "Copos Baixos - Linha Temática Completa"
  }, {
    id: 30,
    image: "/lovable-uploads/bbbfe442-5abc-4b0c-98d7-5e5b4ef5db47.png",
    title: "Copos Baixos Transparentes - Linha Premium"
  }, {
    id: 31,
    image: "/lovable-uploads/0adfd06f-adfa-4b9c-a914-d885d51054a1.png",
    title: "Copos Altos Transparentes - Linha Temática Regional"
  }, {
    id: 32,
    image: "/lovable-uploads/6651d732-abe3-40b1-ac82-e439a57f904b.png",
    title: "Copos Shot Transparentes - Temas do Rio de Janeiro"
  }, {
    id: 33,
    image: "/lovable-uploads/b3580274-2db9-4ff3-991d-d186cd829f28.png",
    title: "Canecas de Chopp Transparentes - Linha Regional"
  }, {
    id: 34,
    image: "/lovable-uploads/f9a019ec-6800-4afa-a507-12131bda2118.png",
    title: "Copos Arte em Faixa - Linha Temática Especial"
  }, {
    id: 35,
    image: "/lovable-uploads/8d601e3c-6489-4341-af28-c9aff19c4f82.png",
    title: "Caipirinhas Transparentes - Linha Regional Rio"
  }, {
    id: 36,
    image: "/lovable-uploads/81bd13da-3106-47eb-ac47-b08ac5b9df90.png",
    title: "Caipirinhas - Linha Aventura e Regional"
  }, {
    id: 37,
    image: "/lovable-uploads/5ce576f4-4214-42b5-9c68-f136dffc387c.png",
    title: "Canecas de Chopp - Linha Arte Regional"
  }, {
    id: 38,
    image: "/lovable-uploads/e821e883-ebeb-441c-8d69-5a4c8c91a107.png",
    title: "Canecas de Chopp - Linha Aventura Tropical"
  }, {
    id: 39,
    image: "/lovable-uploads/5d181641-fac0-4c72-98af-66389f41baf9.png",
    title: "Canecas de Chopp com Alça - Arte Regional"
  }, {
    id: 40,
    image: "/lovable-uploads/84fd23a5-a6ac-4091-9411-b9c153cc8e0b.png",
    title: "Canecas de Chopp Cristal - Linha Arte Clássica"
  }, {
    id: 41,
    image: "/lovable-uploads/0e944865-5d40-4f90-9b17-3918a7b3b985.png",
    title: "Canecas Grandes Transparentes - Temas Regionais Especiais"
  }, {
    id: 42,
    image: "/lovable-uploads/4a5626c6-019b-4438-a7a1-7eb437d63a88.png",
    title: "Copos Cerveja Pequenos - Eu Amo Balneário Camboriú"
  }, {
    id: 43,
    image: "/lovable-uploads/c1e1032d-bdf1-4006-83c2-42f700d776fc.png",
    title: "Copos Cerveja Altos - Linha Temática Premium"
  }, {
    id: 44,
    image: "/lovable-uploads/455e0ae8-d678-4cf1-9df5-84b0c93e7b0b.png",
    title: "Copos Cerveja - Cristo Redentor, Bondinho e Big Wheel"
  }, {
    id: 45,
    image: "/lovable-uploads/ad105558-2036-4900-9995-3db0153c6a0e.png",
    title: "Taças - Eu Amo Balneário Camboriú e Cristo Redentor"
  }, {
    id: 46,
    image: "/lovable-uploads/e86a9329-f8c9-44a8-b8ef-68ee0135f267.png",
    title: "Taças - Bondinho, Big Wheel e Temas Regionais"
  }, {
    id: 47,
    image: "/lovable-uploads/90d7f849-7b3a-4901-8896-0d6a9b664e73.png",
    title: "Copos Cerveja Pilsen - Linha Arte Regional Completa"
  }, {
    id: 48,
    image: "/lovable-uploads/6acdd777-65c5-4495-a60d-67fa7eabc8ed.png",
    title: "Copos Cerveja - Temas Regionais e Aventura"
  }, {
    id: 49,
    image: "/lovable-uploads/9cdf41ff-6b0b-4812-9cc4-6950cee5b9b3.png",
    title: "Taças Cristal - Eu Amo Balneário Camboriú e Cristo"
  }, {
    id: 50,
    image: "/lovable-uploads/eca2f232-736a-4722-8153-beabca94f3e3.png",
    title: "Taças Elegantes - Temas Regionais Premium"
  }, {
    id: 51,
    image: "/lovable-uploads/5c541bd7-ac87-4720-acfe-6c153a22b8f8.png",
    title: "Copos Cerveja Premium - Temas Urbanos e Regionais"
  }, {
    id: 52,
    image: "/lovable-uploads/3d3543b5-d0f6-43e1-998b-46c2798e2592.png",
    title: "Copos Cerveja - Aventura, Urban Art e Balneário Camboriú"
  }, {
    id: 53,
    image: "/lovable-uploads/1a566ecc-61a7-4fcd-8096-81e361f77cc3.png",
    title: "Taças Premium - Urban Art e Eu Amo Balneário Camboriú"
  }, {
    id: 54,
    image: "/lovable-uploads/1faa01e0-3114-4bae-b3ea-f3b23e99eaea.png",
    title: "Taças Elegantes - Aventura Tropical e Oceânica"
  }, {
    id: 55,
    image: "/lovable-uploads/14005bf4-7a6f-4c09-bc7d-f713f74c8f29.png",
    title: "Canecas de Vidro com Alça - Temas Urbanos e Regionais"
  }, {
    id: 56,
    image: "/lovable-uploads/e1c987d1-2bd3-4557-8c96-7d06f82157dd.png",
    title: "Canecas de Vidro - Eu Amo Balneário Camboriú e Cristo Luz"
  }, {
    id: 57,
    image: "/lovable-uploads/3787fe94-b7f5-40e4-915d-57b630c44d56.png",
    title: "Canecas de Vidro - Aventura Marítima e Oceânica"
  }, {
    id: 58,
    image: "/lovable-uploads/6a7c01a3-5611-40c4-bb7b-d98af184ac4c.png",
    title: "Canecas Esmaltadas - Urban Art, Eu Amo BC e Cristo Luz"
  }, {
    id: 59,
    image: "/lovable-uploads/7022817a-858a-423d-9232-38739a8033bf.png",
    title: "Canecas Esmaltadas Mix - Temas Urbanos e Aventura"
  }, {
    id: 60,
    image: "/lovable-uploads/be489c7f-f0df-4aa3-b982-69e2a07afada.png",
    title: "Canecas Brancas Clássicas - Coleção Completa Regional"
  }, {
    id: 61,
    image: "/lovable-uploads/304017e1-5a3a-4705-85ad-d2ba6aa64b16.png",
    title: "Canecas Brancas - Cristo Luz, Bondinho e Big Wheel"
  }, {
    id: 62,
    image: "/lovable-uploads/7017e857-eedb-4f79-a3a8-69b7117282b4.png",
    title: "Pratos Decorativos - Bondinho, Big Wheel, Aventura e Space"
  }, {
    id: 63,
    image: "/lovable-uploads/e322afa8-b341-459d-b991-9e844b2676f4.png",
    title: "Pratos Decorativos - Balneário Camboriú Premium"
  }, {
    id: 64,
    image: "/lovable-uploads/b2285d5f-fa9d-4432-ba03-6a4d7e9bfc19.png",
    title: "Pratos Decorativos - Balneário Camboriú Coloridos"
  }, {
    id: 65,
    image: "/lovable-uploads/2f49f41e-4661-4035-8c4b-df191e8f0564.png",
    title: "Pratos Decorativos - Eu Amo B. Camboriú e Cristo Luz"
  }, {
    id: 66,
    image: "/lovable-uploads/7903bd41-e2e0-4394-9fd3-e4d9e2ade738.png",
    title: "Pratos Decorativos - Bondinho e Big Wheel Elegantes"
  }, {
    id: 67,
    image: "/lovable-uploads/f1918f1a-4ba9-4e3f-be58-9621bc8499a8.png",
    title: "Pratos Decorativos - Aventura Jurássica e Space Adventure"
  }, {
    id: 68,
    image: "/lovable-uploads/fb3da711-167c-409d-99dd-e6a93801f72c.png",
    title: "Canecas Coloridas Balneário Camboriú - Primeira Linha"
  }, {
    id: 69,
    image: "/lovable-uploads/173b1728-bb9f-47e3-b6e0-cfc012cd56d6.png",
    title: "Canecas Coloridas Balneário Camboriú - Segunda Linha"
  }, {
    id: 70,
    image: "/lovable-uploads/60c32748-6151-44f9-a536-469d244fa2d5.png",
    title: "Canecas Pretas Especiais - Mix Temático Regional"
  }, {
    id: 71,
    image: "/lovable-uploads/fdbadd90-8ea3-4054-b888-8751722362fe.png",
    title: "Pratos Decorativos - Cristo Redentor, Bondinho e Eu Amo B. Camboriú"
  }, {
    id: 72,
    image: "/lovable-uploads/eb18370f-c3ba-4910-a643-9fa1549d17e4.png",
    title: "Canecas Azuis - Cristo Redentor, Bondinho e Eu Amo B. Camboriú"
  }, {
    id: 73,
    image: "/lovable-uploads/e39b2ba0-0d21-45e8-b5b8-fedf22302fb3.png",
    title: "Canecas Azul Claro - Temas Regionais Premium"
  }, {
    id: 74,
    image: "/lovable-uploads/6f92c87e-e8ae-4b34-a9a4-d6dd438dd575.png",
    title: "Canecas Rosa - Aventura, Cristo Luz e Oceanic Aquarium"
  }, {
    id: 75,
    image: "/lovable-uploads/1bf94b0d-6f6b-4831-a1f2-2db382b94416.png",
    title: "Canecas Ultra Deck - Linha Premium Especial"
  }, {
    id: 76,
    image: "/lovable-uploads/c1fc8751-43f6-411c-8886-56a9f9a4e9f7.png",
    title: "Canecas Coloridas Ultra Deck - Mix Completo"
  }, {
    id: 77,
    image: "/lovable-uploads/dccd33ab-dbff-463b-ac50-7467caeb9402.png",
    title: "Canecas Pretas Premium - Temas Regionais Clássicos"
  }, {
    id: 78,
    image: "/lovable-uploads/8ff925e9-3a7c-481c-a597-e6db8284373c.png",
    title: "Canecas Pretas Mix - Oceanic, Adventure e Space"
  }, {
    id: 79,
    image: "/lovable-uploads/b845313e-a052-420f-8ccb-da0b226a6c75.png",
    title: "Canecas Coloridas Premium - Adventure e Regional Mix"
  }, {
    id: 80,
    image: "/lovable-uploads/87500dfb-6a04-4fc0-a9dc-75d04bc6e336.png",
    title: "Canecas Azul Claro Mix - Eu Amo B. Camboriú e Adventure"
  }, {
    id: 81,
    image: "/lovable-uploads/24f7a091-7417-407c-be43-7e839f9a8ac7.png",
    title: "Canecas Arte em Faixa - Linha Preta e Azul Regional"
  }, {
    id: 82,
    image: "/lovable-uploads/6ef933b1-b903-43e1-a912-3188ce631ff0.png",
    title: "Canecas Arte em Faixa - Mix Colorido Azul e Amarelo"
  }, {
    id: 83,
    image: "/lovable-uploads/e489c10a-7132-4660-b145-c8a48ca01755.png",
    title: "Canecas Arte em Faixa - Mix Verde e Roxo Regional"
  }, {
    id: 84,
    image: "/lovable-uploads/f8181526-68a6-4c25-bf07-6c4d87f1c4b6.png",
    title: "Canecas Arte em Faixa - Mix Roxo e Rosa Temático"
  }, {
    id: 85,
    image: "/lovable-uploads/34998fc9-ab97-4bba-8d8a-1630ee1421fd.png",
    title: "Canecas Amarelas Temáticas - Eu Amo BC, Cristo Luz, Big Wheel e Tesouro Pirata"
  }, {
    id: 86,
    image: "/lovable-uploads/9f5bb055-da78-44cd-94ac-b58f66f5de52.png",
    title: "Canecas Brancas Temáticas - Big Wheel, Tesouro Pirata, Aventura Jurássica e Space Adventure"
  }, {
    id: 87,
    image: "/lovable-uploads/d003db86-2134-4552-ae40-9dbd385e2038.png",
    title: "Canecas Verdes Temáticas - Big Wheel, Tesouro Pirata, Aventura Jurássica e Space Adventure"
  }, {
    id: 88,
    image: "/lovable-uploads/45fc008d-97da-4b4d-9430-f222043f87d0.png",
    title: "Canecas Roxas Temáticas - Big Wheel, Tesouro Pirata, Aventura Jurássica e Space Adventure"
  }, {
    id: 89,
    image: "/lovable-uploads/4dc816f2-cf31-4564-94d7-61d697b85b3b.png",
    title: "Canecas Rosa Temáticas - Big Wheel, Tesouro Pirata, Aventura Jurássica e Space Adventure"
  }];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === products.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };
  return <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos em Destaque
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Conheça nossa linha completa de souvenirs e canecas temáticas regionais, para mais informaçoes sobre preço, modelos e disponibilidade entre em contato.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {products.map(product => <div key={product.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[16/10]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain bg-white p-4" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                      <div className="p-6 text-white w-full">
                        
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110" aria-label="Imagem anterior">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110" aria-label="Próxima imagem">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/catalogo" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-lg">
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>;
};