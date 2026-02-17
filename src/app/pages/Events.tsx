import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';
import { EventCard } from '../components/Cards';
import { Search, Filter } from 'lucide-react';

const categories = ['الكل', 'أدب وشعر', 'ورش فنية', 'ندوات', 'مسرح', 'ثقافة الطفل'];

const events = [
  { id: 1, title: 'أمسية شعرية: نبض الحروف في حب الشارقة', date: '25 فبراير 2026', location: 'قاعة المحاضرات الكبرى', category: 'أدب وشعر', image: 'src/assets/event-1-u.jpg' },
  { id: 2, title: 'ورشة عمل: فن الخط العربي والزخرفة الإسلامية', date: '2 مارس 2026', location: 'مرسم النادي', category: 'ورش فنية', image: 'src/assets/event-2-u.jpg' },
  { id: 3, title: 'ندوة فكرية: الهوية الثقافية العربية في عصر الذكاء الاصطناعي', date: '10 مارس 2026', location: 'المكتبة الرقمية', category: 'ندوات', image: 'src/assets/event-3-u.jpg' },
  { id: 4, title: 'ملتقى القصة القصيرة: أصوات إبداعية جديدة', date: '15 مارس 2026', location: 'قاعة الاجتماعات', category: 'أدب وشعر', image: 'src/assets/event-3-u.jpg' },
  { id: 5, title: 'مسرحية "أحلام المدينة": عرض خاص للأعضاء', date: '20 مارس 2026', location: 'مسرح النادي', category: 'مسرح', image: 'src/assets/event-2-u.jpg' },
  { id: 6, title: 'يوم القراءة: مسابقات وجوائز للأطفال', date: '28 مارس 2026', location: 'حديقة النادي', category: 'ثقافة الطفل', image: 'src/assets/event-1-u.jpg' },
];

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'الكل' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-30 pb-30">
      <SEO title="الفعاليات وورش العمل" description="استكشف الفعاليات والأنشطة الثقافية القادمة في النادي الثقافي العربي." />
      
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 border-b border-border pb-8">
          <div>
            <h1 className="text-4xl font-black mb-4">الفعاليات والورش</h1>
            <p className="text-muted-foreground text-lg">شاركنا شغف المعرفة في رحاب النادي.</p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-club-purple" size={18} />
              <input 
                type="text" 
                placeholder="ابحث عن فعالية..." 
                className="pr-10 pl-4 py-2 bg-white border border-border rounded-xl focus:outline-none focus:border-club-purple w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-6 mb-10 no-scrollbar gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-club-purple text-white shadow-lg' 
                : 'bg-white text-muted-foreground border border-border hover:border-club-purple'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/20 rounded-3xl border border-dashed border-border">
            <Filter size={48} className="mx-auto mb-4 text-muted-foreground/30" />
            <p className="text-xl text-muted-foreground">عذراً، لم نجد نتائج تطابق بحثك.</p>
            <button 
              onClick={() => {setActiveCategory('الكل'); setSearchQuery('');}}
              className="mt-4 text-club-purple font-bold hover:underline"
            >
              إعادة تعيين المرشحات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
