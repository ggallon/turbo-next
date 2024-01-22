"use client";

interface ButtonProps {
  appName: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  appName,
  children,
  className,
}: ButtonProps): JSX.IntrinsicElements["button"] {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
}
