
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
        popular ? "border-amber-500 shadow-lg" : "border-border shadow",
        className
      )}
      style={style}
    >
      {popular && (
        <div className="absolute top-0 right-0 overflow-hidden w-36 h-36">
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center py-1 px-12 font-medium transform rotate-45 translate-x-6 translate-y-[-10px] shadow-md">
            POPULER
          </div>
        </div>
      )}
      
      <div className={cn("p-6", popular && "")}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 mb-3">
          <span className="text-2xl font-bold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <Button 
          className={cn("w-full mb-6", 
            popular ? "border-indigo-500/50 bg-transparent hover:bg-indigo-500/10 text-foreground" : 
            "border-indigo-500/50 bg-transparent hover:bg-indigo-500/10 text-foreground"
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
                feature.included ? (popular ? "bg-amber-500/10" : "bg-primary/10") : "bg-gray-100 dark:bg-gray-800"
              )}>
                {feature.included ? (
                  <Check className={cn("h-3 w-3", popular ? "text-amber-500" : "text-primary")} />
                ) : (
                  <X className="h-3 w-3 text-muted-foreground" />
                )}
              </div>
              <span className={cn(
                "text-sm",
                feature.included ? "text-foreground" : "text-muted-foreground line-through"
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
