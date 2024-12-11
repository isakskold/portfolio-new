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
    <section className="flex flex-col justify-center pt-40 gap-12">
      <h1 className="flex justify-center text-white text-6xl text-center font-semibold italic">
        Isak Sköld
      </h1>
      <h2 className="flex justify-center text-gray-400 text-4xl text-center leading-normal">
        Functionality Oriented <br /> Web Developer
      </h2>
      <aside className="flex flex-wrap justify-center gap-1 sm:gap-3 md:gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-16 sm:w-18 md:w-20 lg:w-22 xl:w-24 max-w-full h-auto"
          />
        ))}
      </aside>
    </section>
  );
};

export default IntroSection;
