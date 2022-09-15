import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [isAbout, setIsAbout] = useState(false);

  const [isMult, setIsMult] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="flex flex-col gap-20">
            <div className="flex items-center justify-center mt-10">
              <p className="text-white font-bold text-3xl">
                Trabalho de Introdução A Sistemas e Multimídias
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button
                className="App-link border border-white rounded-md p-2 w-10/12 hover:bg-slate-600 delay-75 transition-all md:w-9/12 lg:w-1/2"
                onClick={() => {
                  setIsAbout(true);
                }}
              >
                Sobre o Sensorama
              </button>
              <button
                className="App-link border border-white rounded-md p-2 w-10/12 hover:bg-slate-600 delay-75 transition-all md:w-9/12 lg:w-1/2"
                onClick={() => {
                  setIsMult(true);
                }}
              >
                Características Multimídia
              </button>
            </div>
            <div className="flex justify-center items-end ">
              <p className="text-sm">
                <span className="App-link">by</span> : Leanderson Nunes e Samael
                Erin Sousa
              </p>
            </div>
          </div>
        </header>
      </div>
      <Modal isOpen={isAbout} setIsOpen={setIsAbout}>
        <p className="text-2xl">
          <strong className="text-white">
            Sobre o <span className="App-link">Sensorama</span>
          </strong>
        </p>
        <br />
        <p className="text-slate-300">
          O sensorama é a invenção criada por Morton Heilig, conhecido
          atualmente como especialista em multimídia. A invenção tem como
          principal ponto a característica multimídia interativa, criando uma
          experiência imersiva elaborada e interessante, Morton via o cinema
          como uma atividade capaz de integrar todos os sentidos de maneira
          eficiente, assim explorando uma forma de aumentar a capacidade de
          imersão do espectador com o curta apresentado, sendo um dos primeiros
          exemplos do conceito de realidade virtual que tivemos. Infelizmente, o
          projeto do sensorama de Morton não conseguiu encontrar um financiador
          para avançar em suas pesquisas, sendo obrigado a deixar seu
          experimento de lado. Mesmo com o aparelho sendo criado antes da
          computação, o sensorama funciona até hoje.
        </p>
      </Modal>
      <Modal isOpen={isMult} setIsOpen={setIsMult}>
        <p className="text-2xl">
          <strong className="text-white">Características Multimídia</strong>
        </p>
        <br />
        <p className="text-slate-300">
          No video gravado por itsuo sakane durante sua visita a casa de Morton
          Heilig no começo dos anos 80, o protótipo do aparelho, construído em
          1962, contém uma variedade de 5 curtas para serem reproduzidos, sendo
          capaz de reproduzir as imagens em 3D estereoscópico junto ao som
          estéreo, a inclinação do corpo e a sensação de vento e aroma. É uma
          máquina essencialmente multimídia, fazendo o usuário ser capaz de
          poder interagir com a filmagem mostrada de maneira muito mais imersiva
          do que o comum.
        </p>
      </Modal>
    </>
  );
}

export default App;
