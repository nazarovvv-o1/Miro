import Image from "next/image";
import React from "react";

export default function Cards() {
  return (
    <section className="max my-20 pt-20 pb-20 flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-bold text-5xl leading-14">
          Loved by the world's best teams
        </h1>
        <button
          aria-label="See all customers"
          className="min-w-[280px] h-12 flex items-center justify-center rounded-3xl cursor-pointer border border-[#4262FF] text-[#4262FF] font-normal text-[18px] leading-6 hover:bg-[#4262FF] hover:text-white"
        >
          See all customer stories →
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left">
          <Image
            width={285}
            height={60}
            src="/cards/vmware.png"
            alt="vmware img"
            className="shadow-2xl"
          />
          <p className="text-[#05003899] font-normal text-[18px] leading-6">
            “When the pandemic hit, those of us who thrive on in-person
            collaboration were worried that our creativity and productivity
            would suffer. Miro was the perfect tool to help us with
            collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className="flex items-center gap-4">
            <Image width={48} height={48} src="/cards/user1.png" alt="" />
            <div>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Roxanne Mustafa
              </h4>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Design Team Lead at VMware
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left">
          <Image
            width={285}
            height={60}
            src="/cards/DocuSign.png"
            alt="DocuSign img"
            className=""
          />
          <p className="text-[#05003899] font-normal text-[18px] leading-6">
            “Miro helps solve one of the major gaps in product design: how to
            manage tasks across product designers whose projects are in
            different tools.”
          </p>
          <div className="flex items-center gap-4">
            <Image width={48} height={48} src="/cards/user2.png" alt="" />
            <div>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Roxanne Mustafa
              </h4>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Head of Design at DocuSign
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[450px] flex flex-col justify-between p-9 gap-8 text-left">
          <Image
            width={285}
            height={60}
            src="/cards/frog.png"
            alt="frog img"
            className="shadow-2xl"
          />
          <p className="text-[#05003899] font-normal text-[18px] leading-6">
            “As we used Miro we moved from skepticism to belief to innovation,
            and now we have a tool that’s at the core of what we do and will
            continue to extend into the future.”
          </p>
          <div className="flex items-center gap-4">
            <Image width={48} height={48} src="/cards/user3.png" alt="" />
            <div>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Roxanne Mustafa
              </h4>
              <h4 className="text-[#05003899] text-[14px] font-normal leading-5">
                Associate Design Director at frog
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
