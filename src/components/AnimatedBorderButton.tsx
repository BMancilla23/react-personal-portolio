type AnimatedBorderButtonProps = {
  children: React.ReactNode;
};

export const AnimatedBorderButton = ({
  children,
}: AnimatedBorderButtonProps) => {
  return (
    <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled-cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
      {/* <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path />
      </svg> */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
