import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DeveloperConfig {
  name: string;
  role: string;
  stack: string[];
  databases: string[];
  realTime: string;
  status: string;
}

const developerConfig: DeveloperConfig = {
  name: "Dhananjayan",
  role: "Full-Stack Developer",
  stack: ["React", "Node.js", "Express"],
  databases: ["PostgreSQL", "MongoDB"],
  realTime: "Socket.io",
  status: "Available for Hire"
};

const snippetCode: string = `// developer.config.ts
interface Developer {
  name: string;
  role: string;
  stack: string[];
  databases: string[];
  realTime: string;
  status: string;
}

const developer: Developer = ${JSON.stringify(developerConfig, null, 4)};`;

export const CodeSnippetCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl font-mono text-sm">
      {/* Mini Window Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <span className="text-xs text-slate-400 select-none">developer.config.ts</span>
      </div>

      {/* Code Area */}
      <div className="p-4 text-xs leading-relaxed">
        <SyntaxHighlighter
          language="typescript"
          style={tomorrow}
          customStyle={{ margin: 0, padding: 0, backgroundColor: 'transparent' }}
          codeTagProps={{ style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }}
        >
          {snippetCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};