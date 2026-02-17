import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { EventCard, NewsCard } from '../components/Cards';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import banner from '@/assets/acc-banner-3.jpg';
import smallbanner from '@/assets/acc-banner.jpg';
import aboutbanner from '@/assets/acc-banner-1.jpg';
//import about from '@/assets/about-banner.jpg';
import newsone from '@/assets/news-1.jpg';
import newstwo from '@/assets/news-2.jpg';
import newsthree from '@/assets/news-3.jpg';
import newsfour from '@/assets/news-4.jpg';
import newsfive from '@/assets/news-5.jpg';
import newssix from '@/assets/news-6.jpg';
import eventone from '@/assets/event-1-u.jpg';
import eventtwo from '@/assets/event-2-u.jpg';
import eventthree from '@/assets/event-3-u.jpg';

const eventsData = [
  {
    id: 1,
    title: 'أمسية شعرية: نبض الحروف في حب الشارقة',
    date: '25 فبراير 2026',
    location: 'قاعة المحاضرات الكبرى',
    category: 'أدب وشعر',
    image: eventone,
  },
  {
    id: 2,
    title: 'ورشة عمل: فن الخط العربي والزخرفة الإسلامية',
    date: '2 مارس 2026',
    location: 'مرسم النادي',
    category: 'ورش فنية',
    image: eventtwo,
  },
  {
    id: 3,
    title: 'ندوة فكرية: الهوية الثقافية العربية في عصر الذكاء الاصطناعي',
    date: '10 مارس 2026',
    location: 'المكتبة الرقمية',
    category: 'ندوات',
    image: eventthree,
  }
];

const newsData = [
  {
    id: 1,
    title: 'النادي الثقافي العربي يطلق برنامج "المبدع الصغير" لعام 2026',
    excerpt: 'في خطوة تهدف لتعزيز المواهب الشابة، أعلن النادي عن إطلاق سلسلة من الورش التخصصية الموجهة للأطفال واليافعين في مجالات الأدب والفنون...',
    date: '12 فبراير 2026',
    category: 'أخبار النادي',
    image: newsone
  },
  {
    id: 2,
    title: 'وفد ثقافي من مجلس التعاون يزور مقر النادي في الشارقة',
    excerpt: 'استقبل النادي الثقافي العربي وفداً رفيع المستوى لبحث سبل التعاون الثقافي المشترك وتبادل الخبرات في تنظيم المهرجانات الأدبية والأنشطة المجتمعية...',
    date: '10 فبراير 2026',
    category: 'زيارات',
    image: newstwo
  },
  {
    id: 3,
    title: 'النادي الثقافي العربي يطلق برنامج "المبدع الصغير" لعام 2026',
    excerpt: 'في خطوة تهدف لتعزيز المواهب الشابة، أعلن النادي عن إطلاق سلسلة من الورش التخصصية الموجهة للأطفال واليافعين في مجالات الأدب والفنون...',
    date: '12 فبراير 2026',
    category: 'أخبار النادي',
    image: newsthree
  },
  {
    id: 4,
    title: 'وفد ثقافي من مجلس التعاون يزور مقر النادي في الشارقة',
    excerpt: 'استقبل النادي الثقافي العربي وفداً رفيع المستوى لبحث سبل التعاون الثقافي المشترك وتبادل الخبرات في تنظيم المهرجانات الأدبية والأنشطة المجتمعية...',
    date: '10 فبراير 2026',
    category: 'زيارات',
    image: newsfour
  },
  {
    id: 5,
    title: 'النادي الثقافي العربي يطلق برنامج "المبدع الصغير" لعام 2026',
    excerpt: 'في خطوة تهدف لتعزيز المواهب الشابة، أعلن النادي عن إطلاق سلسلة من الورش التخصصية الموجهة للأطفال واليافعين في مجالات الأدب والفنون...',
    date: '12 فبراير 2026',
    category: 'أخبار النادي',
    image: newsfive
  },
  {
    id: 6,
    title: 'وفد ثقافي من مجلس التعاون يزور مقر النادي في الشارقة',
    excerpt: 'استقبل النادي الثقافي العربي وفداً رفيع المستوى لبحث سبل التعاون الثقافي المشترك وتبادل الخبرات في تنظيم المهرجانات الأدبية والأنشطة المجتمعية...',
    date: '10 فبراير 2026',
    category: 'زيارات',
    image: newssix
  }
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <SEO 
        title="الرئيسية" 
        description="الموقع الرسمي للد الثقافي العربي في الشارقة - منارة الثقافة والأدب والإبداع العربي."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={banner} 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Bottom to top shadow */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1 bg-club-purple rounded-full text-sm font-bold mb-6">
              مرحباً بكم في بيت المثقفين العرب
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              النادي الثقافي العربي   <span className="text-club-blue">في الشارقة</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-10 leading-relaxed font-light">
              نرسخ الهوية العربية، ونحتفي بالإبداع الأدبي، ونبني جسوراً من التواصل الثقافي في قلب عاصمة الثقافة.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-club-purple hover:bg-opacity-90 transition-all text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3">
                <span>استكشف فعالياتنا</span>
                <ArrowLeft size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all text-white px-8 py-4 rounded-xl font-bold text-lg">
                تعرف علينا
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-10 left-10 hidden lg:block opacity-70">
          <ImageWithFallback src={smallbanner} alt="Small Banner" className="w-64 h-64 rounded-full object-cover border-8 border-club-blue" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl p-10 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20 border border-border">
          {[
            { label: 'فعالية سنوية', value: '+120', icon: Star, color: 'text-club-purple' },
            { label: 'عضو نشط', value: '+2,500', icon: Users, color: 'text-club-blue' },
            { label: 'إصدار أدبي', value: '+500', icon: BookOpen, color: 'text-club-purple' },
            { label: 'عام من العطاء', value: '45', icon: Star, color: 'text-club-blue' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <stat.icon size={32} className={`${stat.color} mb-2`} />
              <div className="text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback src={aboutbanner}  alt="Sharjah Culture" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-club-blue/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-club-purple/20 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="lg:w-1/2">
            <SectionTitle 
              title="رسالة النادي ورؤيته" 
              subtitle="نسعى لأن نكون المظلة الجامعة للمثقفين والمبدعين العرب، ومنصة انطلاق للمبادرات الثقافية التي تعزز قيم الانتماء والوعي."
            />
            <ul className="space-y-6 mb-10">
              {[
                'دعم المبدعين في مختلف مجالات الأدب والفكر والفنون.',
                'تنظيم الفعاليات التي تعرّف بالثقافة العربية الأصيلة.',
                'مد جسور التواصل مع المؤسسات الثقافية داخل الدولة وخارجها.',
                'الاحتفاء بكنوز اللغة العربية وتعزيز استخدامها.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-club-purple/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-club-purple"></div>
                  </div>
                  <span className="text-lg text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <button className="text-club-purple font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
              <span>اقرأ المزيد عن تاريخنا</span>
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="فعالياتنا القادمة" />
            <button className="hidden md:flex items-center gap-2 text-club-purple font-bold border-b-2 border-club-purple pb-1 mb-12">
              عرض كل الفعاليات
              <ArrowLeft size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="md:hidden mt-10 text-center">
            <button className="bg-club-purple text-white px-8 py-3 rounded-xl font-bold w-full">
              عرض الكل
            </button>
          </div>
        </div>
      </section>

         {/* Sharjah Culture Highlight */}
      <section className="bg-primary text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
           <ImageWithFallback src="https://images.unsplash.com/photo-1764594021930-6930410949b9?q=80&w=1000" alt="Pattern" className="w-[800px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">الشارقة: عاصمة عالمية للثقافة والكتاب</h2>
            <p className="text-xl text-secondary/70 mb-12 leading-relaxed">
              تستمد الشارقة قوتها من رؤية صاحب السمو الشيخ الدكتور سلطان بن محمد القاسمي، الذي جعل من الثقافة ركيزة أساسية للتنمية البشرية، ونحن في النادي الثقافي العربي نفخر بأن نكون جزءاً من هذا المشروع الحضاري الكبير.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h4 className="text-club-blue text-2xl font-bold mb-4">التراث</h4>
                  <p className="text-secondary/60 text-sm">الحفا على الهوية الأصيلة في عالم متسارع.</p>
               </div>
               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h4 className="text-club-blue text-2xl font-bold mb-4">المعرفة</h4>
                  <p className="text-secondary/60 text-sm">مجتمع يقرأ، يبتكر، ويقود المستقبل بالعلم.</p>
               </div>
               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h4 className="text-club-blue text-2xl font-bold mb-4">الحوار</h4>
                  <p className="text-secondary/60 text-sm">مد جسور التعايش والإبداع مع كافة الثقافات.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle title="آخر الأخبار والتقارير" />
          <Link to="/news" className="hidden md:flex items-center gap-2 text-club-purple font-bold border-b-2 border-club-purple pb-1">
            عرض المركز الإعلامي
            <ArrowLeft size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...newsData, ...newsData].slice(0, 6).map((news, idx) => (
            <NewsCard key={`${news.id}-${idx}`} news={news} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
           <Link to="/news" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all w-full">
              زيارة المركز الإعلامي
           </Link>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-club-purple rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">كن جزءاً من حراكنا الثقافي</h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl">
              افتح آفاقاً جديدة لإبداعك، وتعر على نخبة من المثقفين والأدباء العرب. العضوية متاحة الآن.
            </p>
            <button className="bg-white text-club-purple px-10 py-4 rounded-2xl font-black text-lg hover:bg-secondary transition-all">
              قدم طلب العضوية الآن
            </button>
          </div>
          <div className="md:w-1/3 relative z-10">
            <div className="bg-club-blue/20 p-8 rounded-full border border-white/20">
               <BookOpen size={120} className="text-club-blue" />
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-club-blue/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>
    </div>
  );
};
