"use client";

// ts-ignore because experimental_useFormStatus is not in the types
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import type React from "react";

interface SubmitProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type"
  > {}

export default function Submit(props: SubmitProps) {
  const { pending }: import("react-dom").FormStatus = useFormStatus();
  return (
    <button {...props} type="submit" disabled={pending}>
      Shorten URL
    </button>
  );
}
