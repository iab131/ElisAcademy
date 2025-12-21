import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-accent text-white hover:bg-accent/90": variant === "primary",
                        "bg-primary text-white hover:bg-primary/90": variant === "secondary",
                        "border border-gray-200 bg-white hover:bg-accent hover:text-white": variant === "outline",
                        "hover:bg-accent/10 hover:text-accent": variant === "ghost",
                        "text-primary underline-offset-4 hover:underline": variant === "link",
                        "h-9 px-3 text-xs": size === "sm",
                        "h-10 px-4 py-2": size === "md",
                        "h-11 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
