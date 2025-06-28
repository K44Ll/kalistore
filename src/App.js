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
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
        <img src={logo} className="imagens" alt="logo"></img>
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
        <p className='paragrafo'>Esse é um site formado por mim para vender meus projetos.</p>
        <p className='paragrafo'>Eu sou Kali, estudante de programação e desenvolvimento web.</p>
        <p className='paragrafo'>Espero que goste!</p>
        <p className='paragrafo'>Contatos na página de contatos</p>
      </div>
    </main>
  );
}

function Contato() {
  return (
    <main>
      <div className="div2">
        <h2>Contate-nos</h2>
        <p className='paragrafo'>Formas de contato:</p>
        <p className='paragrafo'>Dc: kali_null</p>
        <p className='paragrafo'>Email: wolfcookie20009@gmail.com</p>

      </div>
    </main>
  );
}

function Termos() {
  return (
    <main>
      <div className="div2">
        <h2>Termos</h2>
        <footer>
          <p className='paragrafofoot'>Desenvolvido por Kali.</p>
          <p className='paragrafofoot'>Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}

function Ajuda() {
  return (
    <main>
      <div className="div2">
        <h2>Ajuda</h2>

        <p className='paragrafo'>Selecione o tipo de problema:</p>
        <select id="tiposproblema" className='selecionartipopedido'>
          <option value='0'>---Selecione uma opção---</option>
          <option value="bug">Bug</option>
          <option value="pergunta">Pergunta</option>
          <option value="problemacompra">Problema na compra</option>
          <option value='problemapagamento'>Problemas com pagamento</option>
          <option value="outro">Outro</option>
        </select>

        <p className='paragrafo'>Contato:</p>
        <select id='contatoproblema' className='selecionartipopedido' onChange={liberar}>
          <option value='0'>---Selecione uma opção---</option>
          <option value='email'>Email</option>
          <option value='whatsapp'>WhatsApp</option>
          <option value='dc'>Discord</option>
          <option value='outro'>Outro</option>
        </select>

        <p className='paragrafo'>Insira seu contato:</p>
        <input type='text' id="contatos" className='selecionartipopedido' disabled placeholder="Escolha um tipo de contato acima" />

        <p className='paragrafo'>Descreva o problema:</p>
        <textarea id="descricao" className='selecionartipopedido'></textarea>
        <p className='paragrafo'>Obrigado!</p>
        <button onClick={enviarproblematg} className='selecionartipopedido'>Enviar</button>
      </div>
    </main>
  );
}

function enviarproblematg() {
  const problema = document.getElementById('tiposproblema').value;
  const tipocontato = document.getElementById('contatoproblema').value;
  const contatoproblema = document.getElementById('contatos').value;
  const descricao = document.getElementById('descricao').value;

  // Verifica se os campos foram preenchidos corretamente
  if (
    !problema || problema === '0' ||
    !tipocontato || tipocontato === '0' ||
    !contatoproblema || contatoproblema.trim() === '' ||
    !descricao || descricao.trim() === ''
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const APIKEY = '[APIKEI AQUI]'; // Seu token do bot
  const CHATID = '[CHAT ID AQUI]'; // Seu ID ou ID do grupo

  const mensagem = `
📢 *Novo problema reportado!*
🧩 *Tipo de problema:* ${problema}
📞 *Tipo de contato:* ${tipocontato}
👤 *Contato:* ${contatoproblema}
📝 *Descrição:* ${descricao}
  `;

  fetch(`https://api.telegram.org/bot${APIKEY}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHATID,
      text: mensagem,
      parse_mode: 'Markdown'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Enviado com sucesso:', data);
    alert("Problema enviado com sucesso!");
  })
  .catch(error => {
    console.error('Erro ao enviar:', error);
    alert("Erro ao enviar problema.");
  });
}

function liberar() {
  const tipo = document.getElementById('contatoproblema').value;
  const input = document.getElementById('contatos');

  if (tipo === 'email') {
    input.disabled = false;
    input.type = 'email';
    input.placeholder = 'Digite seu e-mail';
  } else if (tipo === 'whatsapp') {
    input.disabled = false;
    input.type = 'tel';
    input.placeholder = 'Digite seu número com DDD';
  } else if (tipo === 'dc') {
    input.disabled = false;
    input.type = 'text';
    input.placeholder = 'Digite seu @Discord';
  } else {
    input.disabled = true;
    input.type = 'text';
    input.placeholder = 'Escolha um tipo de contato acima';
  }
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
