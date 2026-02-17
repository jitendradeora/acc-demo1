import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send, Globe, Facebook, Twitter, Instagram } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const location = useLocation();
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (location.state?.subject) {
      setSubject(location.state.subject);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.');
  };

  return (
    <div className="pt-30 pb-30">
      <SEO title="اتصل بنا" description="تواصل مع النادي الثقافي العربي في الشارقة." />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="تواصل معنا" subtitle="نحن هنا للإجابة على استفساراتكم واقتراحاتكم." centered />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm group hover:border-club-purple transition-all">
              <div className="w-12 h-12 bg-club-purple/10 rounded-2xl flex items-center justify-center text-club-purple mb-6 group-hover:bg-club-purple group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">العنوان</h3>
              <p className="text-muted-foreground leading-relaxed">الشارقة، منطقة الآبار، ص.ب 20021، الإمارات العربية المتحدة</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm group hover:border-club-blue transition-all">
              <div className="w-12 h-12 bg-club-blue/10 rounded-2xl flex items-center justify-center text-club-blue mb-6 group-hover:bg-club-blue group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
              <p className="text-muted-foreground text-right" dir="ltr">+971 6 567 2222</p>
              <p className="text-muted-foreground text-right" dir="ltr">+971 6 567 1111</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm group hover:border-club-purple transition-all">
              <div className="w-12 h-12 bg-club-purple/10 rounded-2xl flex items-center justify-center text-club-purple mb-6 group-hover:bg-club-purple group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
              <p className="text-muted-foreground">info@shjarabclub.ae</p>
              <p className="text-muted-foreground">support@shjarabclub.ae</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary px-1">الاسم بالكامل</label>
                    <input 
                      required
                      type="text" 
                      placeholder="أدخل اسمك" 
                      className="w-full bg-secondary/10 border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-club-purple focus:ring-4 focus:ring-club-purple/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary px-1">البريد الإلكتروني</label>
                    <input 
                      required
                      type="email" 
                      placeholder="example@mail.com" 
                      className="w-full bg-secondary/10 border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-club-purple focus:ring-4 focus:ring-club-purple/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary px-1">الموضوع</label>
                  <input 
                    required
                    type="text" 
                    placeholder="كيف يمكننا مساعدتك؟" 
                    className="w-full bg-secondary/10 border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-club-purple focus:ring-4 focus:ring-club-purple/5 transition-all"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary px-1">الرسالة</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..." 
                    className="w-full bg-secondary/10 border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-club-purple focus:ring-4 focus:ring-club-purple/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-club-purple hover:bg-opacity-90 transition-all text-white font-black text-lg py-5 rounded-xl shadow-xl shadow-club-purple/20 flex items-center justify-center gap-3"
                >
                  <span>إرسال الرسالة</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
