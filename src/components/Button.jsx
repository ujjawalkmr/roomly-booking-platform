import "../styles/Button.css";
import { cn } from "../lib/utils/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        "btn",
        `btn-${size}`,
        `btn-${variant}`,
        disabled && "btn-disabled",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}