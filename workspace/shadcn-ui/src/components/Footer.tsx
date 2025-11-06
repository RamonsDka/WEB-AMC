import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { translations, Language } from '@/lib/translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-[#30343F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/AMC.png"
                alt="AMC Logo"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg font-bold text-[#F5D11B]">AMC</h3>
                <p className="text-sm text-gray-300">Alarmas y Monitoreo del Caribe, SRL</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Líderes en sistemas de seguridad, monitoreo y videovigilancia en República Dominicana.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5D11B]">{t.contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F5D11B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">{t.contact.address}</p>
                  <p className="text-sm text-gray-300">{t.contact.addressText}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F5D11B] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">{t.contact.phone}</p>
                  <a href="tel:+18095827980" className="text-sm text-gray-300 hover:text-[#F5D11B] transition-colors">
                    +1 (809) 582-7980
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#F5D11B] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">{t.contact.hours}</p>
                  <p className="text-sm text-gray-300 whitespace-pre-line">{t.contact.hoursText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5D11B]">Departamentos</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">{t.contact.emergency}</p>
                <a 
                  href="https://wa.me/18299708597" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#F5D11B] transition-colors"
                >
                  +1 (829) 970-8597
                </a>
              </div>
              
              <div>
                <p className="text-sm font-medium">{t.contact.billing}</p>
                <a 
                  href="https://wa.me/18496303560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#F5D11B] transition-colors"
                >
                  +1 (849) 630-3560
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5D11B]">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/18299708597"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#444E71] rounded-full hover:bg-[#F5D11B] hover:text-[#30343F] transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/amcalarmas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#444E71] rounded-full hover:bg-[#F5D11B] hover:text-[#30343F] transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/amc-alarm-monitoring-company-srl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#444E71] rounded-full hover:bg-[#F5D11B] hover:text-[#30343F] transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/amcalarmas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#444E71] rounded-full hover:bg-[#F5D11B] hover:text-[#30343F] transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/amcalarmas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#444E71] rounded-full hover:bg-[#F5D11B] hover:text-[#30343F] transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 AMC Alarmas y Monitoreo del Caribe, SRL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
