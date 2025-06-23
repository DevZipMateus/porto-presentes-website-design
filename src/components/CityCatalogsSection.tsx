
export const CityCatalogsSection = () => {
  const handleContactClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os catálogos de cidades disponíveis ou solicitar uma arte personalizada.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const cities = [
    "Balneário Camboriú - SC",
    "Blumenau - SC", 
    "Bombinhas - SC",
    "Búzios - RJ",
    "Paraty - RJ",
    "Curitiba - PR",
    "Florianópolis - SC",
    "Gramado e Canela - RS",
    "Itajaí - SC",
    "Joinville - SC",
    "Pantanal - MT e MS",
    "Rio de Janeiro - RJ",
    "Rio Grande do Sul - RS",
    "Pelotas - RS",
    "Nova Trento - SC (Santa Paulina)",
    "São Paulo - SP",
    "Serra Catarinense - SC",
    "Urubici - Urupema - Lages - São Joaquim - Outras...",
    "Vale Europeu - SC",
    "Dr Pedrinho - Rodeio - Indaial - Apiúna - Timbó - Ascurra - Pomerode"
  ];

  const themes = [
    "PRAIAS com temas diversos",
    "Beto Carrero - Laguna - Piratas - Prainha - Summer",
    "Brasil",
    "Eu amo Brasil - Bandeira Brasil - Coração Brasil - Mapa Brasil"
  ];

  return (
    <section id="catalogos-cidades" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catálogos de Cidades
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-8">
            CIDADES COM CATÁLOGOS PRONTOS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {cities.map((city, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
              <p className="text-sm sm:text-base text-gray-800 font-medium">{city}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6 text-center">
            TEMAS ESPECIAIS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                <p className="text-sm sm:text-base text-gray-800 font-medium">{theme}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="inline-flex items-center bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-base sm:text-lg mb-6"
          >
            <span className="mr-2">💬</span>
            Entre em Contato
          </button>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Fazemos itens de qualquer cidade, se a sua não está no catálogo é só entrar em contato pelo botão acima que faremos sua arte personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};
