import reactIcon from "../../assets/react.svg";
import tsIcon from "../../assets/typescript.svg";
import jsIcon from "../../assets/javascript.svg";
import twIcon from "../../assets/tailwind.svg";
import awsIcon from "../../assets/Aws.svg";
import gitIcon from "../../assets/git.svg";

const images = [
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
        <h2 className="text-greyCustom flex justify-center text-center text-2xl leading-normal sm:text-3xl md:text-4xl">
          Functionality Oriented <br /> Web Developer
        </h2>

        <aside className="flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-auto w-12 max-w-full xs:w-14 sm:w-16 lg:w-20"
            />
          ))}
        </aside>
      </section>
    </>
  );
};

export default IntroSection;
