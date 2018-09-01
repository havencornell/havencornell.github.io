import * as React from "react";

import "../../styles/constants.scss";

interface DescriptionProps {
  blurb?: string;
  majorAndYear: string;
  name: string;
  netID: string;
  photoPath: string;
  position: string;
}

const BoardMemberDescription = (props: DescriptionProps) => {
  const { majorAndYear, name, netID, photoPath, position } = props;

  return (
    <span className={"description-wrapper"}>
      <span>
        <div className="position">{position}</div>
        <img src={require(`../images/${photoPath}.jpg`)} />
        <span className="name">{name}</span>
        <span className="major-year">{majorAndYear}</span>
        <span className="net-id">
          <a href={`mailto:${netID}@cornell.edu`}>{`${netID}@cornell.edu`}</a>
        </span>
      </span>
      <span>
      </span>
    </span>
  );
};

export default BoardMemberDescription;
