import { assets } from "../assets/assets";
import { FaInstagram } from "react-icons/fa";
import Title from "../components/Title";
import Navbar from "../components/Navbar";

export default function ContactSection() {
  return (

    <section className="flex flex-col md:flex-row items-center md:items-start px-6 py-12 max-w-6xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <Title text="Entre em contato" />
        <div className="text-lg pt-5">
          <p className="font-semibold">ENDEREÇO</p>
          <p>Rua Alegre, 123</p>
          <p>Cidade Brasileira - EB</p>
          <p className="font-semibold mt-4">HORÁRIO DE ATENDIMENTO</p>
          <p>Segunda a Sexta: 08:30 - 12:00 e 14:00 - 18:00</p>
          <p>Sábado: 08:30 - 12:00</p>
          <p className="font-semibold mt-4">E-MAIL</p>
          <p>ola@grandesite.com.br</p>
          <p className="font-semibold mt-4">TELEFONE</p>
          <p>(12) 3456-7890</p>
          <div className="mt-6 flex justify-center md:justify-start">
            <FaInstagram className="w-9 h-9" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
        <img src={assets.contact} alt="Contato" className="w-full lg:h-1/2 object-cover rounded-lg shadow-md" />
      </div>
    </section>
  );
}
