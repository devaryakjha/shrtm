"use client";

import { useFormStatus } from "react-dom";
import type React from "react";

interface SubmitProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Submit(props: SubmitProps) {
  const { pending } = useFormStatus();
  return <button type="submit" {...props} disabled={pending} />;
}
