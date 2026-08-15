interface Props {
  tech: string[];
}

export default function ProjectTechStack({ tech }: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-line px-3 py-1 text-xs text-muted transition hover:border-accent hover:text-accent"
        >
          {item}
        </span>
      ))}
    </div>
  );
}