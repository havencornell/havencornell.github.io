import * as React from "react";

import "../../styles/constants.scss";

interface DescriptionProps {
  blurb: JSX.Element | string;
  name: string;
  resourceLink: string;
}

const ResourceDescription = (props: DescriptionProps) => {
  const { blurb, name, resourceLink } = props;

  return (
    <span className={"suborg-description-wrapper"}>
      <span className="suborg-metadata">
        <a href={resourceLink} className="suborg-name">
          {name}
        </a>
      </span>
      <span className="blurb">{blurb}</span>
    </span>
  );
};

export default ResourceDescription;
