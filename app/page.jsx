"use client";

import { TimerInput } from "./TimerInput";
import Image from "next/image";
import dali from "../public/images/persistenceTime.jpg";
import pinkfloyd from "../public/images/pinkfloyd.jpg";

export default function Home() {
  return (
    <main className=" flex flex-row min-h-screen bg-custom-radial">
      <div className=" flex-auto justify-center items-center relative w-[15rem] h-[15rem] mr-5">
        <div className="mx-auto mt-5 w-[15rem] h-[15rem]  rounded-lg shadow-[0_0_30px_25px_rgba(255,255,255,0.8)]">
          <Image
            src={pinkfloyd}
            alt="Pink Floyd"
            // layout="fill"
            className=" rounded-lg "
          />
        </div>
      </div>
      <TimerInput />
      <div className="flex-auto justify-center items-center  w-[15rem] h-[15rem] ml-5">
        <div className="mx-auto mt-5 w-[20rem] rounded-lg shadow-[0_0_30px_25px_rgba(255,255,255,0.8)]">
          <Image
            src={dali}
            alt="Dali"
            // layout="fill"
            className=" rounded-lg  "
          />
        </div>
      </div>
    </main>
  );
}
