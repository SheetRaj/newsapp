import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';



function App() {
  return (
    <>
    <Navbar/>
    <News pageSize={12} country="us" />
    </>
  );
}

export default App;
