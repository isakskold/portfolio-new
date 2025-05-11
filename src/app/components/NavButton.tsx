import React from "react";

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  active,
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-base font-semibold transition-all transform focus:outline-none rounded-md bg-slate-800/80
        ${
          active
            ? "text-cyan-300 scale-105"
            : "text-slate-300 hover:text-slate-200"
        }
        ${className}
      `}
      aria-pressed={active}
      type="button"
    >
      {children}
    </button>
  );
};

export default NavButton;
