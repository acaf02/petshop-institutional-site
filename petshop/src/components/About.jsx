import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import Title from './Title';

const About = () => {
    return (
        <section className="w-full px-10 md:px-32 py-10 flex flex-col items-center">
            <div className="w-full text-center mb-6 py-4">
                <Title text="Sobre Nós" />
            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-8 pb-7">
                <div className="w-full md:w-1/3">
                    <img
                        src={assets.about}
                        alt="Ambiente decorado"
                        className="rounded-xl w-full"
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col items-start">
                    <p className="text-base text-gray-700">
                        Na Lumus Solem Petshop, acreditamos que cuidar de um pet vai muito além de oferecer produtos e serviços — é sobre amor, confiança e bem-estar. Nossa loja nasceu do carinho e da dedicação aos animais, com o propósito de oferecer tudo o que seu pet precisa para viver com saúde, alegria e qualidade de vida.
                    </p>

                    <div className="py-6">
                        <Link to="/about">
                            <button className="bg-black text-white font-medium py-2 px-6 md:px-12 rounded-4xl hover:bg-purple-700 transition">
                                SAIBA MAIS
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
