import React, { useState, useEffect, useRef } from "react";
import { FlipWords } from "../../components/ui/flip-words";

// Custom hook for dynamic text sizing
const useDynamicTextSize = (content: string, maxWidth: number, initialFontSize: number = 64): { fontSize: number; textRef: React.RefObject<HTMLDivElement> } => {
  const [fontSize, setFontSize] = useState(initialFontSize);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeText = () => {
      if (!textRef.current) return;

      let currentSize = initialFontSize;
      textRef.current.style.fontSize = `${currentSize}px`;

      while (textRef.current.scrollWidth > maxWidth && currentSize > 12) {
        currentSize--;
        textRef.current.style.fontSize = `${currentSize}px`;
      }

      setFontSize(currentSize);
    };

    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, [content, maxWidth, initialFontSize]);

  return { fontSize, textRef };
};

export function FlipWordsDemo() {
  const words = ["SOFTWARE ENGINEER", "FULLSTACK WEB DEVELOPER", "YOUR NEXT INVESTMENT"];
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMaxWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const { fontSize, textRef } = useDynamicTextSize(words.join(' '), maxWidth);

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 text-center" ref={containerRef} >
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 text-center mb-2">
        I am a
      </div>
      <div className="w-full overflow-hidden">
        <FlipWords 
          words={words} 
          className="font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap"/>
      </div>
    </div>
  );
}