import type { ReactNode, ComponentPropsWithoutRef } from 'react';

interface BaseProps {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'outline';
    showArrow?: boolean;
    className?: string;
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { href?: never };
type AnchorProps = BaseProps & ComponentPropsWithoutRef<'a'> & { href: string };

type Button1Props = ButtonProps | AnchorProps;

const Button1 = ({ children, size = "md", variant = "outline", showArrow = true, className = "", ...props }: Button1Props) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none uppercase tracking-[0.2em] border border-[#DBB75F] group"

    const sizeClasses = {
        sm: "px-6 py-3 text-xs",
        md: "px-10 py-5 text-sm",
        lg: "px-14 py-7 text-base"
    }

    const variants = {
        solid: "bg-[#DBB75F] text-[#0F1612] hover:bg-transparent hover:text-[#DBB75F]",
        outline: "bg-transparent text-[#DBB75F] hover:bg-[#DBB75F] hover:text-[#0F1612]"
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`

    const content = (
        <>
            <span>{children}</span>
            {showArrow && (
                <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            )}
        </>
    )

    if ("href" in props && props.href) {
        const { href, ...anchorProps } = props as AnchorProps;
        return (
            <a href={href} className={classes} {...anchorProps}>
                {content}
            </a>
        )
    }

    return (
        <button className={classes} {...(props as ButtonProps)}>
            {content}
        </button>
    )
}

export default Button1
