
import { Progress } from "@/components/ui/progress";

interface StatProps {
  label: string;
  percentage: number;
}

const stats: StatProps[] = [
  { label: "Website development", percentage: 22.2 },
  { label: "Digital marketing", percentage: 13.3 },
  { label: "ERP", percentage: 16.7 },
  { label: "CRM", percentage: 11.1 },
  { label: "Logo & Trade mark", percentage: 7.8 },
  { label: "Mobile app", percentage: 28.9 },
];

export default function AchievementStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-india-saffron">1.7</div>
          <div className="text-gray-600 mt-2">Total Income (Crore)</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-india-green">78</div>
          <div className="text-gray-600 mt-2">Project Achievement</div>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-india-saffron to-india-green bg-clip-text text-transparent">
            2024
          </div>
          <div className="text-gray-600 mt-2">Year</div>
        </div>
      </div>
      
      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Achievement Projection</h3>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">{stat.label}</span>
                <span className="text-india-saffron font-medium">{stat.percentage}%</span>
              </div>
              <Progress value={stat.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
