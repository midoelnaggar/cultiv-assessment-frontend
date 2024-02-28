import { ComponentProps } from "react";
import Loading from "../../Loading";

type ButtonProps = ComponentProps<"button"> & {
  loading: boolean;
};

const Button = ({ children, loading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-foreground-primary-color text-foreground-secondary-color
      font-semibold py-2 text-xl fill-foreground-secondary-color
       hover:bg-background-secondary-color hover:text-foreground-primary-color hover:fill-foreground-primary-color
        transition-all ${props.className || ""}`}
    >
      {loading ?<Loading className="h-7 w-15 fill-inherit" /> :children}
    </button>
  );
};

export default Button;
