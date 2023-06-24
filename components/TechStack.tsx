import Image from "next/image";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import sass from "../assets/sass.png";
import git from "../assets/git-orange.png";
import github from "../assets/github.png";

const TechStack = () => {
  return (
    <div className=" pb-[6rem]">
      {/* Tech stack with icons and names only go below. */}
      <h2 className=" mb-[2rem] text-[2rem] text-[#ebebeb] md:text-[3rem]">
        Current Ecosystem
      </h2>
      <div className="grid grid-cols-3 gap-8 text-center text-xl text-[#d6d6d6] md:grid-cols-4 md:text-2xl">
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={javascript} alt="javascript" width={100} height={100} />
          <span>JAVASCRIPT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={nextjs} alt="nextjs" width={100} height={100} />
          <span>NEXT.JS</span>
        </div>{" "}
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={react} alt="react" width={100} height={100} />
          <span>REACT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={html} alt="html" width={100} height={100} />
          <span>HTML 5</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={reactNative} alt="reactNative" width={100} height={100} />
          <span>REACT-NATIVE</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={css} alt="css" width={100} height={100} />
          <span>CSS 3</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={typescript} alt="typescript" width={100} height={100} />
          <span>TYPESCRIPT</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={sass} alt="sass" width={100} height={100} />
          <span>SASS</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={tailwindcss} alt="tailwindcss" width={100} height={100} />
          <span>TAILWIND CSS</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={github} alt="github" width={100} height={100} />
          <span>GITHUB</span>
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-between">
          <Image src={git} alt="git" width={100} height={100} />
          <span>GIT</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
