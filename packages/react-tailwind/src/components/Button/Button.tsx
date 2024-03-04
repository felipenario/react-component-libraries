"use client";

import { mergeCn } from "@components/tailwind";
import { VariantProps, cva } from "class-variance-authority";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "react-aria-components";

const buttonVariants = cva(
  "text-ref-typography-font-size-desktop-font-size-800 p-ref-spacing-8 rounded-sys-shape-corner-s shadow-sys-elevation-level1",
  {
    variants: {
      variant: {
        primary: "bg-sys-color-primary text-sys-color-on-primary",
        secondary: "bg-sys-color-secondary text-sys-color-on-secondary",
      },
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & BaseButtonProps;

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      className={mergeCn(buttonVariants({ variant, className: className }))}
      {...props}
    />
  );
};
