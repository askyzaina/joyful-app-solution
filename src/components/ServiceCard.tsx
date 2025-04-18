
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
          : "border-slate-200 dark:border-border shadow",
        className
      )}
      style={style}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="relative">
            <div className="w-0 h-0 border-style-solid
                           border-t-[70px] border-t-amber-500 
                           border-l-[70px] border-l-transparent">
            </div>
            <div className="absolute top-[10px] right-[-2px] transform rotate-45 w-[100px] text-center">
              <span className="text-white text-xs font-bold tracking-wide">POPULER</span>
            </div>
          </div>
        </div>
      )}
      
      <div className={cn(
        "p-6", 
        popular 
          ? "bg-gradient-to-br from-amber-50 to-amber-100/60 dark:bg-amber-950/10" 
          : "bg-white dark:bg-transparent"
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
              ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0" 
              : "border-slate-300 bg-white hover:bg-slate-50 text-slate-800 dark:border-indigo-500/50 dark:bg-transparent dark:hover:bg-indigo-500/10 dark:text-foreground"
          )}
          variant={popular ? "default" : "outline"}
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
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20" 
                      : "bg-slate-100 text-slate-700 dark:bg-primary/10")
                  : "bg-slate-100 dark:bg-gray-800"
              )}>
                {feature.included ? (
                  <Check className={cn(
                    "h-3 w-3", 
                    popular 
                      ? "text-amber-600 dark:text-amber-400" 
                      : "text-slate-700 dark:text-primary"
                  )} />
                ) : (
                  <X className="h-3 w-3 text-slate-400 dark:text-muted-foreground" />
                )}
              </div>
              <span className={cn(
                "text-sm",
                feature.included 
                  ? "text-slate-800 dark:text-foreground" 
                  : "text-slate-500 line-through dark:text-muted-foreground"
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
