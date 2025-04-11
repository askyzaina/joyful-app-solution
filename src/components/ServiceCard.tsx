
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface ServiceFeature {
  text: string;
  included: boolean;
}

interface ServiceCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  features: ServiceFeature[];
  popular?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onSelect: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  price,
  description,
  features,
  popular = false,
  className,
  style,
  onSelect
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative rounded-xl overflow-hidden border transition-all",
        popular 
          ? "border-amber-500/70 dark:border-amber-500/50 shadow-lg" 
          : "border-border shadow",
        className
      )}
      style={style}
    >
      {popular && (
        <div className="absolute top-0 right-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 
                         border-t-[80px] border-t-amber-500 
                         border-l-[80px] border-l-transparent">
          </div>
          <div className="absolute top-[22px] right-[-10px] transform rotate-45">
            <span className="text-white text-sm font-bold">POPULER</span>
          </div>
        </div>
      )}
      
      <div className={cn(
        "p-6", 
        popular && "bg-amber-50/30 dark:bg-amber-950/10"
      )}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 mb-3">
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <Button 
          className={cn(
            "w-full mb-6", 
            popular 
              ? "border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400" 
              : "border-indigo-500/50 bg-transparent hover:bg-indigo-500/10 text-foreground"
          )}
          variant={popular ? "outline" : "outline"}
          onClick={() => onSelect && onSelect(id)}
        >
          Pilih Paket
        </Button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={cn(
                "h-5 w-5 rounded-full flex items-center justify-center mr-3 mt-0.5",
                feature.included 
                  ? (popular 
                      ? "bg-amber-500/10 dark:bg-amber-500/20" 
                      : "bg-primary/10")
                  : "bg-gray-100 dark:bg-gray-800"
              )}>
                {feature.included ? (
                  <Check className={cn(
                    "h-3 w-3", 
                    popular 
                      ? "text-amber-600 dark:text-amber-400" 
                      : "text-primary"
                  )} />
                ) : (
                  <X className="h-3 w-3 text-muted-foreground" />
                )}
              </div>
              <span className={cn(
                "text-sm",
                feature.included 
                  ? "text-foreground" 
                  : "text-muted-foreground line-through"
              )}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
