interface CardProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  title: string;
}

export function Card({
  children,
  className,
  href,
  title,
}: CardProps): JSX.Element {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
