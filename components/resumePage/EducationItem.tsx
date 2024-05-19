import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { ExperienceData } from "../../types";

interface Props {
  resume: ExperienceData;
  border?: boolean;
}

export default function EducationItem({ resume, border }: Props) {
  return (
    <div
      className={`pt-11 ${
        border ? "customLine before:bottom-0 relative borderLeft pb-11" : "pb-3"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div>
          <h4 className="text-2xl capitalize font-medium text-gray-300 tracking-wide mt-5 mb-4">
            {resume.title}
          </h4>
          <h4 className="text-gray-500 text-xl capitalize tracking-wider">
            {resume.subTitle}
          </h4>
        </div>
        <div
          className={
            "text-main-orange border-main-orange border border-solid text-xl py-0.5 px-3 tracking-wide inline-block"
          }
        >
          {resume.badge}
        </div>
        {/* {resume.logo && (
          <Image
            src={resume.logo.url}
            alt="linkedin"
            width={100}
            height={27}
            objectFit="contain"
            className="opacity-80 hidden"
          />
        )} */}
      </div>

      <p className="text-gray-500 text-2xl capitalize tracking-wide mt-5 leading-relaxed whitespace-pre-wrap break-all">
        {resume.desc}
      </p>
    </div>
  );
}
