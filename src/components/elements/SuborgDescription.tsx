import * as React from "react";

import "../../styles/constants.scss";

interface DescriptionProps {
  blurb: string;
  name: string;
  email: string;
  orgsyncURL: string;
}

const SuborgDescription = (props: DescriptionProps) => {
  const { blurb, name, email, orgsyncURL } = props;

  return (
    <span className={"suborg-description-wrapper"}>
      <span className="suborg-metadata">
        <span className="suborg-name">{name}</span>
        <span className="email">
          <a href={`mailto:${email}`}>{email}</a>
        </span>
        <span className="orgsync">
          <a href={orgsyncURL}>OrgSync</a>
        </span>
      </span>
      <span className="blurb">{blurb}</span>
    </span>
  );
};

export default SuborgDescription;
