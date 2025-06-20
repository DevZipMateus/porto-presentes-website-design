export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site e gostaria de saber mais sobre os produtos da Porto Presentes e Souvenirs.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  const handleEmailClick = () => {
    const message = "Olá! Vim através do site e gostaria de entrar em contato sobre os produtos da Porto Presentes e Souvenirs.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            
            <p className="text-gray-300 mb-4 max-w-md">
              Souvenirs temáticos e presentes personalizados que capturam a essência do Brasil. 
              Desde 2022 conectando lojistas a produtos únicos e memoráveis.
            </p>
            <div className="flex space-x-4">
              <button onClick={handleEmailClick} className="text-gray-300 hover:text-white transition-colors duration-200">
                📧 Email
              </button>
              <button onClick={handleWhatsAppClick} className="text-gray-300 hover:text-white transition-colors duration-200">
                📱 WhatsApp
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('sobre')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('servicos')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('produtos')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contato')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={handleEmailClick} className="hover:text-white transition-colors duration-200 text-left">
                  portopresentes@portopresentes.com
                </button>
              </li>
              <li>
                <button onClick={handleWhatsAppClick} className="hover:text-white transition-colors duration-200 text-left">
                  (47) 99677-3591 - Carol
                </button>
              </li>
              <li className="text-sm">
                Horário: Seg-Sex 8h-18h
              </li>
              <li className="text-sm">
                Sábado: 8h-12h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Porto Presentes e Souvenirs. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvendo memórias desde 2022 🇧🇷
            </p>
          </div>
        </div>
      </div>
    </footer>;
};