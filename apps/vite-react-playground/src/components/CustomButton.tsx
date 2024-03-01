import { SysShapeCornerTokensType } from "@components/theme";
import { ComponentPropsWithoutRef } from "react";

type CustomButtonProps = {
  shape: keyof SysShapeCornerTokensType;
} & ComponentPropsWithoutRef<"button">;

export const CustomButton = ({ shape, ...props }: CustomButtonProps) => {
  return (
    <button
      {...props}
      style={{
        borderRadius: `var(--sys-shape-corner-${shape})`,
        ...props.style
      }}
    >
      Um botão muito foda usando o shape: {shape}
    </button>
  );
};
