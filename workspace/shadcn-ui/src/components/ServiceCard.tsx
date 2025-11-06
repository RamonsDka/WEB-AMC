import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  whatsappNumber?: string;
  className?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  whatsappNumber = "18299708597",
  className = "" 
}: ServiceCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola, me interesa el servicio de ${title}. ¿Podrían brindarme más información?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className={`group hover:shadow-lg hover:shadow-[#F5D11B]/20 transition-all duration-300 hover:-translate-y-1 bg-gray-800/50 border-gray-700 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F5D11B]/20 to-[#F5D11B]/5 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-10 w-10 text-[#F5D11B]" strokeWidth={1.5} />
        </div>
        <CardTitle className="text-lg font-semibold text-white group-hover:text-[#F5D11B] transition-colors text-center">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-300 leading-relaxed text-center text-sm">
          {description}
        </CardDescription>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2"
        >
          <FaWhatsapp className="h-4 w-4" />
          Consultar por WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
}
