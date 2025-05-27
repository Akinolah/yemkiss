
import { Shield, Eye, Lock, FileText, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-rose-500" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when booking appointments (name, email, phone number)",
        "Treatment preferences and skin concerns shared during consultations",
        "Payment information for services and products (processed securely through our payment providers)",
        "Communication history when you contact us via phone, email, or WhatsApp",
        "Website usage data and cookies to improve your browsing experience"
      ]
    },
    {
      icon: <Eye className="w-6 h-6 text-peach-500" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our beauty and skincare services",
        "To schedule and confirm your appointments",
        "To communicate about your treatments and provide aftercare instructions",
        "To process payments for services and products",
        "To send you relevant information about our services, promotions, and skincare tips (with your consent)",
        "To comply with legal obligations and protect our legitimate business interests"
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Information Security",
      content: [
        "We implement industry-standard security measures to protect your personal information",
        "All data transmission is encrypted using SSL technology",
        "Payment information is processed through secure, PCI-compliant payment processors",
        "Access to personal information is restricted to authorized staff members only",
        "We regularly update our security practices to protect against new threats",
        "We do not store credit card information on our servers"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-peach-500" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist us in operating our business (e.g., appointment scheduling, payment processing)",
        "We may disclose information when required by law or to protect our rights and safety",
        "With your explicit consent, we may use before/after photos for marketing purposes",
        "Anonymous, aggregated data may be used for business analysis and improvement"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-rose-500" />,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance your website experience and remember your preferences",
        "Analytics cookies help us understand how visitors use our website",
        "You can control cookie settings through your browser preferences",
        "We may use third-party analytics services like Google Analytics",
        "We do not use cookies for invasive tracking or selling data to advertisers"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-peach-500" />,
      title: "Your Rights",
      content: [
        "Access: Request a copy of the personal information we hold about you",
        "Correction: Request correction of any inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information (subject to legal requirements)",
        "Opt-out: Unsubscribe from marketing communications at any time",
        "Portability: Request transfer of your data in a commonly used format",
        "Contact us at privacy@yemkiss.com to exercise any of these rights"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <Shield className="w-16 h-16 text-rose-500 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Privacy 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-peach-600">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information when you use our services.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-rose-100 bg-gradient-to-br from-rose-50 to-peach-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Yemkiss, we are committed to protecting your privacy and maintaining the confidentiality 
                of your personal information. This Privacy Policy describes how we collect, use, disclose, 
                and safeguard your information when you visit our website, use our services, or communicate with us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection and use of your information as described 
                in this policy. We encourage you to read this policy carefully and contact us if you have any questions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="hover-lift border-rose-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-serif font-bold text-gray-900 ml-3">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-peach-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-rose-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-rose-500 mr-3" />
                Data Retention
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How Long We Keep Your Data</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Appointment records: 3 years after last visit</li>
                    <li>• Treatment history: 5 years for health records</li>
                    <li>• Marketing communications: Until you unsubscribe</li>
                    <li>• Website analytics: 24 months maximum</li>
                    <li>• Payment records: As required by law (typically 7 years)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Deletion</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We automatically delete personal information when it's no longer needed 
                    for the purposes outlined in this policy. You can request earlier deletion 
                    by contacting us, though some information may need to be retained for legal 
                    or regulatory compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-peach-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-rose-100 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are intended for individuals 18 years of age and older. We do not 
                knowingly collect personal information from children under 18. If we become aware 
                that we have collected personal information from a child under 18, we will take 
                steps to delete such information promptly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For clients under 18, we require parental consent and the presence of a parent 
                or guardian during consultations and treatments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-rose-100 bg-gradient-to-br from-rose-50 to-peach-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Contact Us About Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, our data practices, 
                or your personal information, please don't hesitate to contact us.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-rose-600">privacy@yemkiss.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-rose-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-rose-600">123 Beauty Street<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-peach-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Policy Updates
          </h2>
          <p className="text-xl text-rose-100 mb-6 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons.
          </p>
          <p className="text-rose-100">
            We will notify you of any material changes by posting the new Privacy Policy on this page 
            and updating the "last updated" date. We encourage you to review this policy periodically.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
