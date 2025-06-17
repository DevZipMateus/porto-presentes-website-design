
export const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site e gostaria de saber mais sobre os produtos da Porto Presentes e Souvenirs.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleQuoteClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para souvenirs personalizados.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você e criar soluções personalizadas para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Entre em contato conosco e descubra como podemos ajudar seu negócio a oferecer produtos únicos e memoráveis para seus clientes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                  >
                    portopresentes@portopresentes.com
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                  >
                    (47) 99677-3591 - Carol
                  </button>
                  <p className="text-sm text-gray-500">Representante interna</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏰</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Solicite seu Orçamento
              </h4>
              <p className="text-gray-600 mb-4">
                Envie-nos suas necessidades e receba um orçamento personalizado em até 24 horas.
              </p>
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
              >
                <span className="mr-2">💬</span>
                Orçamento via WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossos Diferenciais
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultoria Especializada</h4>
                  <p className="text-gray-600">Nossa equipe analisa suas necessidades e sugere as melhores soluções para seu negócio.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Produtos Únicos</h4>
                  <p className="text-gray-600">Desenvolvemos produtos exclusivos que destacam a identidade do seu estabelecimento.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
                  <p className="text-gray-600">Todos os nossos produtos passam por rigoroso controle de qualidade antes da entrega.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Suporte Contínuo</h4>
                  <p className="text-gray-600">Acompanhamos nossos clientes desde o primeiro contato até após a entrega dos produtos.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-gray-900">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                💡 Dica Especial
              </h4>
              <p className="text-gray-600">
                Quanto maior o volume do pedido, melhores condições de preço e prazo podemos oferecer. Consulte nossas condições especiais para grandes quantidades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
