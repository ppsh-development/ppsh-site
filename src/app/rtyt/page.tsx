"use client"
import Image from "next/image";
import rtyt from "../../../public/members/rtyt.png";

export default function Page() {
    return (
        <div className="hero-section">
            <div
                className="container w-1/2  px-4 border-2 border-neutral-800 rounded-4xl mx-auto flex justify-center shadow-[0_4px_6px_-1px_rgba(52,52,52,1)]"
                style={{height: "60vh"}}
            >
                <div id={"user"} className="relative flex flex-col items-center">
                    <Image
                        src={rtyt}
                        height={200}
                        width={200}
                        sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vh"}
                        alt="rtyt"
                        className="rounded-4xl mt-10 border-2 border-neutral-800 shadow-[0_4px_6px_-1px_rgba(52,52,52,1)]"
                    />
                    <p className={"text-2xl font-semibold  text text-center p-2"}>rtyt3000</p>
                </div>
                <div id={"links"} className={"flex-col items-center"}>
                    <div className={"flex justify-center"}>

                    </div>

                </div>
            </div>
        </div>
    )
}
