import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface ContactFormProps {
  language: Language;
  type: 'quote' | 'contact';
}

export default function ContactForm({ language, type }: ContactFormProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const services = [
    t.services.monitoring.title,
    t.services.armedResponse.title,
    t.services.videoSurveillance.title,
    t.services.mobileApp.title,
    t.services.smsReports.title,
    t.services.timeControl.title,
    t.services.gprsBackup.title,
    t.services.maintenance.title,
    t.services.rounds.title,
    t.services.assist.title
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = type === 'quote' 
      ? `Hola, solicito cotización para:\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nServicio: ${formData.service}\nMensaje: ${formData.message}`
      : `Hola, me contacto desde la web:\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = type === 'quote' ? '18299708597' : '18095827980';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formTitle = type === 'quote' ? t.forms.quote.title : t.forms.contact.title;
  const submitText = type === 'quote' ? t.forms.quote.submit : t.forms.contact.submit;

  return (
    <Card className="w-full max-w-lg mx-auto bg-gray-800/50 border-gray-700">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">
          {formTitle}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {type === 'quote' 
            ? 'Complete el formulario y nos contactaremos con usted'
            : 'Estamos aquí para ayudarle con cualquier consulta'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">{t.forms.quote.name}</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="w-full bg-gray-700 border-gray-600 text-white"
              placeholder="Ingrese su nombre completo"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">{t.forms.quote.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full bg-gray-700 border-gray-600 text-white"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-200">{t.forms.quote.phone}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="w-full bg-gray-700 border-gray-600 text-white"
                placeholder="+1 (809) 000-0000"
              />
            </div>
          </div>

          {type === 'quote' ? (
            <div className="space-y-2">
              <Label htmlFor="service" className="text-gray-200">{t.forms.quote.service}</Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Seleccione un servicio" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  {services.map((service, index) => (
                    <SelectItem key={index} value={service} className="text-white hover:bg-gray-600">
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-200">{t.forms.contact.subject}</Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
                className="w-full bg-gray-700 border-gray-600 text-white"
                placeholder="Tema de su consulta"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-200">{t.forms.quote.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="w-full min-h-[100px] bg-gray-700 border-gray-600 text-white"
              placeholder={type === 'quote' 
                ? "Describa sus necesidades de seguridad..."
                : "Escriba su consulta o comentario..."
              }
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{submitText}</span>
          </Button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center mb-4">
            O contáctanos directamente:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+18095827980"
              className="flex items-center justify-center space-x-2 p-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Phone className="h-4 w-4 text-[#F5D11B]" />
              <span className="text-sm font-medium text-gray-300">Llamar</span>
            </a>
            
            <a
              href="mailto:info@amcmonitoreo.com"
              className="flex items-center justify-center space-x-2 p-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#F5D11B]" />
              <span className="text-sm font-medium text-gray-300">Email</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
