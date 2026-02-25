'use client'; 
import { useState } from 'react';

export default function Dropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/20 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className={`text-[24px] font-semibold hover:text-[#830033] transition-colors ${isOpen ? 'text-[#830033]' : 'text-black'}`}>
          {question}
        </span>
        {/* Simple ⌄ (arrow) Icon */}
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#830033]' : ''}`}>
          ⌄
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-[18px] text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}