import React from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, Typography } from '@mui/material';
import { FaBullseye, FaLightbulb, FaBalanceScale } from 'react-icons/fa';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const data = [
  {
    title: "Missão",
    icon: <FaBullseye className="text-red-500 text-6xl" />, 
    text: "Oferecer cuidado e bem-estar para os pets, garantindo qualidade e carinho em nossos serviços."
  },
  {
    title: "Visão",
    icon: <FaLightbulb className="text-blue-500 text-6xl" />, 
    text: "Ser referência no setor pet, proporcionando inovação e excelência no atendimento."
  },
  {
    title: "Valores",
    icon: <FaBalanceScale className="text-yellow-500 text-6xl" />, 
    text: "Amor pelos animais, excelência no atendimento, bem-estar animal, confiança e sustentabilidade."
  }
];

const About = () => {
  return (
    <div className='pt-28 px-6 md:px-12'>
      <Navbar />
      <div className="w-full flex justify-center items-center mb-6">
      <Title text="Sobre Nós" />
      </div>
      <div className="mx-auto text-center px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={assets.about1} className=' h-auto object-cover rounded-lg shadow-lg' alt="Cachorro feliz" />
        <p className="text-xl text-gray-700 leading-relaxed">
        Pet Encanto Petshop, acreditamos que cuidar de um pet vai muito além de oferecer produtos e serviços — é sobre amor, confiança e bem-estar. Nossa loja nasceu do carinho e da dedicação aos animais, com o propósito de oferecer tudo o que seu pet precisa para viver com saúde, alegria e qualidade de vida.
        </p>
        <div>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Aqui, cada detalhe foi pensado com afeto: desde os alimentos selecionados, brinquedos e acessórios, até os serviços especializados de banho, tosa e cuidados personalizados. Nosso compromisso é proporcionar um atendimento acolhedor e profissional, sempre colocando o bem-estar do seu pet em primeiro lugar.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Mais do que um petshop, somos um espaço onde você encontra tudo o que seu melhor amigo precisa — e merece.
          </p>
        </div>
        <img src={assets.about2} className='w-full h-auto object-cover rounded-lg shadow-lg' alt="Gato fofo" />
      </div>
      <div className="w-full flex pt-13 justify-center items-center mb-6">
      <Title text="Missão, Visão e Valores"/>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-6">
        {data.map((item, index) => (
          <Card key={index} sx={{ width: '100%', maxWidth: 400, height: 300, borderRadius: 2, boxShadow: 3, px: 2, py:2 }}>
            <CardContent className="flex flex-col items-center text-center space-y-6">
              {item.icon}
              <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', textAlign: 'center', pb: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body3" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
