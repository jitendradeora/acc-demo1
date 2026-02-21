import React from 'react';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Book, Award, Globe, Music } from 'lucide-react';

export const SharjahCulture = () => {
  return (
    <div className="pt-25 pb-25">
      <SEO title="ثقافة الشارقة" description="اكتشف الهوية الثقافية لشارقة العلم والمعرفة." />
      
     

       <div className="bg-primary text-white py-10 mb-10 relative overflow-hidden text-center">
        <div className="container max-w-2xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4 text-white">  الشارقة..  </h1>
          <p className="text-x2 max-w-2xl mx-auto leading-relaxed">
            بين عراقة التراث وحداثة الفكر
          </p>
        </div>        
      </div>



      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-black mb-8 border-r-8 border-club-purple pr-6">المشروع الثقافي للشارقة</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-loose space-y-6">
              <p>
                تمثل إمارة الشارقة نموذجاً فريداً في العناية بالثقافة، حيث استطاعت بتوجيهات صاحب السمو الشيخ الدكتور سلطان بن محمد القاسمي، عضو المجلس الأعلى حاكم الشارقة، أن تبني مشروعاً ثقافياً متكاملاً يجمع بين الحفاظ على الجذور العربية والإسلامية الأصيلة والانفتاح الواعي على المنجز الإنساني العالمي.
              </p>
              <p>
                لقد نالت الشارقة ألقاباً عالمية مستحقة، منها "عاصمة الثقافة العربية" عام 1998، و"عاصمة الثقافة الإسلامية" عام 2014، و"العاصمة العالمية للكتاب" عام 2019، مما يعكس المكانة المرموقة التي تبوأتها الإمارة كمنارة للعلم والمعرفة.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-secondary/20 p-8 rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-club-purple rounded-2xl flex items-center justify-center text-white mb-6">
                    <Book size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">مدينة الكتاب</h3>
                  <p className="text-sm">تستضيف الشارقة أحد أكبر معارض الكتب في العالم، وتوفر بنية تحتية متميزة للناشرين والقراء.</p>
                </div>
                <div className="bg-secondary/20 p-8 rounded-3xl border border-border">
                  <div className="w-12 h-12 bg-club-blue rounded-2xl flex items-center justify-center text-white mb-6">
                    <Music size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">الفنون والتراث</h3>
                  <p className="text-sm">تضم الإمارة شبكة واسعة من المتاحف والمراكز الفنية التي توثق التراث وتحتفي بالفن المعاصر.</p>
                </div>
              </div>

              <p>
                إن النادي الثقافي العربي في الشارقة يفخر بأنه أحد الروافد الأساسية لهذا المشروع الكبير، حيث يعمل جنباً إلى جنب مع المؤسسات الثقافية الأخرى لتعزيز الهوية ونشر قيم الإبداع.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-xl">
              <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">أهم المعالم الثقافية</h3>
              <ul className="space-y-6">
                {[
                  { name: 'مجمع اللغة العربية', desc: 'صرح مخصص لحماية لغة الضاد.' },
                  { name: 'هيئة الشارقة للكتاب', desc: 'المنظمة لمعرض الشارقة الدولي للكتاب.' },
                  { name: 'دارة الدكتور سلطان القاسمي', desc: 'مركز للدراسات والوثائق التاريخية.' },
                  { name: 'بينالي الشارقة للفنون', desc: 'منصة عالمية للفن المعاصر.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-club-purple mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-primary">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
