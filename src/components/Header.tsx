
import { Menu, Code } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onClear: () => void;
}

const Header = ({ onClear }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 gradient-primary text-white shadow-2xl border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 mobile-touch rounded-xl">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 glass-effect text-white border-white/20">
            <SheetHeader>
              <div className="flex flex-col items-center gap-6 py-8">
                <img 
                  src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
                  alt="Theta Code Logo" 
                  className="w-24 h-24 object-contain rounded-2xl shadow-2xl"
                />
                <SheetTitle className="text-white text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Theta Code
                </SheetTitle>
                
                {/* Developer Portfolio Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-3 border-white/30 text-white hover:bg-white/10 mobile-touch rounded-xl px-6 py-3"
                  onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
                >
                  <Code className="h-5 w-5" />
                  ডেভেলপার পোর্টফোলিও
                </Button>
              </div>
            </SheetHeader>
            
            <div className="px-4 space-y-8">
              {/* HTML Section */}
              <div className="rounded-2xl glass-effect p-6 border border-orange-400/30">
                <h4 className="font-bold text-orange-300 mb-4 flex items-center gap-3 text-lg">
                  🌐 HTML শেখার সুবিধা
                </h4>
                <ul className="text-sm text-gray-200 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    রিয়েল-টাইম প্রিভিউ দেখুন
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    বেসিক থেকে এডভান্স HTML ট্যাগ
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    CSS স্টাইলিং সহ ওয়েব পেজ তৈরি
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    ইন্টারঅ্যাক্টিভ ফর্ম ও এলিমেন্ট
                  </li>
                </ul>
              </div>

              {/* C Programming Section */}
              <div className="rounded-2xl glass-effect p-6 border border-blue-400/30">
                <h4 className="font-bold text-blue-300 mb-4 flex items-center gap-3 text-lg">
                  💻 C প্রোগ্রামিং সুবিধা
                </h4>
                <ul className="text-sm text-gray-200 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    সিমুলেটেড আউটপুট দেখুন
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    অ্যালগরিদম ব্যাখ্যা পড়ুন
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    ফ্লোচার্ট ভিজুয়্যালাইজেশন
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    HSC সিলেবাস অনুযায়ী কোড
                  </li>
                </ul>
              </div>

              {/* App Info */}
              <div className="rounded-2xl glass-effect p-6 text-center border border-purple-400/30">
                <p className="text-sm text-purple-200 font-medium leading-relaxed">
                  📱 মোবাইল ফ্রেন্ডলি • 🔄 অফলাইন সাপোর্ট • 🎯 HSC ফোকাসড
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* App Name with Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
            alt="Theta Code Logo" 
            className="w-8 h-8 object-contain rounded-lg shadow-lg"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Theta Code
          </h1>
        </div>

        {/* Empty space for balance */}
        <div className="w-10"></div>
      </div>
    </header>
  );
};

export default Header;
