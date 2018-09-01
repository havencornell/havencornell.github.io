import * as React from "react";
import ResourceDescription from "../elements/ResourceDescription";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const ResourcesPage = () => (
  <div>
    <Header activePage={"resources"} />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>
        <h2>Health and Wellness Resources</h2>
        <ResourceDescription
          blurb={
            "Cornell Health provides integrated health care services to Cornell University students."
          }
          name={"Cornell Health"}
          resourceLink={"https://health.cornell.edu"}
        />
        <ResourceDescription
          blurb={
            "Cornell's SHARE (Sexual Harassment and Assault—Response and Education) website provides access to services, support, avenues for reporting, campus education, and advocacy."
          }
          name={"SHARE"}
          resourceLink={"https://share.cornell.edu"}
        />
        <ResourceDescription
          blurb={"Provides a variety of Cornell related support resources"}
          name={"Cornell Caring Community"}
          resourceLink={"http://caringcommunity.cornell.edu/get-help/"}
        />
        <ResourceDescription
          blurb={"Report bias related activity at Cornell"}
          name={"Bias Reporting Form"}
          resourceLink={
            "https://cm.maxient.com/reportingform.php?CornellUniv&layout_id=6"
          }
        />
        <ResourceDescription
          blurb={"Report and learn about hazing at Cornell"}
          name={"Report Hazing @ Cornell"}
          resourceLink={"http://hazing.cornell.edu"}
        />
        <h2>Academic and Administrative Resources</h2>
        <ResourceDescription
          blurb={
            "The Lesbian, Gay, Bisexual, Transgender (LGBT) Resource Center coordinates the efforts of the entire Cornell community to ensure the inclusion of all lesbian, gay, bisexual,  transgender, queer, questioning, intersex, and asexual (LGBTQQIA) individuals and works to eliminate discrimination based upon sexual orientation, gender identity or expression. The LGBT Resource Center affirms LGBTQQIA+ identities and lives, and provides education, outreach, advocacy, and support."
          }
          name={"LGBT Resource Center"}
          resourceLink={"https://dos.cornell.edu/lgbt-resource-center"}
        />
        <ResourceDescription
          blurb={
            "The Center for Intercultural Dialogue at 626 Thurston Avenue promotes programs that cross the boundaries in Cornell's diverse student community, bringing together students from themed program houses, diversity and social justice-related student organizations, and other cultural centers across campus."
          }
          name={"Center for Intercultural Dialogue"}
          resourceLink={
            "https://dos.cornell.edu/student-development-diversity-initiatives"
          }
        />
        <ResourceDescription
          blurb={
            "The WRC is dedicated to serving the entire Cornell community with mutual respect, honesty, and openness. The WRC values people of all genders coming together to end sexism, along with all forms of oppression and maintaining an environment where all are free to affirm and celebrate their differences and commonalties."
          }
          name={"Women's Resource Center (WRC)"}
          resourceLink={"https://dos.cornell.edu/womens-resource-center"}
        />
        <ResourceDescription
          blurb={
            "Fostering innovative teaching and cutting-edge research, this program focuses on how relations of gender, intersecting with race, ethnicity, class, sexuality, nation and other differences, affect every aspect of society."
          }
          name={"Feminist, Gender, and Sexuality Studies Program"}
          resourceLink={"http://www.arts.cornell.edu/fgss/"}
        />
        <ResourceDescription
          blurb={
            "The field of Lesbian, Gay, Bisexual, and Transgender Studies is devoted to the investigation of sexuality and its importance to the organization of social relations more generally. Primary among its concerns is also the study of the lives, the politics, and the creative work of sexual minorities."
          }
          name={"Lesbian, Gay, Bisexual and Transgender Studies"}
          resourceLink={"http://blogs.cornell.edu/lgbtstudies"}
        />
        <ResourceDescription
          blurb={
            "The Human Sexuality Collection seeks to preserve and make accessible primary sources that document historical shifts in the social construction of sexuality, with a focus on U.S. lesbian and gay history and the politics of pornography."
          }
          name={"Human Sexuality Collection"}
          resourceLink={"http://rmc.library.cornell.edu/HSC/"}
        />
        <ResourceDescription
          blurb={
            <span>
              We welcome members and participants at our monthly open committee
              meetings and maintain an active roster of events at the medical
              center in New York. For more information, please feel free to
              contact us at:{" "}
              <a href={"lgbt-info@med.cornell.edu"}>
                lgbt-info@med.cornell.edu
              </a>
              .
            </span>
          }
          name={"Weill Cornell Medical College LGBT Support"}
          resourceLink={
            "https://diversity.weill.cornell.edu/diverse-communities/lgbt"
          }
        />
        <ResourceDescription
          blurb={
            <span>
              The Advocacy for LGBT Communities Clinic (LGBT Clinic) at Cornell
              Law School is one of the only law school clinics in the country
              dedicated to serving members of the LGBT community. Students in
              the clinic have an extraordinary opportunity to contribute to the
              struggle for LGBT equality by representing individual people in a
              variety of legal matters and undertaking advocacy projects in
              conjunction with LGBT organizations. If you would like more
              information or to request assistance, please call our office at
              (607) 255-4196 or email{" "}
              <a href={"lgbt-clinic@cornell.edu"}>lgbt-clinic@cornell.edu</a>.
            </span>
          }
          name={
            "Advocacy for Lesbian Gay Bisexual and Transgender (LGBT) Communities Clinic"
          }
          resourceLink={
            "http://www.lawschool.cornell.edu/Clinical-Programs/lgbtclinic/"
          }
        />
        <ResourceDescription
          blurb={
            "Supports the increased presence, academic success, intellectual achievement, and inclusion across all fields of study of those from these under-represented backgrounds at Cornell."
          }
          name={"Office of Academic Diversity Initiatives (OADI)"}
          resourceLink={"http://www.oadi.cornell.edu/"}
        />
        <ResourceDescription
          blurb={
            "The Office of Inclusion and Student Engagement (OISE) supports an inclusive and welcoming environment for all graduate students and postdocs."
          }
          name={
            "Office of Inclusion and Student Engagement (OISE) - Graduate School"
          }
          resourceLink={"http://gradschool.cornell.edu/inclusion"}
        />
        <ResourceDescription
          blurb={
            "The Asian & Asian American Center, founded in 2009, offers programs for you to explore your racial, ethnic, and cultural identity in a positive space, as well as help educate the campus on the rich diversity of our community. Our community here is rich and diverse -you are encouraged to explore the 75+ Asian-affiliated organizations."
          }
          name={"Asian and Asian American Center (A3C)"}
          resourceLink={"https://dos.cornell.edu/asian-asian-american-center"}
        />
        <ResourceDescription
          blurb={
            "Provides support and resources for navigating LGBT concerns in the workplace. The Career Services site provides links to LGBT friendly job posting sites, scholarships, and other related information. If you would like more information or to connect with a career adviser, please call (607) 255-5221."
          }
          name={"Cornell Career Services: LGBT Career Resources"}
          resourceLink={
            "http://www.career.cornell.edu/resources/Diversity/lgbt.cfm"
          }
        />
      </div>
    </div>
  </div>
);

export default ResourcesPage;
