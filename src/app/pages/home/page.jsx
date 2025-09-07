"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./styles.css";
import Lottie from "react-lottie-player";
import bgJson from "../../../../public/Hologram.json";
import bgWebJson from "../../../../public/flexibilility.json";

import js from "../../../../public/js.png";
import react from "../../../../public/react.png";
import reactnative from "../../../../public/native.png";
import node from "../../../../public/node.png";

function useAnimateOnScroll(className = "animate-in-up") {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("invisible-on-scroll");
          el.classList.add(className);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}


export default function Home() {

   const cardRef1 = useAnimateOnScroll("animate-in-left");
   const cardRef2 = useAnimateOnScroll("animate-in-right");
   const cardRef3 = useAnimateOnScroll("animate-in-left");

   // Cria 100 estrelas com posições e animações aleatórias
  const stars = Array.from({ length: 100 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10; // 10s a 20s
    const delay = Math.random() * 10; // 0s a 10s
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: Math.random(),
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  const handlewpp = () =>{
    window.location.href = "https://wa.me/5534988611665"; 
  }

  const handleemail = () =>{
    window.location.href = "mailto:gabriel.c.souza001@gmail.com";
  }

  const handlegit = () =>{
    window.location.href = "https://github.com/GCode-S";
  }


  return (
    <div>
      {stars}
      <header className="animate-in-right animate-delay-1">
        <h1 id="inicio">

          Gabriel <span>S.</span>
        </h1>
        <nav>
          <a href="#inicio"></a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <div className="title animate-in-right animate-delay-3">
         
          
          <h1>GCode-S</h1>
          <h1>No Universo Dev</h1>
          <h3>transformando ideias em experiências digitais únicas </h3>
         
           <Lottie
            loop
            animationData={bgJson}
            play
            className="lottie animate-in-left animate-delay-4"
          />
        </div>
        <h2 className="content animate-in-left animate-delay-4" >Sobre</h2>
        <div className="content invisible-on-scroll" ref={cardRef2} id="sobre"  >
          
          <p >
            Sou natural de Minas Gerais e, desde os 15 anos, me dedico de forma
            autodidata ao aprendizado em programação, sempre em busca de evoluir
            e conquistar uma oportunidade na área de desenvolvimento. Ao longo
            da minha jornada, já desenvolvi projetos reais para terceiros. Entre
            eles:
          </p>
          <p className="topic">
            <span>Control-Fornecedor:</span> um sistema para cadastro de
            vendedores e produtos, voltado ao gerenciamento de pedidos de uma
            rede de supermercados, otimizando o controle e a organização das
            operações.
          </p>
          <p className="topic">
            <span>Landing Page Catálogo Lash Designer:</span> página criada para
            apresentar o catálogo de produtos de forma moderna, leve e
            profissional, com foco em responsividade, garantindo ótima
            experiência em dispositivos mobile, tablet e desktop.
          </p>
          <p>
            Meu objetivo é seguir crescendo como desenvolvedor e transformar
            ideias em soluções funcionais e criativas.
          </p>
          <h2 id="projeto">Projetos</h2>
          <div className="card invisible-on-scroll" ref={cardRef1}>
            <div className="card-item">
              <h1>Controll-Fornecedor</h1>
              <p>
                Aplicativo desenvolvido em html5 e javascript para gerenciar o
                controle de compras por determinado fornecedor.
              </p>
              <div className="actions-card">
                <div className="bg-icons-card"></div>
                <a href="https://github.com/GCode-S/Controll-Fornecedor" className="git"></a>
                <a href="https://inquisitive-croquembouche-d8a8e4.netlify.app/html/home/home.html" className="see-more">Ver Mais</a>
              </div>
            </div>

            <div className="card-item">
              <h1>Landing Page</h1>
              <p>
                Uma landing page simples, elegante e responsiva, desenvolvida em
                HTML5, CSS3 e JavaScript.
              </p>
              <div className="actions-card">
                <div className="bg-icons-card"></div>
                <a href="https://github.com/GCode-S/LandingPage-Catalago-StefaniLash" className="git"></a>
                <a href="https://gcode-s.github.io/LandingPage-Catalago-StefaniLash/" className="see-more">Ver Mais</a>
              </div>
            </div>

           
              <Lottie
            loop
            animationData={bgWebJson}
            play
            className="bgWebJson animate-in-left animate-delay-4"
          />
          </div>

          <h2 id="stack">Stack</h2>
          <div className="stack invisible-on-scroll" ref={cardRef3}>
            <Image src={js} className="icons stack-js"/>
            <Image src={react} className="icons stack-react"/>
            <Image src={reactnative} className="icons stack-react-native"/>
            <Image src={node} className="icons stack-node"/>
          </div>
          <h2 id="contato">Contato</h2>
          <div className="contact">
            <button onClick={handlewpp} className="bnt wpp">Whatsapp</button>
            <button onClick={handlegit} className="bnt github">GitHub</button>
            <button onClick={handleemail} className="bnt email">E-Mail</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="dev">
          <p>
            &copy; 2025 Desenvolvido por{" "}
            <a href="https://github.com/GCode-S">GCode-S</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
