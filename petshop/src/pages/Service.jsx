import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FaWhatsapp } from "react-icons/fa";

const data = [
  {
    title: "Banho e Tosa",
    icon: <img src={assets.banho} alt="Banho e Tosa" width={50} height={50} />, 
    text: "Nosso serviço de banho e tosa garante que seu pet fique limpo, cheiroso e bem cuidado. Utilizamos produtos de alta qualidade e técnicas seguras para proporcionar o máximo de conforto ao seu animal."
  },
  {
    title: "Transporte",
    icon: <img src={assets.transporte} alt="Transporte" width={50} height={50} />, 
    text: "Oferecemos transporte seguro e confortável para o seu pet, garantindo que ele chegue ao destino com segurança e tranquilidade."
  },
  {
    title: "Vendas de acessórios, alimentos e remédios",
    icon: <img src={assets.petfood} alt="Vendas de acessórios, alimentos e remédios" width={50} height={50} />, 
    text: "Aqui você encontra tudo o que seu pet precisa: acessórios, alimentos de alta qualidade e medicamentos veterinários aprovados para o bem-estar do seu amigo."
  },
  {
    title: "Veterinário",
    icon: <img src={assets.veterinario} alt="Veterinário" width={50} height={50} />, 
    text: "Contamos com profissionais especializados para cuidar da saúde do seu pet, oferecendo consultas, vacinas e atendimentos emergenciais."
  },
  {
    title: "Hospedagem",
    icon: <img src={assets.hospedagem} alt="Hospedagem" width={50} height={50} />, 
    text: "Proporcionamos um ambiente seguro e acolhedor para seu pet durante sua ausência, garantindo conforto e cuidado especial."
  },
  {
    title: "Dog Walker",
    icon: <img src={assets.dogwalker} alt="Dog Walker" width={50} height={50} />, 
    text: "Oferecemos passeios diários para o seu cão, garantindo exercícios, diversão e bem-estar ao longo do dia."
  }
];

const Service = () => {
  return (
    <div className='pt-28 px-10'>
      <Navbar />
      <div className="w-full flex justify-center items-center mb-6">
        <Title text="Serviços" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 pb-6">
        {data.map((item, index) => (
          <Card key={index} sx={{ width: '100%', maxWidth: 400, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 2, boxShadow: 3, px: 2, py: 2, backgroundColor: '#ead3cc' }}>
            <CardContent className="flex flex-col items-center text-center space-y-4 flex-grow">
              {item.icon}
              <Typography variant="h5" component="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {item.title}
              </Typography>
              <div className='pt-7'>
              <Typography variant="body3" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                {item.text}
              </Typography>
              </div>
              <div className="mt-auto">
                <Button variant="contained" href="#contained-buttons">
                  <FaWhatsapp className='h-9 w-9 px-2' />
                  Saiba Mais
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Service