
import { useEffect, useRef } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from '../types';

interface CodeEditorProps {
  language: Language;
  code: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const CodeEditor = ({ language, code, onChange, onClear }: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mx-4 mb-4">
      <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center justify-between">
        <span className="text-white text-sm font-medium">
          {language === 'html' ? 'HTML Editor' : 'C Code Editor'}
        </span>
        <div className="flex items-center space-x-3">
          <Button
            onClick={onClear}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-red-600 hover:text-white p-1 h-7 w-7"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleChange}
        className="w-full min-h-[200px] p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg border-none outline-none resize-none overflow-hidden"
        placeholder={language === 'html' ? 'HTML কোড এখানে লিখুন...' : 'C কোড এখানে লিখুন...'}
        spellCheck={false}
      />
    </div>
  );
};

export default CodeEditor;
