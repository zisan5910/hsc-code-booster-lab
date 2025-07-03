
import { Menu } from 'lucide-react';
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
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.postimg.cc/jdXvXFLG/HSC-20250703-175009-0000.png" 
                  alt="Theta Code Logo" 
                  className="w-8 h-8 object-contain"
                />
                <SheetTitle className="text-purple-800 text-xl font-bold">Theta Code</SheetTitle>
              </div>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-gradient-to-r from-purple-100 to-teal-100 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  HSC শিক্ষার্থীদের জন্য একটি সম্পূর্ণ কোডিং ল্যাব। HTML এবং C প্রোগ্রামিং শেখার জন্য বিশেষভাবে তৈরি।
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-700 mb-3">বৈশিষ্ট্যসমূহ:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    রিয়েল-টাইম কোড প্রিভিউ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    বাংলা অ্যালগরিদম ব্যাখ্যা
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    ফ্লোচার্ট ভিজুয়্যালাইজেশন
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    অফলাইন সাপোর্ট (PWA)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    NCTB সিলেবাস ভিত্তিক
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-gradient-to-r from-teal-100 to-blue-100 p-4 text-center">
                <p className="text-sm text-gray-700 mb-3">
                  শিক্ষার্থীদের কোডিং দক্ষতা বৃদ্ধির জন্য তৈরি 💻
                </p>
                <a 
                  href="https://ridoan-zisan.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  ডেভেলপার পোর্টফোলিও
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* App Name with Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/jdXvXFLG/HSC-20250703-175009-0000.png" 
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
