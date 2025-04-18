import React from "react";
import Button from "../button/Button";

export default function Statisic() {
  return (
    <section className="max h-[450px] flex flex-col items-center justify-center gap-4 bg-[#050038] text-white md:rounded-2xl rounded-none my-20 lg:px-0 px-5 ">
      <h1 className="text-5xl font-bold leading-14 text-center">
        Join 45M+ users today
      </h1>
      <div className="text-[#FFFFFF99] text-[18px] font-normal leading-6 text-center flex flex-col gap-3">
        <p>Start for free — upgrade anytime.</p>
        <p className="underline underline-offset-4">
          Joining as an organization? Contact Sales
        </p>
      </div>
      <Button />
    </section>
  );
}
