'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
const navData = [
    {
        title: "Dashboard",
        path: "/dashboard"
    },
    {
        title: "Issues",
        path: "/issues"
    },

]

const Navbar = () => {
    const currentPath = usePathname()
    return (
        <nav className="flex border-b gap-6 h-14 items-center px-5 mb-5 ">
            <Link href="/"><FaBug /></Link>
            <ul className="flex gap-6">
                {navData.map((item) => (
                    <div key={item.title} className={`${currentPath === item.path ? 'text-blue-500' : 'text-zinc-500'}  hover:text-zinc-800 transition-colors`}>
                        <Link href={item.path}>{item.title}</Link>
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;