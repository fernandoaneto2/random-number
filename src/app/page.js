"use client";
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [NumeroAleatório, setNumeroAleatório] = useState(0);

  function GerarNumeroAleatorio() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatório(novoNumero);
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_central}>
        <h1>Gerador de Número aleatório (0-100)</h1>
        <h2>Seu número é:</h2>
        <h2>{NumeroAleatório}</h2>
        <p>Clique no botão abaixo para gerar um número aleatório</p>
        <button className={styles.btn} onClick={GerarNumeroAleatorio}>
          Gerar Número
        </button>
      </div>
    </div>
  );
};

export default Home;
