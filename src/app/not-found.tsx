import { Metadata } from "next";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

export default function NotFound() {
  return (
    <div className={"flex flex-col justify-center items-center fixed inset-0"}>
      <p className={"text-4xl m-10"}>Page Not Found</p>
      <div>
        <Link href="/">
          <button
            className={"border-2 rounded-4xl flex items-center gap-2 p-4"}
          >
            <BiArrowBack /> Go back home
          </button>
        </Link>
      </div>
    </div>
  );
}
