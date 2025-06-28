import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="Div1">
          <button className="buttonOP">Sobre nós</button>
          <button className="buttonOP">Home</button>
          <button className="buttonOP">Contate-nos</button>
          <button className="buttonOP">Termos</button>
          <button className="buttonOP">Ajuda</button>
        </div>
      </header>
      <main>
        <div className="div2">
          <img src={logo} className='imagens'></img> 
          <img src={logo} className='imagens'></img>
          <img src={logo} className='imagens'></img> 
          <img src={logo} className='imagens'></img>
          <img src={logo} className='imagens'></img> 
          <img src={logo} className='imagens'></img>
          <img src={logo} className='imagens'></img> 
          <img src={logo} className='imagens'></img>
          <img src={logo} className='imagens'></img> 
          <img src={logo} className='imagens'></img>
        </div>
      </main>
    </div>
  );
}

export default App;
