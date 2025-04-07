import ExperienceCard from "../Cards/ExperienceCard";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section
      className="home-section experience-section"
      id="experience"
      data-section="experience"
    >
      <SectionHeader section="Experience" />

      <div className="experience-contents">
        <ExperienceCard
          tenure="MAR 2022 - present"
          url="https://www.golo.com"
          title="IT Specialist"
          company="GOLO LLC."
          description="Assist with planning and executing large-scale projects, deployments, and migrations. Configure and support various applications, including Salesforce, AWS, Shopify, Excel, Azure, Exchange, and SharePoint. Provide direct personal and efficient problem-solving concerning software and hard-related matters, including backend application configurations when necessary. Act as a direct liaison between vendors and the company to solve IT-related business problems and needs."
          tags={["O365 Admin", "Azure AD", "Shopify", "Salesforce"]}
        />

        <ExperienceCard
          tenure="MAY 2018 - MAR 2022"
          url="https://www.pbfenergy.com/refineries/"
          title="IT Desktop Support"
          company="Delaware City Refinery"
          description=" Managed the IT Help Desk by responding to software and hardware-related issues, including Microsoft Access and Excel, SAP, and in-house developed software. Developed and modified PDQ software packages for bulk installation."
          tags={["Excel", "Access", "PDQ"]}
        />
      </div>
    </section>
  );
}
