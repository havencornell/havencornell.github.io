import * as React from "react";
import { Link } from "react-router-dom";

interface AProps extends React.AnchorHTMLAttributes<any> {
  // Override default type to make sure we do not pass in any bogus values
  target?: "_blank";
}

export class A extends React.Component<AProps> {
  public render() {
    const { children, ...restPropsReadOnly } = this.props;
    const restProps = restPropsReadOnly as any;

    // If href is undefined, fall back to no-op
    if (!restProps.href) {
      restProps.href = "javascript:;";
    }

    if (!restProps.href.startsWith("#")) {
      // Convert `href` to `to` for react-router
      restProps.to = restProps.href;
      delete restProps.href;

      return (
        <Link {...restProps} onClick={this.clickHandler}>
          {children}
        </Link>
      );
    } else {
      return (
        <a {...restProps} onClick={this.clickHandler}>
          {children}
        </a>
      );
    }
  }

  private clickHandler = (ev: any) => {
    const { onClick } = this.props;
    // forward click if requested
    onClick && onClick(ev);
  };
}

export default A;
