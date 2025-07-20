
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  className?: string;
}

const SkillCard = ({ title, icon, description, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-xl shadow-md transition-standard hover:shadow-lg border border-border overflow-hidden",
      "hover:-translate-y-1 group", 
      className
    )}>
      <div className="p-6 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-purple/10 text-brand-purple">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold group-hover:text-brand-purple transition-standard">
          {title}
        </h3>
        
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
