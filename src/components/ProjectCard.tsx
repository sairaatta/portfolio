const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl, pdfUrl }) => {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg group transition-transform hover:scale-105">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-auto object-contain rounded-t-2xl" />
      {/* Project Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm mb-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-4 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-500 transition"
            >
              Live Site
            </a>
          )}
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-400 text-black font-medium rounded-lg hover:bg-blue-500 transition"
            >
              View PDF
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;