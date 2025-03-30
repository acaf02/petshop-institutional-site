import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex bg-custom-pink md:pl-38 flex-col sm:grid lg:grid-cols-[2.5fr_2fr] items-center mt-6 text-sm pb-10 sm:justify-center">
                <div className="my-5 flex flex justify-center md:justify-start flex-row gap-28">
                    <div className="pt-2 flex flex-col md:flex-row items-center" >
                        {" "}
                        <Link to="/">
                            <img
                                src={assets.logo}
                                className="w-44 h-auto pt-2 pr-10"
                                alt="about us"
                            />
                        </Link>
                        <p className='w-full md:w-2/4 pt-6 px-8 md:px-0 text-black'>
                            A nome nasceu da paixão pelos pets e do desejo de transformar o cuidado com os animais em uma experiência cheia de carinho, confiança e bem-estar.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-32 gap-28 pt-2">
                    {/* Seção Companhia */}
                    <div className="flex flex-col items-start gap-2 pt-5">
                        <p className="justify-left text-black pt-2 sm:pt-0 font-semibold">
                            COMPANHIA
                        </p>
                        <ul className="flex flex-col gap-2 text-black">
                            <a
                                href="/about"
                                className="hover:ml-3 transform duration-300 text-xs md:text-sm"
                            >
                                Sobre Nós
                            </a>
                        </ul>
                        <ul className="flex flex-col gap-2 text-black">
                            <a
                                href="/service"
                                className="hover:ml-3 transform duration-300 text-xs md:text-sm"
                            >
                                Serviços
                            </a>
                        </ul>
                    </div>

                    {/* Seção Entre em Contato */}
                    <div className="flex flex-col gap-2 md:w-2/4 items-start pt-5">
                        <p className="justify-left text-black pt-2 sm:pt-0 font-semibold">
                            ENTRE EM CONTATO
                        </p>
                        <ul className="flex flex-col gap-2 text-black">
                            <a
                                href="/contact"
                                className="text-xs md:text-sm hover:ml-3 transform duration-300"
                            >
                                Contate-Nos
                            </a>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-custom-pink text-black">
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright 2025 - Todos os direitos
                </p>
            </div>
        </div>
    );
};

export default Footer;