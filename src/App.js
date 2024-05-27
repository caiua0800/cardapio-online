import './App.css';
import Container from './Components/Container';
import Header from './Components/Header';
import LocalInfo from './Components/LocalInfo'


function App() {

  const headerImg = 'https://thegavoice.com/wp-content/uploads/2014/08/mexican-food-2462.jpg';
  const logoImg = 'https://th.bing.com/th/id/OIP.TMBfPNCppuMxNooOJktxvQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7'
  const titulo_local = 'Habanero comida Mexicana'

  const min_order = '20,00';

  return (
    <div className="App">
      {/* <Header src={headerImg} /> */}
      <Container>
        <LocalInfo img={logoImg} nome={titulo_local} min_order={min_order} funcionamento='f' />
      </Container>
    </div>
  );
}

export default App;
