

export const Services = () => {
  const handleQuoteClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para souvenirs personalizados.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      title: "Diversos Souvenirs",
      description: "Ampla variedade de produtos temáticos para diferentes destinos e ocasiões",
      icon: "🛍️",
      features: [
        "Produtos regionais autênticos",
        "Qualidade garantida",
        "Variedade de categorias",
        "Preços competitivos"
      ]
    },
    {
      title: "Personalização com Arte do Cliente",
      description: "Adaptamos nossos produtos com a identidade visual do seu estabelecimento",
      icon: "🎨",
      features: [
        "Logotipos personalizados",
        "Cores exclusivas",
        "Design sob medida",
        "Aprovação prévia"
      ]
    },
    {
      title: "Desenvolvimento de Artes Temáticas",
      description: "Criamos artes exclusivas com o tema desejado pelo cliente",
      icon: "✨",
      features: [
        "Equipe criativa especializada",
        "Temas regionais",
        "Arte original",
        "Múltiplas aplicações"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em souvenirs e presentes personalizados para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={handleQuoteClick}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 w-full font-medium"
                  aria-label={`Solicitar orçamento para ${service.title}`}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Atendimento Especializado
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades específicas e desenvolver soluções personalizadas para seu negócio
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold mb-2">Consultoria Gratuita</h4>
              <p className="text-gray-300 text-sm">Análise das suas necessidades</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Resposta Rápida</h4>
              <p className="text-gray-300 text-sm">Orçamentos em até 24h</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Parceria Duradoura</h4>
              <p className="text-gray-300 text-sm">Relacionamento de longo prazo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

