import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingresar texto:
          <input type="textarea" name="texto"/>
        </p>
        <p>
          <input type="submit"/>
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const texto=(e.target.texto.value);
  alert(texto);
}
export default App;
