import RoutesApp from './routes/RoutesApp';
import './styles/theme.css'
import DefaultLayout from './pages/DefaultLayout';
import JoinSection from './components/Login';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* <DefaultLayout /> */}

      <RoutesApp />
      {/* <JoinSection/> */}
    </div>
  );
}




export default App
