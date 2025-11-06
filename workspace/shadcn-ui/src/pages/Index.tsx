import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import HexagonBackground from '@/components/HexagonBackground';
import { 
  Shield, 
  Eye, 
  Smartphone, 
  MessageSquare, 
  Clock, 
  Wifi, 
  Wrench, 
  MapPin, 
  HeadphonesIcon, 
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Settings
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { translations, Language } from '@/lib/translations';

export default function Index() {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const t = translations[language];

  // Remove AMC Protect - now 10 services
  const services = [
    {
      title: t.services.monitoring.title,
      description: t.services.monitoring.description,
      icon: Shield
    },
    {
      title: t.services.armedResponse.title,
      description: t.services.armedResponse.description,
      icon: ShieldCheck
    },
    {
      title: t.services.videoSurveillance.title,
      description: t.services.videoSurveillance.description,
      icon: Eye
    },
    {
      title: t.services.mobileApp.title,
      description: t.services.mobileApp.description,
      icon: Smartphone
    },
    {
      title: t.services.smsReports.title,
      description: t.services.smsReports.description,
      icon: MessageSquare
    },
    {
      title: t.services.timeControl.title,
      description: t.services.timeControl.description,
      icon: Clock
    },
    {
      title: t.services.gprsBackup.title,
      description: t.services.gprsBackup.description,
      icon: Wifi
    },
    {
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      icon: Wrench
    },
    {
      title: t.services.rounds.title,
      description: t.services.rounds.description,
      icon: MapPin
    },
    {
      title: t.services.assist.title,
      description: t.services.assist.description,
      icon: HeadphonesIcon
    }
  ];

  const stats = [
    { number: '15+', label: language === 'es' ? 'Años de Experiencia' : 'Years of Experience' },
    { number: '5000+', label: language === 'es' ? 'Clientes Protegidos' : 'Protected Clients' },
    { number: '24/7', label: language === 'es' ? 'Monitoreo Continuo' : 'Continuous Monitoring' },
    { number: '99.9%', label: language === 'es' ? 'Tiempo de Actividad' : 'Uptime' }
  ];

  const brands = ['Ajax', 'Honeywell', 'Hikvision', 'DSC', 'Dahua', 'Risco', 'Paradox'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-security-monitoring_variant_1.jpg"
            alt="Security Monitoring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#30343F]/90 via-[#30343F]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Badge className="bg-[#F5D11B] text-[#30343F] hover:bg-[#F5D11B]/90 text-base font-semibold px-6 py-3">
                    {language === 'es' ? 'Líderes en Seguridad' : 'Security Leaders'}
                  </Badge>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {t.hero.title}
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Monitoring Number - Prominent Display */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/18299708597"
                  className="inline-flex flex-col items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-sm font-bold uppercase tracking-wider mb-1">MONITOREO 24/7</div>
                  <div className="flex items-center space-x-2">
                    <FaWhatsapp className="h-5 w-5" />
                    <span className="text-xl font-bold">+1 (829) 970-8597</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-[#F5D11B] text-[#30343F] hover:bg-[#F5D11B]/90 font-semibold px-8 py-4 text-lg w-64"
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  onClick={() => scrollToSection('services')}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#30343F] font-semibold px-8 py-4 text-lg w-64"
                >
                  {t.hero.learnMore}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section with Management Info */}
      <section className="py-16 bg-[#F5D11B] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Management Info - IMPROVED SPACING AND SIZE */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="bg-[#30343F] text-white px-10 py-5 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">Lic. Robert Lorenzo</div>
                <div className="text-base text-[#F5D11B]">Gerente General</div>
              </div>
            </div>
            <div className="bg-[#30343F] text-white px-10 py-5 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">July Gil</div>
                <div className="text-base text-[#F5D11B]">Gerente Administrativo</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#30343F] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-[#30343F]/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Brands Info */}
          <div className="text-center border-t-2 border-[#30343F]/20 pt-6">
            <p className="text-[#30343F] font-semibold mb-3">
              {language === 'es' ? 'Trabajamos con las mejores marcas:' : 'We work with the best brands:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((brand, index) => (
                <span key={index} className="bg-[#30343F] text-[#F5D11B] px-4 py-2 rounded-full text-sm font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 relative overflow-hidden">
        <HexagonBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="h-full flex flex-col"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - CENTERED AND REORGANIZED */}
      <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
        <HexagonBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              "{t.about.title}"
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* About Text */}
            <div>
              <p className="text-gray-300 leading-relaxed text-justify text-lg">
                {t.about.description}
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-[#F5D11B] bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">
                    {t.about.mission}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    {t.about.missionText}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#444E71] bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">
                    {t.about.vision}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    {t.about.visionText}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - SEPARATE */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <HexagonBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-lg border-2 border-[#F5D11B] shadow-2xl">
              {/* Decorative gears */}
              <div className="absolute top-4 right-4 opacity-20">
                <Settings className="h-16 w-16 text-[#F5D11B]" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <Settings className="h-12 w-12 text-[#F5D11B]" />
              </div>

              <div className="relative z-10 text-center space-y-6">
                <div className="border-b-2 border-[#F5D11B] pb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t.team.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t.team.subtitle}
                  </p>
                  
                  <div className="border-t-2 border-[#F5D11B] pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      Contamos con un equipo de profesionales altamente capacitados y certificados en las últimas tecnologías de seguridad. Nuestros técnicos especializados están disponibles 24/7 para garantizar la protección continua de nuestros clientes.
                    </p>
                  </div>

                  <div className="border-t-2 border-[#F5D11B] pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      Cada miembro de nuestro equipo está comprometido con la excelencia en el servicio, manteniendo los más altos estándares de calidad y profesionalismo en cada instalación, mantenimiento y respuesta de emergencia.
                    </p>
                  </div>
                </div>

                {/* Yellow accent lines */}
                <div className="flex justify-center space-x-2 pt-4">
                  <div className="h-1 w-16 bg-[#F5D11B]"></div>
                  <div className="h-1 w-16 bg-[#F5D11B]"></div>
                  <div className="h-1 w-16 bg-[#F5D11B]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - REORGANIZED */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <HexagonBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {language === 'es' ? 'Nuestra Ubicación' : 'Our Location'}
            </h2>
            <p className="text-xl text-gray-300">
              {language === 'es' 
                ? 'Visítanos en Santiago de los Caballeros' 
                : 'Visit us in Santiago de los Caballeros'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Address */}
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <MapPin className="h-5 w-5 text-[#F5D11B]" />
                    <span>{t.contact.address}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    {t.contact.addressText}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{language === 'es' ? 'Estacionamiento disponible' : 'Parking available'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{language === 'es' ? 'Fácil acceso' : 'Easy access'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{language === 'es' ? 'Zona comercial' : 'Commercial area'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Numbers Section */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Phone className="h-5 w-5 text-[#F5D11B]" />
                    <span>{language === 'es' ? 'Teléfonos de Contacto' : 'Contact Numbers'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/18299708597"
                    className="flex items-center space-x-3 p-4 bg-green-600/20 border border-green-600 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <FaWhatsapp className="h-6 w-6 text-green-500" />
                    <div>
                      <div className="text-xs text-gray-400">{t.contact.emergency}</div>
                      <div className="font-semibold text-white text-lg">+1 (829) 970-8597</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://wa.me/18095827980"
                    className="flex items-center space-x-3 p-4 bg-green-600/20 border border-green-600 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <FaWhatsapp className="h-6 w-6 text-green-500" />
                    <div>
                      <div className="text-xs text-gray-400">{t.contact.phone}</div>
                      <div className="font-semibold text-white text-lg">+1 (809) 582-7980</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Social Media Section - SEPARATE */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    {language === 'es' ? 'Síguenos en Redes Sociales' : 'Follow Us on Social Media'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="https://wa.me/18299708597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <FaWhatsapp className="h-7 w-7" />
                    </a>
                    <a
                      href="https://www.instagram.com/amcalarmas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <FaInstagram className="h-7 w-7" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/amc-alarm-monitoring-company-srl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FaLinkedin className="h-7 w-7" />
                    </a>
                    <a
                      href="https://www.facebook.com/amcalarmas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaFacebook className="h-7 w-7" />
                    </a>
                    <a
                      href="https://twitter.com/amcalarmas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter className="h-7 w-7" />
                    </a>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-400">
                      #AMCAlarmas #SeguridadRD #MonitoreoRD #VideovigilanciaRD #ProtecciónTotal
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Map and Buttons */}
            <div className="space-y-6">
              <div className="relative h-96 bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/mapa.png"
                  alt="AMC Location Map"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => window.open('https://maps.google.com/?q=Carretera+Don+Pedro+Plaza+Shalimar+Santiago', '_blank')}
                  className="bg-[#F5D11B] text-[#30343F] hover:bg-[#F5D11B]/90"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.open('https://wa.me/18299708597?text=Hola, me gustaría agendar una visita a sus oficinas', '_blank')}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  {language === 'es' ? 'Agendar Visita' : 'Schedule Visit'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
        <HexagonBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-300">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm language={language} type="quote" />
            <ContactForm language={language} type="contact" />
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
