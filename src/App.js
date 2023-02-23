
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import EstudiantesList from './components/EstudiantesList';
import EstudianteContextProvider from './contexts/EstudianteContext';

function App() {
  return (
    <>
    <EstudianteContextProvider>
        <EstudiantesList/>
    </EstudianteContextProvider>
    </>
  );
}

export default App;
