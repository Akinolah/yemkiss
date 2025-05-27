
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    notes: ''
  });
  const { toast } = useToast();

  const services = [
    { value: 'hydrating-facial', label: 'Hydrating Facial - $120', duration: '60 mins' },
    { value: 'anti-aging-facial', label: 'Anti-Aging Facial - $180', duration: '75 mins' },
    { value: 'acne-treatment', label: 'Acne Treatment Facial - $140', duration: '60 mins' },
    { value: 'brightening-facial', label: 'Brightening Facial - $160', duration: '60 mins' },
    { value: 'body-exfoliation', label: 'Full Body Exfoliation - $100', duration: '45 mins' },
    { value: 'body-wrap', label: 'Body Wrap Treatment - $200', duration: '90 mins' },
    { value: 'body-massage', label: 'Relaxing Body Massage - $130', duration: '60 mins' },
    { value: 'skin-consultation', label: 'Skin Analysis Consultation - $60', duration: '30 mins' },
    { value: 'beauty-consultation', label: 'Beauty Makeover Consultation - $80', duration: '45 mins' },
    { value: 'bridal-package', label: 'Bridal Beauty Package - $300', duration: '120 mins' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !selectedDate || !formData.time) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create booking data
    const bookingData = {
      ...formData,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      dateFormatted: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''
    };

    console.log('Booking submitted:', bookingData);
    
    toast({
      title: "Appointment request sent!",
      description: "We'll confirm your booking within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      time: '',
      notes: ''
    });
    setSelectedDate(undefined);
  };

  const handleWhatsAppBooking = () => {
    if (!formData.name || !formData.service || !selectedDate || !formData.time) {
      toast({
        title: "Please fill in the required fields",
        description: "Name, service, date, and time are required for WhatsApp booking",
        variant: "destructive"
      });
      return;
    }

    const selectedService = services.find(s => s.value === formData.service);
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    const message = `Hello Yemkiss! I'd like to book an appointment:

Name: ${formData.name}
Service: ${selectedService?.label}
Date: ${selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
Time: ${formData.time}
Phone: ${formData.phone}
Email: ${formData.email}
${formData.notes ? `Notes: ${formData.notes}` : ''}

Please confirm my appointment. Thank you!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Book Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Appointment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Schedule your personalized beauty treatment with our expert team. 
            We're here to help you achieve your skincare and beauty goals.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="hover-lift border-rose-100 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-3 text-rose-500" />
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="border-rose-200 focus:ring-rose-300 mt-2"
                        placeholder="Enter your full name"
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
                        className="border-rose-200 focus:ring-rose-300 mt-2"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-rose-200 focus:ring-rose-300 mt-2"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <CalendarIcon className="w-6 h-6 mr-3 text-peach-500" />
                    Service & Schedule
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-700 font-medium">
                        Select Service *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                        <SelectTrigger className="border-rose-200 focus:ring-rose-300 mt-2">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-rose-200 max-h-60">
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <div className="flex flex-col">
                                <span>{service.label}</span>
                                <span className="text-xs text-gray-500">{service.duration}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium">
                        Preferred Date *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-rose-200 focus:ring-rose-300 mt-2"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white border-rose-200" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium">
                        Preferred Time *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)}>
                        <SelectTrigger className="border-rose-200 focus:ring-rose-300 mt-2">
                          <SelectValue placeholder="Choose a time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-rose-200 max-h-60">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="notes" className="text-gray-700 font-medium">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-rose-200 focus:ring-rose-300 mt-2 resize-none"
                    placeholder="Any specific requests, skin concerns, or allergies we should know about..."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale flex-1"
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Submit Booking Request
                  </Button>
                  <Button 
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full hover-scale flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Booking Information
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about scheduling your appointment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Confirmation Process
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll confirm your appointment within 24 hours via email or phone. 
                  Please arrive 15 minutes early for your scheduled treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-peach-500 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600 text-sm">
                  Please provide at least 24 hours notice for cancellations or rescheduling. 
                  Same-day cancellations may incur a fee.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <p className="text-gray-600 text-sm">
                  Come with clean skin and comfortable clothing. We'll provide robes 
                  and towels. Feel free to discuss any concerns with your therapist.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Have Questions About Booking?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our friendly team is here to help you choose the perfect treatment and schedule your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-gradient-to-r from-rose-500 to-peach-500 hover:from-rose-600 hover:to-peach-600 text-white rounded-full hover-scale"
            >
              <a href="/contact">Contact Us</a>
            </Button>
            <Button 
              onClick={handleWhatsAppBooking}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full hover-scale"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
