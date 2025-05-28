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
import emailjs from '@emailjs/browser';

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

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !selectedDate || !formData.time) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    const bookingData = {
      ...formData,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      dateFormatted: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''
    };

    console.log('Booking submitted:', bookingData);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        ...formData,
        date: bookingData.dateFormatted,
      },
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      toast({
        title: 'Appointment request sent!',
        description: "We'll confirm your booking within 24 hours."
      });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Something went wrong',
        description: 'We were unable to send your request. Please try again later.',
        variant: 'destructive'
      });
    });

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
        title: 'Please fill in the required fields',
        description: 'Name, service, date, and time are required for WhatsApp booking',
        variant: 'destructive'
      });
      return;
    }

    const selectedService = services.find(s => s.value === formData.service);
    const phoneNumber = '1234567890';
    const message = `Hello Yemkiss! I'd like to book an appointment:\n\nName: ${formData.name}\nService: ${selectedService?.label}\nDate: ${selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}\nTime: ${formData.time}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n${formData.notes ? `Notes: ${formData.notes}` : ''}\n\nPlease confirm my appointment. Thank you!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* UI RENDERING OMITTED FOR BREVITY */}
    </div>
  );
};

export default BookAppointment;
