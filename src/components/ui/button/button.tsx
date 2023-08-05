import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
};

const variantClasses = {
  primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
  success: 'bg-success text-success-foreground shadow-sm hover:bg-success/90',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
} as const;

const sizeClasses = {
  sm: 'h-8 rounded-md px-3 text-xs',
  md: 'h-9 px-4 py-2',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
} as const;

export const Button: ParentComponent<Props> = (props) => {
  const [, rest] = splitProps(props, ['variant', 'size', 'class']);

  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';

  return (
    <button
      class={twMerge(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        props.class,
        variantClasses[variant],
        sizeClasses[size],
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
};