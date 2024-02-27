import { ComponentProps, useState } from "react";
import ShowPasswordIcon from "../ui/icons/ShowPasswordIcon";

type DivProps = ComponentProps<"div">;
type LabelProps = ComponentProps<"label">;
type InputProps = ComponentProps<"input">;

interface IProps {
  containerProps?: DivProps;
  inputProps?: InputProps;
  labelProps?: LabelProps;
}

const FormControl = ({ inputProps, labelProps, containerProps }: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div
      {...containerProps}
      className={` flex flex-col gap-3 w-input relative ${
        containerProps?.className || ""
      }`}
    >
      <label {...labelProps} className="text-xl font-semibold" />
      <input
        {...inputProps}
        type={
          inputProps?.type == "password"
            ? showPassword
              ? "text"
              : "password"
            : inputProps?.type
        }
        className={`h-11 rounded-md	px-4 text-xl border-neutral-300 border-solid border-2 placeholder:italic ${inputProps?.type == "password" ? "pe-10" : ""}`}
      />
      {inputProps?.type == "password" && (
        <button
        className="absolute bottom-3 right-3"
          onClick={(e) => {
            e.preventDefault();
            setShowPassword(!showPassword);
          }}
        >
          <ShowPasswordIcon />
        </button>
      )}
    </div>
  );
};

export default FormControl;
