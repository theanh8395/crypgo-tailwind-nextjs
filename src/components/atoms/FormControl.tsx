import { clsx } from "clsx";
import { PropsWithChildren } from "react";
import { FieldError } from "react-hook-form";

interface IFormControlProps extends PropsWithChildren {
  className?: string;
  error?: FieldError;
  classNames?: {
    label?: string;
    help?: string;
  };
  require?: boolean;
  label?: string;
  helpText?: string;
}

const FormControl = ({
  label,
  helpText,
  error,
  className,
  classNames,
  require,
  children,
}: IFormControlProps) => {
  return (
    <div
      className={clsx("w-full flex flex-col gap-1", className)}
      aria-label="ariaLabel"
      aria-labelledby="ariaLabel"
    >
      <div className="flex flex-col w-full gap-1.5">
        {label && (
          <label
            htmlFor="name"
            aria-label="ariaLabel"
            className={clsx(
              "text-xs text-[#1b1b28] font-bold",
              classNames?.label
            )}
          >
            {label}
            {require && <span className="mx-1 text-red-500 font-bold">*</span>}
          </label>
        )}
        <div className="flex flex-col w-full">{children}</div>
      </div>
      {helpText && (
        <div className={classNames?.help}>
          <span className="text-[#8d8d8d] text-xs font-normal">{helpText}</span>
        </div>
      )}
      <div className={clsx("w-full", error ? "visible" : "invisible")}>
        <span className="text-red-500 text-xs font-normal">
          {error?.message}
        </span>
      </div>
    </div>
  );
};

export default FormControl;
