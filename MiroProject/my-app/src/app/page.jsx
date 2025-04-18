"use client";
import Navbar from "@/Components/Navbar/Navbar";
import TakeIdeas from "@/Components/TakeIdeas/TakeIdeas";
import Trusted from "@/Components/Trusted/Trusted";
import Collaborate from "@/Components/Collaborate/Collaborate";
import WorkTogether from "@/Components/WorkTogether/WorkTogether";
import Connect from "@/Components/Connect/Connect";
import TheWays from "@/Components/TheWays/TheWays";
import MainSection from "@/Components/Section/MainSection";
import { Check } from "@mui/icons-material";
import Image from "next/image";
import YellowSection from "@/Components/Section/YellowSection";
import Cards from "@/Components/cards/Cards";
import Statisic from "@/Components/sts/Statisic";

const FirstComp = () => {
  return (
    <div className="w-[350px] py-8 px-4 flex flex-col gap-6 items-start">
      <h4 className="text-[#050038] text-[18px] leading-6">
        First Component Title
      </h4>
      <p className="text-[#050038B2] text-[18px] leading-6">
        This is the description for the first component.
      </p>
      <button
        aria-label="learn more"
        className="font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer"
      >
        Learn More →
      </button>
    </div>
  );
};

const SecondComp = () => {
  return (
    <div className="w-[350px] py-8 px-4 flex flex-col gap-16 items-start">
      <div className="w-full flex flex-col items-start gap-8">
        <ul className="w-full text-[#05003899] font-normal text-[18px] leading-6 flex flex-col gap-4">
          <li>
            <Check /> Feature 1
          </li>
          <li>
            <Check /> Feature 2
          </li>
          <li>
            <Check /> Feature 3
          </li>
        </ul>
        <button
          aria-label="learn more"
          className="font-normal text-[18px] leading-6 text-[#4262FF] cursor-pointer"
        >
          Learn More →
        </button>
      </div>
      <div className="w-full flex flex-col gap-3.5">
        <h5 className="font-normal text-[18px] leading-6 text-[#05003899]">
          Second Component Title
        </h5>
        <div className="w-full flex gap-8">
          <Image
            src="/section-logos/FirstLogo.png"
            alt="olmos logo"
            width={25}
            height={25}
          />
          <Image
            src="/section-logos/SecondLogo.png"
            alt="xd logo"
            width={25}
            height={25}
          />
          <Image
            src="/section-logos/ThirdLogo.png"
            alt="figma logo"
            width={25}
            height={25}
          />
          <Image
            src="/section-logos/FourthLogo.png"
            alt="qanaqadu n"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const arr = [
    "Brainstorming",
    "Diagramming",
    "Meetings & Workshops",
    "Scrum Events",
    "Mapping",
    "Research & Design",
    "Strategic Planning",
  ];
  const data = [
    {
      title: "ISO",
      text: "ISO-27001 enterprise-grade security compliant",
    },
    {
      title: "#1",
      text: "Visual Collaboration Platform on G2",
    },
    {
      title: "99%",
      text: "of the Fortune 100 are customers",
    },
    {
      title: "1,000+",
      text: "community- and expert-built templates",
    },
    {
      title: "45M+",
      text: "users around the world",
    },
    {
      title: "100+",
      text: "integrations with technology partners",
    },
  ];
  return (
    <div>
      <Navbar />
      <TakeIdeas />
      <Trusted />
      <Collaborate />
      <WorkTogether />
      <Connect />
      <TheWays />
      <MainSection
        comp={FirstComp}
        title={"Built for the way you work"}
        data={arr}
        img={"/img/firstComp.png"}
      />
      <MainSection
        comp={SecondComp}
        title={"Built for all kinds of teams"}
        data={arr}
        img={"/img/firstComp.png"}
      />
      <YellowSection data={data} />
      <Cards />
      <Statisic />
    </div>
  );
}
