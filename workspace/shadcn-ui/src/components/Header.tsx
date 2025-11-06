import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { translations, Language } from '@/lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  const navigation = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/AMC.png"
              alt="AMC Logo"
              className="h-12 w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">AMC</h1>
              <p className="text-xs text-gray-400">Alarmas y Monitoreo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-[#F5D11B] transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Emergency Phone */}
            <a
              href="tel:+18299708597"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#F5D11B] transition-colors"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>+1 (829) 970-8597</span>
            </a>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 text-gray-300 hover:text-[#F5D11B]"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Quote Button */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#F5D11B] text-[#30343F] hover:bg-[#F5D11B]/90 font-medium"
            >
              {t.nav.quote}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Language Toggle Mobile */}
                  <Button
                    variant="outline"
                    onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                    className="flex items-center justify-center space-x-2 border-gray-700 text-gray-300"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language === 'es' ? 'English' : 'Español'}</span>
                  </Button>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-lg font-medium text-gray-300 hover:text-[#F5D11B] transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>

                  {/* Emergency Contact */}
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-sm font-medium text-white mb-2">
                      {t.contact.emergency}
                    </p>
                    <a
                      href="tel:+18299708597"
                      className="flex items-center space-x-2 text-[#F5D11B] hover:text-[#F5D11B]/80 transition-colors"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      <span>+1 (829) 970-8597</span>
                    </a>
                  </div>

                  {/* Quote Button Mobile */}
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="bg-[#F5D11B] text-[#30343F] hover:bg-[#F5D11B]/90 font-medium w-full"
                  >
                    {t.nav.quote}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
