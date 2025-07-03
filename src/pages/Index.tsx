
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import LanguageToggle from '../components/LanguageToggle';
import CheatCodeSelector from '../components/CheatCodeSelector';
import CodeEditor from '../components/CodeEditor';
import Preview from '../components/Preview';
import { Language, CheatCode } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Index = () => {
  const [language, setLanguage] = useLocalStorage<Language>('hsc-code-lab-language', 'html');
  const [code, setCode] = useLocalStorage('hsc-code-lab-code', '');
  const [currentCheatCode, setCurrentCheatCode] = useState<CheatCode | null>(null);

  // Service Worker Registration for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch((error) => console.error('Service Worker registration failed:', error));
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setCode(''); // Clear code when switching languages
    setCurrentCheatCode(null);
  };

  const handleSelectCheatCode = (cheatCode: CheatCode) => {
    setCurrentCheatCode(cheatCode);
    setCode(cheatCode.code);
  };

  const handleClear = () => {
    setCode('');
    setCurrentCheatCode(null);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 backdrop-blur-sm">
      {/* Mobile-first design with app-like experience */}
      <div className="fixed inset-0 bg-white/60 backdrop-blur-md -z-10"></div>
      
      <Header onClear={handleClear} />
      
      <div className="max-w-md mx-auto px-2 sm:max-w-2xl lg:max-w-4xl">
        <div className="space-y-3 pb-20">
          <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
          
          <CheatCodeSelector 
            language={language} 
            onSelectCheatCode={handleSelectCheatCode} 
          />
          
          <CodeEditor 
            language={language} 
            code={code} 
            onChange={handleCodeChange}
            onClear={handleClear}
          />
          
          <Preview 
            language={language} 
            code={code} 
            algorithm={currentCheatCode?.algorithm}
            flowchart={currentCheatCode?.flowchart}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
