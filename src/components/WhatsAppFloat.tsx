
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "+2348107694432"; // Nigerian phone number
  const message = "Hello Yemkiss! I'm interested in your beauty services. Can you help me?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale hover-glow animate-pulse-glow">
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hover-lift">
        Chat with us on WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppFloat;
