import reactIcon from "../../../assets/react.svg";
import tsIcon from "../../../assets/typescript.svg";
import jsIcon from "../../../assets/javascript.svg";
import twIcon from "../../../assets/tailwind.svg";
import awsIcon from "../../../assets/Aws.svg";
import gitIcon from "../../../assets/git.svg";
import { IconImages } from "./IntroSection.types";

const images: IconImages[] = [
  { src: reactIcon, alt: "react" },
  { src: tsIcon, alt: "typescript" },
  { src: jsIcon, alt: "javascript" },
  { src: twIcon, alt: "tailwind" },
  { src: awsIcon, alt: "AWS" },
  { src: gitIcon, alt: "git" },
];

const IntroSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center gap-12 pt-40">
        <h1 className="flex justify-center text-center text-4xl font-semibold italic text-white sm:text-5xl md:text-6xl">
          Isak Sköld
        </h1>
        <h2>
          Functionality Oriented <br /> Web Developer
        </h2>

        <aside className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-auto w-12 max-w-full rounded-full shadow-[0_-2px_12px_rgba(255,255,255,0.4),0_3px_6px_rgba(255,255,255,0.3)] sm:w-16 lg:w-20"
            />
          ))}
        </aside>
      </section>
    </>
  );
};

export default IntroSection;
