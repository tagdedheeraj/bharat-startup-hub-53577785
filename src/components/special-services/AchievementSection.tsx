
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const achievementData = [
  { name: 'Website development', value: 22.2, color: '#FF6B6B' },
  { name: 'Digital marketing', value: 13.3, color: '#4ECDC4' },
  { name: 'ERP', value: 16.7, color: '#45B7D1' },
  { name: 'CRM', value: 11.1, color: '#96CEB4' },
  { name: 'Logo & Trade mark', value: 7.8, color: '#FFEEAD' },
  { name: 'Mobile app', value: 28.9, color: '#D4A5A5' }
];

const AchievementSection = () => {
  return (
    <motion.div 
      className="mt-20 p-8 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Achievement Projection</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-50 p-6 rounded-xl">
            <p className="text-gray-600">Total Income</p>
            <p className="text-3xl font-bold text-brand-600">₹1.7 Cr</p>
          </div>
          <div className="bg-brand-50 p-6 rounded-xl">
            <p className="text-gray-600">Project Achievement</p>
            <p className="text-3xl font-bold text-brand-600">78%</p>
          </div>
          <div className="bg-brand-50 p-6 rounded-xl">
            <p className="text-gray-600">Year</p>
            <p className="text-3xl font-bold text-brand-600">2024</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={achievementData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {achievementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {achievementData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementSection;
