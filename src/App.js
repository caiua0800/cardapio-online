import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Components/Container';
import LocalPage from './Components/LocalPage';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [bebidas, setBebidas] = useState([]);
  const [comidas, setComidas] = useState([]);
  const [localInfo, setLocalInfo] = useState({});
  const [adicionais, setAdicionais] = useState([]);

  const headerImg = 'https://thegavoice.com/wp-content/uploads/2014/08/mexican-food-2462.jpg';
  const logoImg = 'https://th.bing.com/th/id/OIP.TMBfPNCppuMxNooOJktxvQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7';
  const titulo_local = 'Habanero comida Mexicana';
  const min_order = '20,00';

  useEffect(() => {
    const fetchEstabelecimentoData = async () => {
      try {
        const estabelecimentoCollection = collection(db, 'ESTABELECIMENTO');
        const estabelecimentoSnapshot = await getDocs(estabelecimentoCollection);

        const bebidasData = [];
        const comidasData = [];
        let localInfoData = {};
        const adicionaisData = [];

        estabelecimentoSnapshot.forEach(doc => {
          const data = doc.data();
          if (doc.id === 'BEBIDAS') {
            bebidasData.push(data);
          } else if (doc.id === 'COMIDAS') {
            comidasData.push(data);
          } else if (doc.id === 'LOCAL_INFO') {
            localInfoData = data;
          } else if (doc.id === 'ADIONAIS') {
            adicionaisData.push(...data.TACOS);
          }
        });

        setBebidas(bebidasData);
        setComidas(comidasData);
        setLocalInfo(localInfoData);
        setAdicionais(adicionaisData);
      } catch (error) {
        console.error("Error fetching estabelecimento data: ", error);
      }
    };

    fetchEstabelecimentoData();
  }, []);

  return (
    <div className="App">
      <Container>
        <LocalPage
          bebidas={bebidas}
          comidas={comidas}
          localInfo={localInfo}
          img={logoImg}
          nome={titulo_local}
          min_order={min_order}
          adicionais={adicionais}
        />
      </Container>
    </div>
  );
}

export default App;
