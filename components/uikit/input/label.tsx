import { cn } from "@/utilities/cn";

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <label {...restProps} className={cn("cursor-pointer text-sm", className)}>
      {children}
    </label>
  );
};
