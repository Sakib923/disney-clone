import React from "react";
import logo from "./../assets/Images/logo.png";
import HeaderItem from "./HeaderItem";
import {HiMagnifyingGlass,
    HiHome,
    HiStar,HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from "react-icons/hi";


function Header(){
    const menu = [
        {
            name: "Home",
            icon: HiHome
        },
        {
            name: "Search",
            icon: HiMagnifyingGlass
        },
        {
            name: "Watchlist",
            icon: HiStar
        },
        {
            name: "Originals",
            icon: HiPlus
        },
        {
            name: "Movies",
            icon: HiPlayCircle
        },
        {
            name: "Series",
            icon: HiTv,
        }
    ]
    return (
        <div className="flex items-center gap-8">
            <img src={logo} className="w-[80px] object-cover md:w-[115px]" />
            {menu.map((item, index) => (
                <HeaderItem key={index} Icon={item.icon} title={item.name} />
            ))}        
        </div>
    )
}

export default Header;