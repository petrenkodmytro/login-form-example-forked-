import { cn } from "@/utilities/cn";

type Props = React.HTMLAttributes<HTMLSpanElement>;

export const Error = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <span {...restProps} className={cn("text-red-400 text-sm", className)}>
      {children}
    </span>
  );
};
