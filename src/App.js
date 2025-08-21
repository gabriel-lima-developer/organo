import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Genero from './components/Genero';
import Footer from './components/Footer';

function App() {

  const generos = [
    { nome: 'Rap', coPrimaria: '#D9F7E9', corSecundaria: '#57C278' },
    { nome: 'Funk', coPrimaria: '#E8F8FF', corSecundaria: '#82CFFA' },
    { nome: 'Sertanejo', coPrimaria: '#F0F8E2', corSecundaria: '#A6D157' },
    { nome: 'Pop', coPrimaria: '#FDE7E8', corSecundaria: '#E06B69' },
    { nome: 'Rock', coPrimaria: '#FAE9F5', corSecundaria: '#DB6EBF' },
    { nome: 'Pagode', coPrimaria: '#FFF5D9', corSecundaria: '#FFBA05' }
  ]

  const [artistas, setArtistas] = useState([]);

  const onCreate = (artista) => {

    const artistasDoGenero = artistas.filter(x => x.genero === artista.genero);

    if (artistasDoGenero.length >= 5) {
      alert(`Você só pode cadastrar no máximo 5 artistas no gênero ${artista.genero}`);
      return;
    }

    if (artistasDoGenero.some(x => x.rank === artista.rank)) {
      alert(`Já existe um artista com o rank ${artista.rank} no gênero ${artista.genero}`);
      return;
    }

    setArtistas([...artistas, artista]);
  }

  return (
    <div className="App">
      <Banner />

      <Form generos={generos.map(x => x.nome)} onCreate={x => onCreate(x)}/>

      {generos.map(x => <Genero 
        key={x.nome}
        genero={x}
        artistas={artistas.filter(y => y.genero == x.nome)}
      />)}

      <Footer/>
    </div>
  );
}

export default App;