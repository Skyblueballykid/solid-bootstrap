import {Component, JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface CarouselItemProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  interval?: number;
}

// return type is actually this - but Typescript only allows JSX.Elements
export type CarouselItemReturnType = {
  item: JSX.Element;
  interval: number;
};

const defaultProps = {
  as: "div",
};

let a;
const CarouselItem = (p: CarouselItemProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "interval",
  ]);
  // custom response to allow <Carousel /> to access interval
  return {
    item: (
      <Dynamic
        component={local.as}
        {...props}
        className={classNames(local.className, useBootstrapPrefix(local.bsPrefix, "carousel-item"))}
      >
        {props.children}
      </Dynamic>
    ),
    interval: local.interval,
  } as unknown as JSX.Element;
};

export default CarouselItem;
