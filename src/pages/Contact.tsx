
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    const message = "Hello Yemkiss! I'd like to get in touch with you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      title: "Visit Our Studio",
      details: ["123 Beauty Street", "Beverly Hills, CA 90210", "United States"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-peach-500" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-rose-500" />,
      title: "Email Us",
      details: ["hello@yemkiss.com", "support@yemkiss.com"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-peach-500" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 5:00 PM"],
      action: "Book Appointment"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Get in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We'd love to hear from you! Whether you have questions about our services, 
            need skincare advice, or want to book an appointment, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-lift border-rose-100 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full group-hover:border-rose-400"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:ring-rose-300 mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:ring-rose-300 mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:ring-rose-300 mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-700 font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:ring-rose-300 mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-rose-200 focus:ring-rose-300 mt-1 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full hover-scale flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <Card className="hover-lift border-rose-100 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-rose-200 to-peach-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-rose-500" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Google Maps integration would go here</p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Stay connected with us on social media for the latest updates, 
                    beauty tips, and behind-the-scenes content.
                  </p>
                  <div className="flex space-x-4">
                    {['Instagram', 'Facebook', 'TikTok', 'YouTube'].map((platform) => (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full"
                      >
                        {platform}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="hover-lift border-rose-100 bg-gradient-to-br from-rose-50 to-peach-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    For urgent inquiries or same-day appointments, 
                    contact us directly via WhatsApp or phone.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={handleWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full hover-scale flex-1"
                    >
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full flex-1"
                    >
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? Check out our FAQ section for quick answers to common inquiries.
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale"
          >
            <a href="/faq">View FAQ</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
