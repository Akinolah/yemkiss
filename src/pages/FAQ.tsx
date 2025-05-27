
import { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      category: 'general',
      question: "What services does Yemkiss offer?",
      answer: "Yemkiss offers a comprehensive range of beauty and skincare services including facial treatments (hydrating, anti-aging, acne treatment, brightening), body therapy (exfoliation, wraps, massage), beauty consultations, and personalized skincare advice. We also sell premium skincare products formulated with natural ingredients."
    },
    {
      category: 'booking',
      question: "How do I book an appointment?",
      answer: "You can book an appointment in several ways: 1) Use our online booking form on the 'Book Appointment' page, 2) Contact us via WhatsApp for instant booking, 3) Call us directly at +1 (555) 123-4567, or 4) Send us an email at hello@yemkiss.com. We'll confirm your appointment within 24 hours."
    },
    {
      category: 'booking',
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. This allows us to offer the slot to other clients. Same-day cancellations may incur a 50% charge of the service fee. We understand emergencies happen, so please contact us as soon as possible if you need to cancel."
    },
    {
      category: 'treatments',
      question: "How long do facial treatments take?",
      answer: "Treatment duration varies by service: Basic facials (60 minutes), Anti-aging treatments (75 minutes), Quick consultations (30 minutes), Comprehensive treatments (90-120 minutes). We'll provide the exact duration when you book, and we recommend arriving 15 minutes early for check-in."
    },
    {
      category: 'treatments',
      question: "Are your treatments suitable for sensitive skin?",
      answer: "Absolutely! We specialize in treatments for all skin types, including sensitive skin. Our experienced therapists will conduct a skin analysis before any treatment and use gentle, hypoallergenic products. Please inform us about any allergies or sensitivities when booking."
    },
    {
      category: 'products',
      question: "Are your skincare products natural?",
      answer: "Yes, our products are formulated with carefully selected natural and organic ingredients. We avoid harsh chemicals, sulfates, and parabens. All products are dermatologically tested, cruelty-free, and come in eco-friendly packaging. We're transparent about all ingredients used."
    },
    {
      category: 'products',
      question: "Can I purchase products without having a treatment?",
      answer: "Yes, you can purchase our skincare products directly through our online shop with WhatsApp checkout, visit our studio, or contact us directly. We also offer virtual consultations to help you choose the right products for your skin type and concerns."
    },
    {
      category: 'pricing',
      question: "What are your prices for treatments?",
      answer: "Our prices range from $60 for consultations to $300 for comprehensive packages. Facial treatments: $120-$180, Body treatments: $100-$200, Consultations: $60-$80. We offer package deals and seasonal promotions. Contact us for current pricing and special offers."
    },
    {
      category: 'pricing',
      question: "Do you offer package deals or discounts?",
      answer: "Yes! We offer various packages including bridal packages, monthly treatment plans, and seasonal promotions. First-time clients receive 15% off their initial consultation. We also have loyalty programs for regular clients. Follow us on social media for exclusive offers."
    },
    {
      category: 'general',
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive skin consultation where we assess your skin type, concerns, and goals. We'll discuss your current routine, lifestyle factors, and create a personalized treatment plan. The consultation takes about 30 minutes and helps us provide the best recommendations for your needs."
    },
    {
      category: 'treatments',
      question: "How often should I get facial treatments?",
      answer: "For optimal results, we recommend professional facials every 4-6 weeks, which aligns with your skin's natural renewal cycle. However, this can vary based on your skin type, concerns, and goals. During your consultation, we'll create a personalized treatment schedule that works for your lifestyle and budget."
    },
    {
      category: 'general',
      question: "Do you use organic and cruelty-free products?",
      answer: "Yes, we're committed to using organic, natural, and cruelty-free products. We partner with suppliers who share our values of sustainability and ethical practices. All our products are tested for safety and efficacy without animal testing, and we use eco-friendly packaging whenever possible."
    },
    {
      category: 'booking',
      question: "Can I bring a friend to my appointment?",
      answer: "We welcome friends and family in our reception area, but treatment rooms are designed for individual sessions to maintain privacy and focus. We do offer couple's packages and group consultations for special occasions. Please let us know in advance if you'd like to book multiple services."
    },
    {
      category: 'treatments',
      question: "What should I do to prepare for my treatment?",
      answer: "Come with clean skin (no makeup for facial treatments), wear comfortable clothing, and avoid sun exposure 24 hours before certain treatments. If you have any medical conditions, allergies, or are taking medications, please inform us when booking. We'll provide specific pre-treatment instructions based on your chosen service."
    },
    {
      category: 'general',
      question: "Are gift certificates available?",
      answer: "Yes! Gift certificates are perfect for birthdays, holidays, or any special occasion. They can be purchased for specific treatments or dollar amounts, and are valid for one year from purchase date. Contact us via WhatsApp, phone, or email to purchase gift certificates."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions', count: faqData.length },
    { value: 'general', label: 'General Info', count: faqData.filter(faq => faq.category === 'general').length },
    { value: 'booking', label: 'Booking & Appointments', count: faqData.filter(faq => faq.category === 'booking').length },
    { value: 'treatments', label: 'Treatments', count: faqData.filter(faq => faq.category === 'treatments').length },
    { value: 'products', label: 'Products', count: faqData.filter(faq => faq.category === 'products').length },
    { value: 'pricing', label: 'Pricing', count: faqData.filter(faq => faq.category === 'pricing').length }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const categoryMatch = selectedCategory === 'all' || faq.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleWhatsApp = () => {
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    const message = "Hello Yemkiss! I have a question that's not covered in your FAQ. Can you help me?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Frequently Asked 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about our services, booking process, 
            products, and everything else you need to know about Yemkiss.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-rose-200 focus:ring-rose-300 rounded-full pl-10 pr-4 py-3"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-full ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-rose-500 to-peach-500 text-white'
                    : 'border-rose-300 text-rose-600 hover:bg-rose-50'
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-rose-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-rose-50 text-left">
                    <div className="flex items-start justify-between w-full">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-rose-500 shrink-0 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No matching questions found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our friendly team is always here to help. Reach out to us through any of these convenient channels.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Quick responses via WhatsApp</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our team</p>
                <Button 
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-4">Detailed inquiries welcome</p>
                <Button 
                  variant="outline"
                  className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full"
                >
                  hello@yemkiss.com
                </Button>
              </CardContent>
            </Card>
          </div>

          <Button 
            asChild
            className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale"
          >
            <a href="/contact">Visit Contact Page</a>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Popular Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Book Appointment', href: '/book' },
              { label: 'Our Services', href: '/services' },
              { label: 'Shop Products', href: '/shop' },
              { label: 'View Gallery', href: '/gallery' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact Us', href: '/contact' }
            ].map((link) => (
              <Button
                key={link.label}
                asChild
                variant="outline"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 rounded-full"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
