
import { Button } from '@/components/ui/button';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex glass-effect rounded-2xl p-2 mx-4 my-6 border border-white/10">
      <Button
        variant={language === 'html' ? 'default' : 'ghost'}
        className={`flex-1 rounded-xl transition-all duration-300 mobile-touch font-semibold ${
          language === 'html'
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg border-orange-400/50'
            : 'text-gray-300 hover:bg-white/10 hover:text-white'
        }`}
        onClick={() => onLanguageChange('html')}
      >
        🌐 HTML
      </Button>
      <Button
        variant={language === 'c' ? 'default' : 'ghost'}
        className={`flex-1 rounded-xl transition-all duration-300 mobile-touch font-semibold ${
          language === 'c'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-blue-400/50'
            : 'text-gray-300 hover:bg-white/10 hover:text-white'
        }`}
        onClick={() => onLanguageChange('c')}
      >
        💻 C Programming
      </Button>
    </div>
  );
};

export default LanguageToggle;
