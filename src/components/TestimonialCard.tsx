
import { Star, Quote, Shield, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "rounded-lg p-8 relative overflow-hidden h-full flex flex-col",
        "bg-black/80 backdrop-blur-md border border-indigo-500/20 shadow-md",
        className
      )}
      style={style}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full transform translate-x-16 -translate-y-16 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full transform -translate-x-12 translate-y-12 blur-xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 h-20 w-1 bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 rounded-full left-2 top-1/2 transform -translate-y-1/2"></div>
      
      {/* Sparkle decorations */}
      <div className="absolute bottom-4 right-8 text-indigo-500/40 transform rotate-12 scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="h-4 w-4" />
      </div>
      
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition-all duration-500 transform rotate-180">
        <Quote className="h-12 w-12" />
      </div>
      
      {/* Star rating - updated with gold color */}
      <div className="flex items-center mb-4 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5 mr-1 transition-all duration-300 hover:scale-110",
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"
            )}
          />
        ))}
      </div>
      
      <p className="mb-6 text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300 flex-grow">{content}</p>
      
      <div className="flex items-center relative z-10 mt-auto pt-4 border-t border-indigo-500/10">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/30 to-indigo-700/50 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-indigo-400/80">{role}</p>
        </div>
      </div>
      
      {/* Shield badge for trust */}
      <div className="absolute bottom-2 right-2 text-indigo-400/30 transform scale-75">
        <Shield className="h-4 w-4" />
      </div>
    </div>
  );
};

export default TestimonialCard;
