
import { cn } from '@/lib/utils';
import { Shield, Star, Sparkles, BadgeCheck } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center relative animate-fade-in-up pt-8",
        className
      )}
      style={style}
    >
      {/* Enhanced decorative elements for more visual interest */}
      <div className="absolute -z-10 w-40 h-40 bg-indigo-500/5 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 blur-xl"></div>
      <div className="absolute -z-10 w-32 h-32 bg-indigo-500/10 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
      
      {/* Enhanced floating particles */}
      <div className="cosmic-particle absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-300/70" style={{ animationDelay: '0.3s' }}></div>
      <div className="cosmic-particle absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-indigo-400/60" style={{ animationDelay: '0.7s' }}></div>
      <div className="cosmic-particle absolute bottom-0 left-1/3 w-1 h-1 bg-indigo-200/50" style={{ animationDelay: '1.1s' }}></div>
      
      <div className="relative mb-6 group">
        {/* Main icon circle with improved gradient */}
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-400/30 to-indigo-600/50 flex items-center justify-center mb-2 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500/40 to-white/90 flex items-center justify-center backdrop-blur-sm">
            <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-inner">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Number badge with enhanced gradient */}
        <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
          {number}
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute -z-10 -bottom-1 -right-1 h-4 w-4 rounded-full bg-indigo-300/40 animate-pulse-soft"></div>
        <div className="absolute -z-10 -top-1 -left-1 h-3 w-3 rounded-full bg-indigo-400/40 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-balance px-4">{title}</h3>
      <p className="text-muted-foreground max-w-xs mx-auto px-6 pb-6">{description}</p>
      
      {/* Enhanced decorative sparkle */}
      <div className="absolute top-1/2 right-0 text-indigo-300/40 transform rotate-12 opacity-70">
        <Sparkles className="h-4 w-4" />
      </div>
      <div className="absolute bottom-1/4 left-0 text-indigo-300/30 transform -rotate-12 opacity-60">
        <Star className="h-3 w-3" />
      </div>
    </div>
  );
};

export default ProcessStep;
