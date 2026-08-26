interface WelcomeHeaderProps {
  firstName: string;
}

export const WelcomeHeader = ({ firstName }: WelcomeHeaderProps) => (
  <div>
    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-[var(--color-text-dark)]">
      Welcome Back, {firstName}
    </h1>
    <p className="text-[var(--color-text-muted)] mt-2 font-medium">
      Ready to look sharp?
    </p>
  </div>
);