"use client";

import { TimerInput } from "./TimerInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-row min-h-screen mt-5">
      <div className="flex flex-auto justify-center items-center relative w-[10rem] h-[10rem] border-white border-2">
        <Image
          src="/images/pinkfloyd.jpg"
          alt="Pink Floyd"
          layout="fill"
          className="object-contain"
        />
      </div>
      <TimerInput className=" border-red-500 border-2 " />
      <div className="flex flex-auto justify-center items-center relative w-[10rem] h-[10rem] border-white border-2">
        <Image
          src="/images/persistenceTime.jpg"
          alt="Dali"
          layout="fill"
          className="object-contain"
        />
      </div>
    </main>
  );
}
