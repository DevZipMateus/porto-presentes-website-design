
export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre a Porto Presentes
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nossa História
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundada em 2022, a Porto Presentes e Souvenirs nasceu com o intuito de desenvolver e fornecer souvenirs temáticos para lojistas de todo o Brasil.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa paixão é celebrar a diversidade e a beleza do Brasil, oferecendo produtos que capturam a essência de nossas cidades turísticas e encantam visitantes de todas as partes do mundo.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Nosso Propósito
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Queremos que o lojista tenha em sua loja produtos que o seu cliente leve como recordação ou lembrança, criando memórias duradouras e fortalecendo o vínculo emocional com os destinos visitados.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">2022</div>
                  <div className="text-sm text-gray-600">Ano de Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Nacional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
                  <div className="text-sm text-gray-600">Possibilidades</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🎯
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Missão</h4>
            <p className="text-gray-600">
              Fornecer souvenirs únicos e memoráveis que representem a riqueza cultural e turística do Brasil.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              👁️
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Visão</h4>
            <p className="text-gray-600">
              Ser referência nacional em souvenirs temáticos, presente em todos os principais pontos turísticos do país.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              💎
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Valores</h4>
            <p className="text-gray-600">
              Qualidade, criatividade, compromisso com o cliente e valorização da cultura brasileira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
