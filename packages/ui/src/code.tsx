interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

export function Code({
  children,
  className,
}: CodeProps): JSX.IntrinsicElements["code"] {
  return <code className={className}>{children}</code>;
}
