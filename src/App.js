import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

// Componente Header fixo com navegação
function Header() {
  return (
    <header>
      <div className="Div1">
        <Link to="/sobre" className="buttonOP">Sobre nós</Link>
        <Link to="/" className="buttonOP">Home</Link>
        <Link to="/contato" className="buttonOP">Contate-nos</Link>
        <Link to="/termos" className="buttonOP">Termos</Link>
        <Link to="/ajuda" className="buttonOP">Ajuda</Link>
        <Link to="/pedido" className="buttonOP">Pedir</Link>
      </div>
    </header>
  );
}

// Página Home
function Home() {
  return (
    <main>
      <div className="div2">
        {[...Array(10)].map((_, i) => (
          <img key={i} src={logo} className="imagens" alt={`logo ${i}`} />
        ))}
      </div>
    </main>
  );
}

// Outras páginas (exemplo)
function Pedido() {
  return (
    <main>
      <div className="div2">
        <p className="paragrafo">Preencha os campos:</p>
        <select id="tipospedido" name="tipospedido" className="selecionartipopedido" required>
          <option value="">----selecione uma opção----</option>
          <option value="Site">Site</option>
          <option value="Foto">Foto</option>
          <option value="Video">Vídeo</option>
          <option value="programa python">Programa Python</option>
        </select>
        <p className='paragrafo'>Email:</p>
        <input type="email" id="email" name="email" className="selecionartipopedido" required />
        <p className='paragrafo'>Telefone:</p>
        <input type="tel" id="telefone" name="telefone" className="selecionartipopedido" required />
        <p className='paragrafo'>Contatos adicionais:</p>
        <input type="text" id="contatos" name="contatos" className="selecionartipopedido" />
        <p className='paragrafo'>Descreva o que deseja:</p>
        <textarea id="descricao" name="descricao" className="selecionartipopedido" required></textarea>
        <p className='paragrafo'> Obrigado!</p>
        <button type="submit" className="selecionartipopedido" onClick={enviardadostelegram}>Enviar</button>
      </div>
    </main>
  );
}

function enviardadostelegram() {
  const op = document.getElementById("tipospedido").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const contatos = document.getElementById("contatos").value;
  const descricao = document.getElementById("descricao").value;
  const TELEGRAM_BOT_TOKEN = '[TOKEN HERE]';
  const TELEGRAM_CHAT_ID = '[CHAT ID HERE]';

  const message = `*Tipo de pedido:* ${op}\n*Email:* ${email}\n*Telefone:* ${telefone}\n*Contatos adicionais:* ${contatos}\n*Descrição:* ${descricao}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'  // para formatar negrito e outros
    })
  })
  .then(response => {
    if (!response.ok) throw new Error('Erro ao enviar mensagem');
    return response.json();
  })
  .then(data => {
    alert('Pedido enviado com sucesso!');
    // Aqui você pode limpar os campos do formulário se quiser:
    // document.getElementById("formulario").reset();
  })
  .catch(error => {
    alert('Falha ao enviar o pedido. Tente novamente.');
    console.error('Erro:', error);
  });
}


function Sobre() {
  return (
    <main>
      <div className="div2">
        <h2>Sobre nós</h2>
        <p>Informações sobre a empresa.</p>
      </div>
    </main>
  );
}

function Contato() {
  return (
    <main>
      <div className="div2">
        <h2>Contate-nos</h2>
        <p>Formas de contato.</p>
      </div>
    </main>
  );
}

function Termos() {
  return (
    <main>
      <div className="div2">
        <h2>Termos</h2>
        <p>Termos e condições do site.</p>
      </div>
    </main>
  );
}

function Ajuda() {
  return (
    <main>
      <div className="div2">
        <h2>Ajuda</h2>
        <p>Como podemos ajudar você.</p>
      </div>
    </main>
  );
}

// Componente principal com roteamento e header fixo
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
