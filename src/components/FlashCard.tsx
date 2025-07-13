'use client';

import { useState } from 'react';

interface VocabularyWord {
  id: string;
  word: string;
  pronunciation: string;
  definition: string;
  example: string;
  difficulty: string;
  category: string;
  partOfSpeech: string;
}

interface FlashCardProps {
  word: VocabularyWord;
  onNext: () => void;
  onPrevious: () => void;
  onDifficultyRate: (difficulty: 'easy' | 'medium' | 'hard') => void;
  currentIndex: number;
  totalCards: number;
}

export default function FlashCard({ 
  word, 
  onNext, 
  onPrevious, 
  onDifficultyRate, 
  currentIndex, 
  totalCards 
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    onPrevious();
  };

  const handleDifficultyRate = (difficulty: 'easy' | 'medium' | 'hard') => {
    onDifficultyRate(difficulty);
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 text-center text-gray-600">
        Card {currentIndex + 1} of {totalCards}
      </div>
      
      <div className="relative h-80 w-full perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-600 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-center items-center border-2 border-blue-100">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {word.word}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {word.pronunciation}
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {word.partOfSpeech}
                </div>
                <p className="text-gray-500 mt-6">Click to see definition</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="bg-green-50 rounded-xl shadow-lg p-8 h-full flex flex-col justify-center border-2 border-green-100">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Definition
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {word.definition}
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-600 italic">
                    &ldquo;{word.example}&rdquo;
                  </p>
                </div>
                <p className="text-gray-500 mt-6">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        
        <div className="flex space-x-2">
          <button
            onClick={() => handleDifficultyRate('easy')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Easy
          </button>
          <button
            onClick={() => handleDifficultyRate('medium')}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Medium
          </button>
          <button
            onClick={() => handleDifficultyRate('hard')}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Hard
          </button>
        </div>
        
        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}