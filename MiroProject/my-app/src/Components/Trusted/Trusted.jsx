import Walmart from "../../../public/Icon/TrustedIcon/Walmart.svg";
import Cisco from "../../../public/Icon/TrustedIcon/cisco.svg";
import Volvo from "../../../public/Icon/TrustedIcon/Volvo.svg";
import Deloitte from "../../../public/Icon/TrustedIcon/deloitte.svg";
import Okta from "../../../public/Icon/TrustedIcon/okta.svg";
import Image from "next/image";

export default function Trusted() {
  return (
    <div className="mt-32 w-full flex flex-col items-center justify-center h-[284px] mb-[183px]">
      <h1 className="font-normal text-lg text-[rgba(5,0,56,0.6)] text-center mb-12">
        Trusted by 45M+ users
      </h1>
      <div className="flex items-center justify-center gap-38 flex-wrap">
        <Image src={Walmart} alt="Walmart" width={117} height={64} />
        <Image src={Cisco} alt="Cisco" width={244} height={64} />
        <div className="flex flex-col items-center">
          <Image src={Volvo} alt="Volvo" width={53} height={64} />
        </div>
        <Image src={Deloitte} alt="Deloitte" width={244} height={64} />
        <Image src={Okta} alt="Okta" width={73} height={64} />
      </div>
    </div>
  );
}
