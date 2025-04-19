
interface IndustryListProps {
  industries: string[];
}

export default function IndustryList({ industries }: IndustryListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {industries.map((industry, index) => (
        <div 
          key={index}
          className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-700 border border-gray-100
            hover:bg-gradient-to-r hover:from-india-saffron/10 hover:to-india-green/10 transition-colors"
        >
          {industry}
        </div>
      ))}
    </div>
  );
}
