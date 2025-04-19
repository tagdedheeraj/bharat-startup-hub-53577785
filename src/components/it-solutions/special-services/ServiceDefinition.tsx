
import { ReactNode } from 'react';

interface ServiceDefinitionProps {
  title: string;
  subtitle?: string;
  definition: string;
  icon?: ReactNode;
}

export default function ServiceDefinition({ title, subtitle, definition, icon }: ServiceDefinitionProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        {icon && <div className="text-india-saffron">{icon}</div>}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-india-saffron to-india-green bg-clip-text text-transparent">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-600 mt-1">{subtitle}</p>
          )}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {definition}
          </p>
        </div>
      </div>
    </div>
  );
}
