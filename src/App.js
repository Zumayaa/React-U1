import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nuevo usuario</h1>
        <Input label={"Usuario"} disabled={false} />
        <Input label={"Correo"} type={"password"} disabled={false} />
        <Input label={"Contraseña"} type={"password"} disabled={false} />
        <div className='terminos'>
          <input type="checkbox" />
          <span>Acepto los términos y condiciones</span>
        </div>
        <div className='boton'>
          <Button disabled={false} text={"Cancelar"} />
          <Button disabled={false} text={"Aceptar"} />
        </div>
      </header>
    </div>
  );
}

export default App;
