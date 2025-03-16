import Link from "next/link";
import {FaGithub, FaTelegram} from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer mt-auto py-4 px-4">
            <p>© PPSh, {new Date().getFullYear()}</p>
            <div className="social-links">
                <Link href="https://t.me/ppsh_development" aria-label="Telegram">
                    <FaTelegram size={24} />
                </Link>
                <Link href="https://github.com/ppsh-development" aria-label="GitHub">
                    <FaGithub size={24} />
                </Link>
            </div>
        </footer>
    )
}