"use client";

import { TimerInput } from "./TimerInput";
import Image from "next/image";
import dali from "../public/images/persistenceTime.jpg";
import pinkfloyd from "../public/images/pinkfloyd.jpg";

export default function Home() {
  return (
    <main className=" flex flex-row min-h-screen bg-custom-radial">
      <div className=" flex-auto justify-center items-center relative w-[15rem] h-[15rem] border-white border-2">
        <div className="mx-auto mt-5 w-[15rem] h-[15rem]  shadow-[0_0_30px_25px_rgba(255,255,255,0.8)]">
          <Image
            src={pinkfloyd}
            alt="Pink Floyd"
            // layout="fill"
            className=" rounded-lg "
          />
        </div>
      </div>
      <TimerInput className=" border-red-500 border-2 " />
      <div className="flex-auto justify-center items-center  w-[15rem] h-[15rem] border-white border-2">
        <div className="mx-auto mt-5 w-[20rem]  shadow-[0_0_30px_25px_rgba(255,255,255,0.8)]">
          <Image
            src={dali}
            alt="Dali"
            // layout="fill"
            className=" rounded-lg "
          />
        </div>
      </div>
    </main>
  );
}
