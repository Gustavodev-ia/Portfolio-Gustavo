"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Gustavo Dev</h1>
        <nav className="space-x-6">
          <Link href="#sobre" className="hover:text-blue-400">Sobre</Link>
          <Link href="#projetos" className="hover:text-blue-400">Projetos</Link>
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

      {/* Sobre Mim */}
      <section id="sobre" className="px-6 py-24 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-center">Sobre mim</h3>
        <p className="max-w-3xl mx-auto text-gray-400 text-center">
          Sou professor no SENAI PE, ministrando aulas nos cursos Técnicos de Desenvolvimento de Sistemas e Programação de Jogos Digitais. 
          Apaixonado por ensinar e criar soluções digitais que transformam vidas.
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
