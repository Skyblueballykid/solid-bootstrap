import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface FormTextProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

const defaultProps = {
  as: "small",
};

const FormText: BsPrefixRefForwardingComponent<"small", FormTextProps> = (p: FormTextProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "muted",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-text");

  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(local.className, bsPrefix, local.muted && "text-muted")}
    >
      {props.children}
    </Dynamic>
  );
};

export default FormText;
