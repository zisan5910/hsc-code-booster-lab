
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-gradient-to-b from-purple-50 to-white">
            <SheetHeader>
              <div className="flex flex-col items-center gap-4 py-6">
                <img 
                  src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
                  alt="Theta Code Logo" 
                  className="w-20 h-20 object-contain"
                />
                <SheetTitle className="text-purple-800 text-2xl font-bold">Theta Code</SheetTitle>
                
                {/* Developer Portfolio Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-100"
                  onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
                >
                  <Code className="h-4 w-4" />
                  ডেভেলপার পোর্টফোলিও
                </Button>
              </div>
            </SheetHeader>
            
            <div className="px-4 space-y-6">
              {/* HTML Section */}
              <div className="rounded-lg bg-gradient-to-r from-orange-100 to-red-100 p-4">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                  🌐 HTML শেখার সুবিধা
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                    রিয়েল-টাইম প্রিভিউ দেখুন
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                    বেসিক থেকে এডভান্স HTML ট্যাগ
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                    CSS স্টাইলিং সহ ওয়েব পেজ তৈরি
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                    ইন্টারঅ্যাক্টিভ ফর্ম ও এলিমেন্ট
                  </li>
                </ul>
              </div>

              {/* C Programming Section */}
              <div className="rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  💻 C প্রোগ্রামিং সুবিধা
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                    সিমুলেটেড আউটপুট দেখুন
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                    অ্যালগরিদম ব্যাখ্যা পড়ুন
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                    ফ্লোচার্ট ভিজুয়্যালাইজেশন
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                    HSC সিলেবাস অনুযায়ী কোড
                  </li>
                </ul>
              </div>

              {/* App Info */}
              <div className="rounded-lg bg-gradient-to-r from-purple-100 to-violet-100 p-4 text-center">
                <p className="text-sm text-purple-700 font-medium">
                  📱 মোবাইল ফ্রেন্ডলি • 🔄 অফলাইন সাপোর্ট • 🎯 HSC ফোকাসড
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* App Name with Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
            alt="Theta Code Logo" 
            className="w-6 h-6 object-contain"
          />
          <h1 className="text-lg font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
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
