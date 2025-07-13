import Link from 'next/link';

export default function ToolsPage() {
  const tools = [
    {
      title: "Flashcards",
      description: "Interactive vocabulary cards with spaced repetition algorithm",
      icon: "🃏",
      href: "/tools/flashcards",
      color: "bg-blue-500",
      features: ["Spaced repetition", "Audio pronunciation", "Progress tracking"]
    },
    {
      title: "Quiz Mode",
      description: "Test your knowledge with various question types",
      icon: "📝",
      href: "/tools/quiz",
      color: "bg-green-500",
      features: ["Multiple choice", "Fill in blanks", "True/False"]
    },
    {
      title: "Pronunciation",
      description: "Practice speaking with AI-powered feedback",
      icon: "🎤",
      href: "/tools/pronunciation",
      color: "bg-purple-500",
      features: ["Voice recording", "Phonetic guides", "Real-time feedback"]
    },
    {
      title: "Writing Practice",
      description: "Improve your writing skills with guided exercises",
      icon: "✍️",
      href: "/tools/writing",
      color: "bg-orange-500",
      features: ["Grammar check", "Style suggestions", "Progress reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of interactive tools designed to accelerate your English learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.href}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`${tool.color} p-3 rounded-lg text-white text-2xl`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {tool.description}
                    </p>
                    <ul className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Start Learning →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Learning Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">0</div>
                <div className="text-gray-600">Words Learned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-gray-600">Study Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">0</div>
                <div className="text-gray-600">Minutes Studied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}