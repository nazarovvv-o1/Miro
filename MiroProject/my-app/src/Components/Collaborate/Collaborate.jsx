import CollaborateDate from "../../Data/Collaborate/CollaborateData";

export default function Collaborate() {
  return (
    <div className="max h-[476px] flex flex-col items-center">
      <div>
        <h1 className="text-center font-bold text-5xl leading-14">
          Collaborate without <br /> constraints
        </h1>
      </div>
      <div className="flex items-center gap-44  mt-12">
        {CollaborateDate.map((items) => (
          <div
            key={items.id}
            className="text-start pt-[23px] pr-[22px] pl-[24px] pb-[44px]"
          >
            <h1 className="font-bold text-2xl leading-7 text-[rgba(5,0,56,1)]">
              {items.h1}
            </h1>
            <p className="font-normal text-lg leading-6 w-[313px] pt-[29px]">
              {items.p}
            </p>
          </div>
        ))}
      </div>
      <button className="bg-[rgba(66,98,255,1)] rounded-3xl border-1 border-[rgba(66,98,255,1)] pt-[10px] pl-[29px] pb-[14px] pr-[28px] text-[white] mt-[28px]">
        Sign up free →
      </button>
    </div>
  );
}
