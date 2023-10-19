import React, { useId } from "react";

import { cn } from "@/utilities/cn";

import { Label } from "./label";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export type BaseInputProps = Props;

const _BaseInput = (
  props: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const { type = "text", className, ...restProps } = props;

  return (
    <input
      {...restProps}
      ref={ref}
      type={type}
      className={cn(
        "grow border border-slate-500 outline-none rounded-lg p-1",
        className,
      )}
    />
  );
};

export const BaseInput = React.forwardRef(_BaseInput);
