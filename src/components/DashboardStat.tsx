
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface DashboardStatProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const DashboardStat: React.FC<DashboardStatProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}) => {
  return (
    <div className={cn(
      "p-7 md:p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow elegant-card", 
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <h3 className="text-2xl font-bold mb-2">{value}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ml-4">
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className={cn(
            "flex items-center text-sm",
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-muted-foreground'
          )}>
            {trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 mr-2" />
            ) : trend === 'down' ? (
              <ArrowDownRight className="h-4 w-4 mr-2" />
            ) : null}
            <span>{trendValue} dalam 30 hari terakhir</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStat;
