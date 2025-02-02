import './App.css';
import Header from './components/Header'
import Welcome from './pages/welcome/Welcome';
import Card from './components/card'


function App() {
  return (
    <>
      <div className='main'>
        <Header />
      </div>
      <Welcome/>
    </>
  );
}

export default App;
