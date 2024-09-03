"use client";

import { TimerInput } from "./TimerInput";
import Image from "next/image";
import dali from "../public/images/persistenceTime.jpg";
import pinkfloyd from "../public/images/pinkfloyd.jpg";
import { useEffect } from "react";

export default function Home() {
  // Demande la permission pour les notifications une seule fois lors du montage du composant
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission status:", permission);
      });
    }
  }, []);

  return (
    <main className=" min-h-screen min-w-screen bg-custom-radial">
      <div className="flex flex-row ">
        <div className=" flex-1 justify-center items-center mr-5 ">
          <div className="mx-auto mt-5 w-1/2 rounded-lg shadow-[0_0_30px_25px_rgba(255,255,255,0.8)] hover:animate-spin">
            <Image
              src={pinkfloyd}
              alt="Pink Floyd"
              // layout="fill"
              className=" rounded-lg "
            />
          </div>
        </div>
        <TimerInput className="flex-1" />
        <div className="flex-1 justify-center items-center  ml-5">
          <div className="mx-auto mt-5 w-1/2 rounded-lg shadow-[0_0_30px_25px_rgba(255,255,255,0.8)] hover:animate-spin">
            <Image
              src={dali}
              alt="Dali"
              // layout="fill"
              className=" rounded-lg  "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
