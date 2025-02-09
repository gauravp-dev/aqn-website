/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
export default function SvgComponent() {
  return (
    <div className="flex justify-center items-center relative">
    <Image src="feature.svg" alt="My Logo" width={511} height={384} />
  </div>
  );
}
       

  