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
}: ButtonProps): JSX.Element {
  return (
    <button
      className={className}
      onClick={() => {
        /* eslint-disable-next-line -- no-alert -- Only for test*/
        alert(`Hello from your ${appName} app!`);
      }}
      type="button"
    >
      {children}
    </button>
  );
}
