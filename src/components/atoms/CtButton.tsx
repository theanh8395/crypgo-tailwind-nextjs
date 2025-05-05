import { Button, ButtonProps } from "@heroui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface ICtButtonProps extends ButtonProps, PropsWithChildren {}

const CtButton = ({ children, isIconOnly, ...props }: ICtButtonProps) => {
  if (isIconOnly) {
    return (
      <Button
        className={clsx("bg-transparent hover:bg-transparent", props.className)}
        isIconOnly
        radius={props.radius || "full"}
        {...props}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      disableAnimation
      fullWidth
      radius="sm"
      {...props}
      className={clsx(
        "h-min min-h-min py-2 border-1",
        !props.variant && "border-transparent text-darkmode",
        props.className
      )}
    >
      {children}
    </Button>
  );
};

export { CtButton };
