import * as React from "react";

import SuborgDescription from "../elements/SuborgDescription";
import Header from "../elements/Header";
import "../../styles/constants.scss";

const PeoplePage = () => (
  <div>
    <Header activePage={"organizations"} />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>
        <h2>2018-2019 Suborganizations</h2>
        <a
          className={"listserv-link"}
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSe7E3WYw5Sf206Ibxxg9ilZY6hfXK3Kcne4QSAZWOoN4Ve8bQ/viewform"
          }
        >
          Sign up for mailing lists
        </a>
        <SuborgDescription
          blurb={
            "ACE is open to all people who identify, or think they might identify, within the ace umbrella. The ace umbrella includes asexuals and those who occupy the gray space between sexuality and asexuality. Please note that ace people might experience other forms of attraction, such as romantic, aesthetic, emotional, or intellectual."
          }
          email={"ace@cornell.edu"}
          name={"ACE"}
          orgsyncURL={"https://orgsync.com/81764/"}
        />
        <SuborgDescription
          blurb={
            "CBA works with prominent firms to further enhance their diversity recruitment efforts by connecting them with our talented student members. They continue to successfully accomplish their mission by informing LGBT undergraduates of career opportunities, attending annual conferences, facilitating networking opportunities with corporate recruiters to provide familiarity of their firm’s efforts in diversity and inclusion, and helping members establish mentorships with supportive alumni."
          }
          email={"cba@cornell.edu"}
          name={"Cornell Business Alliance"}
          orgsyncURL={"https://orgsync.com/72330/"}
        />
        <SuborgDescription
          blurb={
            "Crunch is a peer run group committed to education, social support, and programming centering on kink and its place in the queer community. Kink is how many people engage with themselves and others, either sexually or non-sexually, in ways that challenge mainstream norms that prescribe gender, sexuality, relationships, power, intimacy, kinship and uses of the body. Crunch explores the ideas around and practices of kink in queer spaces."
          }
          email={"Cornellcrunch@gmail.com"}
          name={"CRUNCH"}
          orgsyncURL={"https://orgsync.com/95918/"}
        />
        <SuborgDescription
          blurb={
            "Lavender is a peer-run social support group for lesbian, bisexual, transgender, queer, and questioning women and nonbinary folks. Lavender creates a safe confidential meeting space for all members of the Cornell or Ithaca greater community who want to come together around issues of being lesbian, bisexual, transgender, queer, or questioning."
          }
          email={"cjm353@cornell.edu"}
          name={"Lavender"}
          orgsyncURL={"https://orgsync.com/72141/"}
        />
        <SuborgDescription
          blurb={
            "MOSAIC is a peer social support organization for LGBTQ people of color and allies. MOSAIC’s social goals include giving QPOC and allies a place to belong, weekly meeting, supporting QPOC speakers to come to campus, and organizing activities and events geared towards awareness."
          }
          email={"mosaiccornell@cornell.edu"}
          name={"MOSAIC"}
          orgsyncURL={"https://orgsync.com/72249/"}
        />
        <SuborgDescription
          blurb={
            "OUTreach is a group for anyone in the Cornell community interested in coming together around issues of being male and gay, bisexual, or transgender. One objective is to reach out to other members of the LGBTQ community and the broader Cornell and Ithaca communities.\n"
          }
          email={"outreach@cornell.edu"}
          name={"OUTreach"}
          orgsyncURL={"https://orgsync.com/72250/"}
        />
        <SuborgDescription
          blurb={
            "The Queer Pre-Health Alliance is looking for LGBTQ+ students who are interested in the Pre-health field (such as pre-med or any health related career). Queer Pre-Health Association is planning to create a documentary regarding health disparities f"
          }
          email={"dgd68@cornell.edu"}
          name={"Queer Pre-Health Association"}
          orgsyncURL={"https://orgsync.com/144042/"}
        />
        <SuborgDescription
          blurb={
            "QPAC is an organization for queer students interested in political action. Whether at Cornell or elsewhere, QPAC strives to educate and develop individuals on all queer issues to advocate for the progress and advancement of our community."
          }
          email={"jsa94@cornell.edu"}
          name={"Queer Political Action Coalition"}
          orgsyncURL={"?"}
        />
        <SuborgDescription
          blurb={
            "Reading Rainbow is an LGBTQ+ book club that focuses on articles and excerpts relating to the queer community."
          }
          email={"svc23@cornell.edu"}
          name={"Reading Rainbow"}
          orgsyncURL={"?"}
        />
        <SuborgDescription
          blurb={
            "TANGO is a group for all Cornellians who identify as transgender and/or non-binary, or are questioning their gender identities."
          }
          email={"haven-tango@cornell.edu"}
          name={"TANGO"}
          orgsyncURL={"https://orgsync.com/113004/"}
        />
        <a
          className={"listserv-link"}
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSe7E3WYw5Sf206Ibxxg9ilZY6hfXK3Kcne4QSAZWOoN4Ve8bQ/viewform"
          }
        >
          Sign up for mailing lists
        </a>
      </div>
    </div>
  </div>
);

export default PeoplePage;
