import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-blue-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className="text-7xl text-purple-500" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
