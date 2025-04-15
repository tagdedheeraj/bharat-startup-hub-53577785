
import { motion } from "framer-motion";
import { Code2, Type, Zap, Palette, Library, Database, Route, LineChart, FileCode, Blocks } from "lucide-react";

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const technologies: TechItem[] = [
  {
    name: "React",
    description: "Building interactive user interfaces with modern React and hooks",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "TypeScript",
    description: "Type-safe development for scalable applications",
    icon: <Type className="w-6 h-6" />, // Replaced BracesSquare with Type
    gradient: "from-blue-600/20 to-blue-400/20"
  },
  {
    name: "Vite",
    description: "Lightning-fast build tool for modern web development",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-yellow-500/20"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "shadcn/ui",
    description: "Beautiful and accessible UI components",
    icon: <Library className="w-6 h-6" />,
    gradient: "from-gray-500/20 to-slate-500/20"
  },
  {
    name: "Tanstack Query",
    description: "Powerful data synchronization for React applications",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    name: "React Router",
    description: "Declarative routing for React applications",
    icon: <Route className="w-6 h-6" />,
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    name: "Recharts",
    description: "Composable charting library for React",
    icon: <LineChart className="w-6 h-6" />,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Lucide React",
    description: "Beautiful and consistent icons for React",
    icon: <FileCode className="w-6 h-6" />,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "WordPress",
    description: "Powerful CMS integration capabilities",
    icon: <Blocks className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-indigo-500/20"
  }
];

const TechStackSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage modern technologies to deliver high-quality websites and applications tailored to your business needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className={`bg-gradient-to-br ${tech.gradient} p-1 rounded-xl group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="bg-white p-6 rounded-lg h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
