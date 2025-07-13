import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  const features = [
    {
      title: "Flashcards",
      description: "Interactive vocabulary cards with spaced repetition to improve retention",
      icon: "🃏",
      href: "/tools/flashcards"
    },
    {
      title: "Pronunciation",
      description: "Practice speaking with audio feedback and phonetic guidance",
      icon: "🎤",
      href: "/tools/pronunciation"
    },
    {
      title: "Quiz Mode",
      description: "Test your knowledge with multiple choice and fill-in-the-blank exercises",
      icon: "📝",
      href: "/tools/quiz"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and achievements",
      icon: "📊",
      href: "/tools/progress"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Learning Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of interactive tools designed to accelerate your English learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose EnglishLab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Adaptive algorithms adjust to your learning pace and style</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">Learn anywhere with our responsive design and offline support</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Detailed analytics help you stay motivated and focused</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
