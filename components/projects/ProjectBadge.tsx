interface Props {
  text: string;
}

export default function ProjectBadge({ text }: Props) {
  return (
    <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {text}
    </span>
  );
}