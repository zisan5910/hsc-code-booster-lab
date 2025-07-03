
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheatCode, Language } from '../types';
import { htmlCheatCodes, cCheatCodes } from '../data/cheatCodes';

interface CheatCodeSelectorProps {
  language: Language;
  onSelectCheatCode: (code: CheatCode) => void;
}

const CheatCodeSelector = ({ language, onSelectCheatCode }: CheatCodeSelectorProps) => {
  const cheatCodes = language === 'html' ? htmlCheatCodes : cCheatCodes;
  
  return (
    <div className="px-4 mb-6">
      <div className="glass-effect rounded-2xl p-1 border border-white/10">
        <Select onValueChange={(value) => {
          const selectedCode = cheatCodes.find(code => code.id === value);
          if (selectedCode) {
            onSelectCheatCode(selectedCode);
          }
        }}>
          <SelectTrigger className="w-full bg-transparent border-none text-white hover:bg-white/5 transition-colors mobile-touch rounded-xl h-14">
            <SelectValue 
              placeholder={`${language === 'html' ? '🌐 HTML' : '💻 C'} কোড টেমপ্লেট নির্বাচন করুন`}
              className="text-gray-300"
            />
          </SelectTrigger>
          <SelectContent className="max-h-60 glass-effect border-white/20 text-white">
            {cheatCodes.map((code) => (
              <SelectItem 
                key={code.id} 
                value={code.id} 
                className="hover:bg-white/10 mobile-touch rounded-xl my-1 cursor-pointer"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-semibold text-white">{code.titleBangla}</span>
                  <span className="text-xs text-gray-400">{code.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CheatCodeSelector;
