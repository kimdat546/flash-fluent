interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={href}
        className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Try it now →
      </a>
    </div>
  );
}