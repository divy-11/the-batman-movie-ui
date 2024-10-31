import { useState } from "react";
import { FaHome, FaListAlt, FaImages, FaVideo, FaUser } from "react-icons/fa";

export default function Sidebar() {
    const [selected, setSelected] = useState("HOME");

    const menuItems = [
        { name: "HOME", icon: <FaHome />, section: "home" },
        { name: "SYNOPSIS", icon: <FaListAlt />, section: "synopsis" },
        { name: "GALLERY", icon: <FaImages />, section: "gallery" },
        { name: "VIDEOS", icon: <FaVideo />, section: "videos" },
        { name: "CAST", icon: <FaUser />, section: "cast" },
    ];

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setSelected(section.toUpperCase());
    };

    return (
        <div className="fixed right-8 top-1/3 flex flex-col gap-6 text-white font-medium z-10 ">
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                        selected === item.section ? "opacity-100" : "opacity-70"
                    }`}
                    onClick={() => scrollToSection(item.section)}
                >
                    <div className="flex items-center transition-transform duration-300 hover:text-red-600">
                        <span
                            className={`transition-transform duration-300 ${
                                selected === item.section ? "scale-125" : "scale-100"
                            } mr-2`}
                        >
                            {item.icon}
                        </span>
                        <span
                            className={`transition-transform duration-300 ${
                                selected === item.section ? "text-lg scale-110" : "text-sm scale-100"
                            }`}
                        >
                            {item.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
