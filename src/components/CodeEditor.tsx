
import { useEffect, useRef, useState } from 'react';
import { Trash2, Copy, Play, Palette } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(textareaRef.current.scrollHeight, 250) + 'px';
    }
  }, [code]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const syntaxHighlight = (text: string) => {
    if (language === 'html') {
      return text
        .replace(/(&lt;[^&gt;]*&gt;)/g, '<span class="syntax-tag">$1</span>')
        .replace(/(class|id|src|href|style)=/g, '<span class="syntax-attribute">$1</span>=')
        .replace(/(".*?")/g, '<span class="syntax-string">$1</span>');
    } else {
      return text
        .replace(/(#include|int|float|char|void|if|else|for|while|return|printf|scanf)/g, '<span class="syntax-keyword">$1</span>')
        .replace(/(".*?")/g, '<span class="syntax-string">$1</span>')
        .replace(/(\d+\.?\d*)/g, '<span class="syntax-number">$1</span>')
        .replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>')
        .replace(/(printf|scanf|main)/g, '<span class="syntax-function">$1</span>');
    }
  };

  return (
    <div className="mx-4 mb-6">
      <div className="glass-effect rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Editor Header */}
        <div className="gradient-primary px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-white font-semibold text-lg">
              {language === 'html' ? '🌐 HTML Editor' : '💻 C Code Editor'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 mobile-touch rounded-xl"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button
              onClick={onClear}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-red-600/80 mobile-touch rounded-xl"
            >
              <Trash2 className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>

        {/* Code Input Area */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={handleChange}
            className="w-full min-h-[300px] p-6 code-editor bg-gray-900/90 text-green-300 font-mono text-base rounded-none border-none outline-none resize-none leading-relaxed"
            placeholder={language === 'html' ? 
              '<!-- HTML কোড এখানে লিখুন -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n</body>\n</html>' : 
              '// C কোড এখানে লিখুন\n#include <stdio.h>\n\nint main() {\n    printf("Hello World!");\n    return 0;\n}'
            }
            spellCheck={false}
          />
          
          {/* Syntax Highlighting Overlay */}
          {code && (
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none p-6 code-editor font-mono text-base leading-relaxed opacity-0">
              <div dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }} />
            </div>
          )}
        </div>

        {/* Editor Footer */}
        <div className="gradient-secondary px-6 py-3 flex items-center justify-between text-sm text-gray-300 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-purple-400" />
              Syntax Highlighting
            </span>
            <span>Lines: {code.split('\n').length}</span>
          </div>
          <span className="text-xs text-gray-400">
            {language === 'html' ? 'HTML/CSS/JS' : 'C Programming'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
