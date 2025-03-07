import { Button } from '../ui/button';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../ui/button';
import { useFormState, useFormStatus } from 'react-dom';

export default function Submit({
  children,
  ...others
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending} {...others}>
      {children}
    </Button>
  );
}
