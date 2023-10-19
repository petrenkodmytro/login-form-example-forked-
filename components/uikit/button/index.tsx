import React from "react";

import { cn } from "@/utilities/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const _Button = (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { type = "button", className, children, ...restProps } = props;

  return (
    <button
      {...restProps}
      ref={ref}
      type={type}
      className={cn("p-3 bg-blue-400 text-white rounded-lg", className)}
    >
      {children}
    </button>
  );
};

export const Button = React.forwardRef(_Button);
