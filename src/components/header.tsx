import Image from "next/image";
import Link from "next/link";
import SVGIMG from "../../public/Aquilla.svg";

export function Header() {
  return (
    <header className="w-full text-white py-4">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex items-center">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors text-xl color-header">Home</Link>
          </li>
          <li className="ml-6">
            <Link href="/projects" className="hover:text-gray-300 transition-colors text-xl color-header">Projects</Link>
          </li>
          <li className="mx-4">
            <Image src={SVGIMG} alt={"Aquilla"} width={100} height={100} className="w-auto h-10"/>
          </li>
          <li className="mr-6">
            <Link href="/members" className="hover:text-gray-300 transition-colors text-xl color-header">Members</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300 transition-colors text-xl color-header">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}