"use client";

import { mergeCn } from "@components/tailwind";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { useButton, useHover } from "react-aria";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ButtonContext,
  useContextProps,
} from "react-aria-components";

const buttonVariants = cva(
  "text-sys-color-on-primary text-sys-typography-detail-size-s p-ref-spacing-8 rounded-sys-shape-corner-s shadow-sys-elevation-level1",
  {
    variants: {
      variant: {
        primary: "bg-sys-color-primary text-sys-color-on-primary",
        secondary:
          "bg-sys-color-secondary data-[disabled=true]:bg-ref-palette-slate-50 text-sys-color-on-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<"button">;

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  const { buttonProps, isPressed } = useButton({ ...props }, null);

  buttonProps.

  return (
    <>
      <button
        className={mergeCn(buttonVariants({ variant, className }))}
        role="button"
        {...props}
      />
      <BaseButton />
    </>
  );
};
