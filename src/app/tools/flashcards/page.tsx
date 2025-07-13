'use client';

import { useState, useEffect } from 'react';
import FlashCard from '@/components/FlashCard';
import vocabularyData from '@/data/vocabulary.json';

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

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [sessionStats, setSessionStats] = useState({
    studied: 0,
    easy: 0,
    medium: 0,
    hard: 0
  });

  useEffect(() => {
    setWords(vocabularyData as VocabularyWord[]);
  }, []);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDifficultyRate = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSessionStats(prev => ({
      ...prev,
      studied: prev.studied + 1,
      [difficulty]: prev[difficulty] + 1
    }));
  };

  const handleShuffle = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSessionStats({
      studied: 0,
      easy: 0,
      medium: 0,
      hard: 0
    });
  };

  if (words.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading flashcards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vocabulary Flashcards
          </h1>
          <p className="text-lg text-gray-600">
            Study vocabulary words with interactive flashcards
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{sessionStats.studied}</div>
                <div className="text-sm text-gray-600">Studied</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{sessionStats.easy}</div>
                <div className="text-sm text-gray-600">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{sessionStats.medium}</div>
                <div className="text-sm text-gray-600">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{sessionStats.hard}</div>
                <div className="text-sm text-gray-600">Hard</div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={handleShuffle}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Shuffle
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <FlashCard
          word={words[currentIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onDifficultyRate={handleDifficultyRate}
          currentIndex={currentIndex}
          totalCards={words.length}
        />

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Study Tips</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Click on the card to flip between word and definition
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Rate each word&apos;s difficulty to help track your progress
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Use the shuffle button to randomize the order of cards
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Try to use each word in your own sentence for better retention
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}