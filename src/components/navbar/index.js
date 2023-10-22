'use client'

import {CiMenuFries} from "react-icons/ci";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {Rubik_Glitch} from 'next/font/google';

const rubikGlitch = Rubik_Glitch({
    weight: '400',
    subsets: ['latin']
});

const Navbar = () => {
    const [isClick, setIsClick] = useState(false)

    const toggleNavbar = () => {
        setIsClick(!isClick)
    }

    return (
        <>
            <nav className={'bg-[#040A21]'}>
                <div className={'container'}>
                    <div className={'flex items-center justify-between h-16'}>
                        <div className={'flex items-center'}>
                            <div className={'flex-shrink-0'}>
                                <a href={'/'} className={'text-[#6E28D8] font-bold text-2xl'}>
                                    <span className={`text-white ${rubikGlitch.className}`}>BGDF</span>Anime
                                </a>
                            </div>
                        </div>
                        <div className={'hidden lg:block'}>
                            <div className={'ml-4 flex items-center space-x-4'}>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Beranda
                                </a>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Serial
                                </a>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Movie
                                </a>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Live Action
                                </a>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Donghua
                                </a>
                                <a href={'/'} className={'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
                                    Genre
                                </a>
                            </div>
                        </div>
                        <div className={'lg:hidden flex items-center'}>
                            <button
                                className={'inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'}
                                onClick={toggleNavbar}>
                                {isClick ? (
                                    <AiOutlineClose className={'text-2xl'}/>
                                ) : (
                                    <CiMenuFries className={'text-2xl'}/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className={'lg:hidden'}>
                        <div className={'container pt-2 pb-3 space-y-1'}>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Home
                            </a>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Serial
                            </a>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Movie
                            </a>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Live Action
                            </a>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Donghua
                            </a>
                            <a href={'/'} className={'text-white block hover:bg-white hover:text-black rounded-lg p-2'}>
                                Genre
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar