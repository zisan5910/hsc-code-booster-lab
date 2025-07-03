
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
    <div className="px-4 mb-4">
      <Select onValueChange={(value) => {
        const selectedCode = cheatCodes.find(code => code.id === value);
        if (selectedCode) {
          onSelectCheatCode(selectedCode);
        }
      }}>
        <SelectTrigger className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 transition-colors">
          <SelectValue placeholder={`${language === 'html' ? 'HTML' : 'C'} কোড টেমপ্লেট নির্বাচন করুন`} />
        </SelectTrigger>
        <SelectContent className="max-h-60 bg-white">
          {cheatCodes.map((code) => (
            <SelectItem key={code.id} value={code.id} className="hover:bg-gray-100">
              <div className="flex flex-col items-start">
                <span className="font-medium">{code.titleBangla}</span>
                <span className="text-xs text-gray-500">{code.title}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CheatCodeSelector;
