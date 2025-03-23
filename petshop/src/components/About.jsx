import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Title from './Title';

const About = () => {
    return (
        <section className="w-full px-10 md:px-28 py-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/3">
                <div className="md:pb-4">
                    <Title text="Sobre mim" />

                </div>
                <img
                    src={assets.about}
                    alt="Ambiente decorado"
                    className="rounded-xl w-full"
                />
            </div>

            <div className="w-full md:w-2/3 flex flex-col items-start md:pl-8">
                <p className="text-base text-gray-700 md:pt-28">
                    Na Lumus Solem Petshop, acreditamos que cuidar de um pet vai muito além de oferecer produtos e serviços — é sobre amor, confiança e bem-estar. Nossa loja nasceu do carinho e da dedicação aos animais, com o propósito de oferecer tudo o que seu pet precisa para viver com saúde, alegria e qualidade de vida.
                </p>

                <div className="py-10">
                    <Link to="/about">
                        <button className="bg-black text-white font-medium py-2 px-12 rounded-4xl hover:bg-purple-700 transition">
                            SAIBA MAIS
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
