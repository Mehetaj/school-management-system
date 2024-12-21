import { GraduationCap } from 'lucide-react';
import Link from 'next/link';


const Logo = ({ variant = "light" }: { variant?: "dark" | "light" }) => {

    if (variant === "light") {
        return (
            <Link href={"/"} className="flex items-center space-x-2">
                <div className="bg-blue-500 text-white rounded-full p-1">
                    <GraduationCap />
                </div>
                <span className="font-bold text-xl">SMSW</span>
            </Link>
        )
    } else {
        return (
            <Link href={"/"} className="flex text-white items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-1">
                    <GraduationCap />
                </div>
                <span className="font-bold text-xl">SMSW</span>
            </Link>
        )
    }
};

export default Logo;