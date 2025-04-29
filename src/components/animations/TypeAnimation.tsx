import React, { useState, useEffect } from 'react';

interface TypeAnimationProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export const TypeAnimation: React.FC<TypeAnimationProps> = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentString = strings[currentIndex];
    
    if (isTyping) {
      if (currentText.length < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping, strings, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="inline-block">
      <span>{currentText}</span>
      <span className="animate-blink text-indigo-600">|</span>
    </div>
  );
};