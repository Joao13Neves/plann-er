import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const ButtonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2',

    variants: {
        variant: {
            primary: 'bg-line-300 text-zinc-950 hover:bg-line-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        }
    },

    defaultVariants: {
        variant: 'primary'
    }
})


interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof ButtonVariants> {
    children: ReactNode,
    variant: "primary" | "secondary"
}

export function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button {...props} className={ButtonVariants({ variant })}>
          Alterar local/data
          {children}
        </button>
    )
}