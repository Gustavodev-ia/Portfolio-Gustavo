"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaJs, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Gustavo Dev</h1>
        <nav className="space-x-6">
          <Link href="#sobre" className="hover:text-blue-400">Sobre</Link>
          <Link href="#tecnologias" className="hover:text-blue-400">Tecnologias</Link>
          <Link href="#projetos" className="hover:text-blue-400">Projetos</Link>
          <Link href="#servicos" className="hover:text-blue-400">Serviços</Link>
          <Link href="#contato" className="hover:text-blue-400">Contato</Link>
          
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24">
        <motion.img 
          src="/gustavo.png" 
          alt="Foto de Gustavo Dev" 
          className="w-40 h-40 mx-auto rounded-full shadow-lg mb-6 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Fullstack Developer & Professor
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Construindo soluções digitais com HTML, CSS, JavaScript, Node.js, Express, Prisma, NextJS e MySQL.
        </motion.p>
      </section>

      <section id="tecnologias" className="px-6 py-24 bg-gray-950 border-t border-b border-gray-800">
  <h3 className="text-3xl font-bold mb-12 text-center">Tecnologias</h3>
  <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    
    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaJs className="text-yellow-400 text-4xl" />
      <span>JavaScript</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaNodeJs className="text-green-500 text-4xl" />
      <span>Node.js</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaJava className="text-red-500 text-4xl" />
      <span>Java</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaHtml5 className="text-orange-500 text-4xl" />
      <span>HTML</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaCss3Alt className="text-blue-500 text-4xl" />
      <span>CSS</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <SiExpress className="text-gray-400 text-4xl" />
      <span>Express</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <FaGitAlt className="text-orange-400 text-4xl" />
      <span>Git</span>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-2 hover:shadow-lg transition">
      <SiMysql className="text-blue-400 text-4xl" />
      <span>MySQL</span>
    </div>

  </div>
</section>

      {/* Sobre Mim */}
      <section id="sobre" className="px-6 py-24 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-center">Sobre mim</h3>
        <p className="max-w-3xl mx-auto text-gray-400 text-center">
         Sou Gustavo, desenvolvedor de software e professor de programação, apaixonado por tecnologia e educação. Tenho experiência prática na criação de soluções modernas e eficientes. Atualmente, atuo como professor no SENAI PE e na formação da SOFTEX. Acredito no poder transformador do ensino e na importância de evoluir continuamente. Cada desafio é uma chance de crescer e inspirar outros.
        </p>
      </section>

      
      <section id="projetos" className="px-6 py-24">
  <h3 className="text-3xl font-bold mb-12 text-center">Projetos</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Projeto 1 - Blog com Painel Admin */}
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-4">Blog com Painel Admin</h4>
      <div className="mb-4">
        <img src="/images/blog.gif" alt="Blog com Painel Admin" className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-gray-400">
        Este é um projeto completo de um blog com painel administrativo, desenvolvido com Node.js, Express, Sequelize e MySQL no backend, e Next.js no frontend. O sistema permite o cadastro, autenticação de usuários e a criação de posts.
      </p>
    </div>

    {/* Projeto 2 - Galeria de Imagens */}
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-4">Galeria de Imagens</h4>
      <div className="mb-4">
        <img src="/images/galeria.gif" alt="Galeria de Imagens" className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-gray-400">
        Este é um projeto completo de uma galeria de imagens, desenvolvido com Node.js, Express, Sequelize e MySQL no backend, e Next.js no frontend. O sistema permite o cadastro, autenticação de usuários e a criação de posts.
      </p>
    </div>

    {/* Projeto 3 - TaskZen */}
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-4">TaskZen</h4>
      <div className="mb-4">
        <img src="/images/taskzen.gif" alt="TaskZen" className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-gray-400">
        Projeto TaskZen - Lista de Tarefas. Desenvolvido com Node.js, Express, Prisma e MySQL no backend, e Next.js no frontend.
      </p>
    </div>

    {/* Projeto 4 - Tela de Login */}
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-4">Projeto Petshop</h4>
      <div className="mb-4">
        <img src="/images/petshop.gif" alt="Tela de Login" className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-gray-400">
        Este projeto é um sistema completo de um Petshop com backend em Node.js e Express e frontend em Next.js. Ele permite cadastrar um novo pet ao sistema e fazer agendamentos de servicos como banho, tosa, etc.
      </p>
    </div>
  </div>
</section>

{/* Serviços Section */}
<section id="servicos" className="px-6 py-24 bg-gray-950 border-t border-b border-gray-800">
  <h3 className="text-3xl font-bold mb-12 text-center">Serviços</h3>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Hospedagem de Sites */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/icons/server.png" alt="Hospedagem de Sites" className="w-12 h-12"/>
      <h4 className="text-xl font-bold">Hospedagem de Sites</h4>
      <p className="text-gray-400 text-center text-sm">
        Hospedagem rápida, segura e confiável, mantendo seu site online 24h com backups automáticos e SSL incluso.
      </p>
    </motion.div>

    {/* Registro de Domínios */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/icons/domain.png" alt="Registro de Domínios" className="w-12 h-12"/>
      <h4 className="text-xl font-bold">Registro de Domínios</h4>
      <p className="text-gray-400 text-center text-sm">
        Registro e configuração de domínios profissionais, DNS ajustado e suporte completo para sua empresa.
      </p>
    </motion.div>

    {/* Criação de Sites */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/icons/website.png" alt="Criação de Sites" className="w-12 h-12"/>
      <h4 className="text-xl font-bold">Criação de Sites</h4>
      <p className="text-gray-400 text-center text-sm">
        Desenvolvimento de sites modernos, responsivos e personalizados, otimizados para SEO e conversão.
      </p>
    </motion.div>

    {/* E-mails Profissionais */}
    <motion.div
      className="bg-gray-800 p-6 rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/icons/email.png" alt="E-mails Profissionais" className="w-12 h-12"/>
      <h4 className="text-xl font-bold">E-mails Profissionais</h4>
      <p className="text-gray-400 text-center text-sm">
        Criação de e-mails com seu domínio, configurando SPF, DKIM e DMARC para máxima entrega e credibilidade.
      </p>
    </motion.div>

  </div>
</section>


      {/* Contato */}
      <section id="contato" className="px-6 py-24 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-center">Contato</h3>
        <p className="text-center text-gray-400 mb-6">Vamos construir algo juntos? Me chame!</p>
        <div className="flex justify-center space-x-6">
        <Link href="gustavosoftex@gmail.com" className="hover:text-blue-400">Email</Link>
        <Link href="https://github.com/Gustavodev-ia/" className="hover:text-blue-400">GitHub</Link>
        <Link href="https://www.linkedin.com/in/gustavo-rodrigues-aa466a349/" className="hover:text-blue-400">LinkedIn</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-600 text-sm border-t border-gray-800">
        &copy; 2025 Gustavo Dev. Todos os direitos reservados.
      </footer>
    </main>
  );
}
