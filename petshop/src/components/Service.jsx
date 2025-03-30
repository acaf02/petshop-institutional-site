import React from 'react';
import { assets } from '../assets/assets';
import Title from "../components/Title";
import { Link } from 'react-router-dom';

const categories = [
  { name: "Banho e Tosa", image: assets.banho },
  { name: "Transporte", image: assets.transporte },
  { name: "Vendas de acessórios, alimentos e remédios", image: assets.petfood },
  { name: "Veterinário", image: assets.veterinario },
  { name: "Hospedagem", image: assets.hospedagem },
  { name: "Dog Walker", image: assets.dogwalker },
];

export default function HeroSection() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.service})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-4">
        <div className="w-full flex justify-center items-center mb-6">
          <Title text="Serviços" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-white/10 backdrop-blur-md rounded-lg w-full max-w-4xl">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center text-white">
              <img src={category.image} alt={category.name} className="md:w-20 md:h-20 w-14 h-14 object-contain filter invert" />
              <p className="mt-2 text-sm sm:text-base">{category.name}</p>
            </div>
          ))}
        </div>

        <div className="py-6 sm:py-10">
          <Link to="/service">
            <button className="bg-black text-white font-medium py-2 px-6 sm:px-12 rounded-4xl hover:bg-purple-700  cursor-pointer transition">
              SAIBA MAIS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
