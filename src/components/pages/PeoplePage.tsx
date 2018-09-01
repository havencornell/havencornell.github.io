import * as React from "react";

import BoardMemberDescription from "../elements/BoardMemberDescription";
import Header from "../elements/Header";
import "../../styles/constants.scss";

const PeoplePage = () => (
  <div>
    <Header activePage={"people"} />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>
        <h2>2018-2019 Executive Board</h2>
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'20, ILR"}
          name={"Joe Anderson"}
          netID={"jsa94"}
          photoPath={"joe"}
          position={"President"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'20, Near Eastern Studies & History"}
          name={"Ian Wallace"}
          netID={"iaw6"}
          photoPath={"ian"}
          position={"Vice President"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'20, Communications"}
          name={"Sophie Cook"}
          netID={"svc23"}
          photoPath={"sophie"}
          position={"Programming Chair"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'20, Information Science"}
          name={"Zoë Roberts"}
          netID={"zer3"}
          photoPath={"zoe"}
          position={"Marketing & Publicity Chair"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'21, A&S"}
          name={"Elia Morelos"}
          netID={"egm57"}
          photoPath={"elia"}
          position={"Marketing & Publicity Chair"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'21, Computer Science"}
          name={"Elisha Chen"}
          netID={"ec636"}
          photoPath={"elisha"}
          position={"Treasurer"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'19, Biomedical Engineering"}
          name={"Cassidy Mileti"}
          netID={"cjm353"}
          photoPath={"cassidy"}
          position={"Secretary"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'20, Statistics"}
          name={"Alan Polyak"}
          netID={"atp68"}
          photoPath={"alan"}
          position={"Internal Relations Chair"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'21, Applied Engineering Physics"}
          name={"Katrina Howard"}
          netID={"kh542"}
          photoPath={"katrina"}
          position={"Freshman Liaison"}
        />
        <BoardMemberDescription
          blurb={""}
          majorAndYear={"'19, Computer Science & Linguistics"}
          name={"Lavanya Aprameya"}
          netID={"la334"}
          photoPath={"lava"}
          position={"President Emeritus"}
        />
      </div>
    </div>
  </div>
);

export default PeoplePage;
