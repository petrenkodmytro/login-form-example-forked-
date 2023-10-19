import React, { useId } from "react";

import { cn } from "@/utilities/cn";

import { Label } from "./label";
import { BaseInput, type BaseInputProps } from "./base-input";
import { Error } from "./error";

type Props = BaseInputProps & {
  label?: React.ReactNode;
  error?: React.ReactNode;
};

const _Input = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { className, id: idProp, label, error, ...restProps } = props;

  const localId = useId();
  const id = idProp ?? localId;

  const labelNode = label ? <Label htmlFor={id}>{label}</Label> : null;
  const errorNode = "error" in props ? <Error>{error}</Error> : null;

  return (
    <div className={cn("flex flex-col", className)}>
      {labelNode}
      <BaseInput {...restProps} ref={ref} id={id} />
      {errorNode}
    </div>
  );
};

export const Input = React.forwardRef(_Input);
