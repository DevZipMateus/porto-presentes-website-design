
export const Products = () => {
  const productCategories = [
    {
      title: "Souvenirs Regionais",
      description: "Produtos que representam a cultura e tradições locais",
      image: "🏛️",
      items: ["Miniaturas de monumentos", "Produtos artesanais", "Itens temáticos regionais", "Objetos decorativos"]
    },
    {
      title: "Presentes Personalizados",
      description: "Produtos customizados com a identidade do seu estabelecimento",
      image: "🎁",
      items: ["Chaveiros personalizados", "Canecas temáticas", "Camisetas exclusivas", "Ímãs de geladeira"]
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
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa ampla variedade de souvenirs e presentes que capturam a essência do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{category.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 w-full font-medium"
                  aria-label={`Saber mais sobre ${category.title}`}
                >
                  Saber Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Por que escolher nossos produtos?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Premium</h4>
              <p className="text-gray-600 text-sm">Materiais selecionados e acabamento impecável</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Design Exclusivo</h4>
              <p className="text-gray-600 text-sm">Criações únicas que destacam seu negócio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrega Rápida</h4>
              <p className="text-gray-600 text-sm">Prazos cumpridos e logística eficiente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Preço Justo</h4>
              <p className="text-gray-600 text-sm">Melhor custo-benefício do mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
