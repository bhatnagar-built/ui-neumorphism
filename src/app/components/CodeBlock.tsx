import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import './CodeBlock.css';

export interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="nm-codeblock">
      <div className="nm-codeblock-header">
        <span className="nm-codeblock-lang">{language}</span>
        <button className="nm-codeblock-copy" onClick={handleCopy} aria-label="Copy code">
          {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="nm-codeblock-content">
        <code>{code}</code>
      </pre>
    </div>
  );
};
