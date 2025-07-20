
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-standard border border-border",
        className
      )}
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-standard group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-standard flex items-end">
          <div className="p-4 w-full">
            <div className="flex space-x-2 justify-end">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-brand-purple transition-standard"
                  aria-label="View GitHub Repository"
                >
                  <Github size={18} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-brand-purple transition-standard"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-brand-purple transition-standard">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
