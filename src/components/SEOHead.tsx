
import { useEffect } from 'react';

export const SEOHead = () => {
  useEffect(() => {
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Porto Presentes e Souvenirs",
      "description": "Empresa especializada em souvenirs temáticos e presentes personalizados",
      "email": "portopresentes@portopresentes.com",
      "telephone": "+5547996773591",
      "foundingDate": "2022",
      "url": "https://portopresentes.com",
      "logo": "/lovable-uploads/bf7f357b-38ff-4469-ac34-d7ca5a9a7031.png",
      "sameAs": []
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
