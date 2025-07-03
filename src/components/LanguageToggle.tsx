
import { Button } from '@/components/ui/button';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1 mx-4 my-3">
      <Button
        variant={language === 'html' ? 'default' : 'ghost'}
        className={`flex-1 rounded-md transition-all ${
          language === 'html'
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
            : 'text-gray-600 hover:bg-white'
        }`}
        onClick={() => onLanguageChange('html')}
      >
        HTML
      </Button>
      <Button
        variant={language === 'c' ? 'default' : 'ghost'}
        className={`flex-1 rounded-md transition-all ${
          language === 'c'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
            : 'text-gray-600 hover:bg-white'
        }`}
        onClick={() => onLanguageChange('c')}
      >
        C Programming
      </Button>
    </div>
  );
};

export default LanguageToggle;
