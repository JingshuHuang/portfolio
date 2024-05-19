import { useQuery } from "@apollo/client";
import { FaReact } from "react-icons/fa";
import { SkillData } from "../../types";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import IconTitle from "./IconTitle";
import Knowledge from "./Knowledge";
import Languages from "./Languages";
import resumeOperations from "../../graphqlOperations/resume";
import { SiGoogleadsense, SiGraphql, SiIcinga } from "react-icons/si";

interface SkillQuery {
  skills: SkillData[];
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  );

  if (error) console.log(error);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="relative px-12 py-6 vCustomLine sm:before:block before:hidden before:left-0">
          <IconTitle title="Program Languages" Icon={FaReact} />
          <Knowledge knowledge={data?.skills[0].languages} />
        </li>
        <li className="relative px-12 py-6 vCustomLine sm:before:block before:hidden before:left-0">
          <IconTitle title="Frameworks" Icon={SiGoogleadsense} />
          <Knowledge knowledge={data?.skills[0].frameworks} />
        </li>
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 pt-6">
          <IconTitle title="Database" Icon={SiIcinga} />
          <Knowledge knowledge={data?.skills[0].databases} />
        </li>
        {/* <li className="px-12 pt-6">
          <IconTitle title="ML/AI" Icon={SiIcinga} />
          <Knowledge knowledge={data?.skills[0].aiml} />
        </li> */}
        <li className="px-12 pt-6">
          <IconTitle title="Other Technologies" Icon={SiGraphql} />
          <Knowledge knowledge={data?.skills[0].technologies} />
        </li>
      </ul>
    </>
  );
}
