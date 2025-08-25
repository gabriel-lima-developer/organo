import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Genero from './components/Genero';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [generos, setGeneros] = useState([
    { id: uuidv4(), nome: 'Rap', cor: '#57C278' },
    { id: uuidv4(), nome: 'Funk', cor: '#82CFFA' },
    { id: uuidv4(), nome: 'Sertanejo', cor: '#A6D157' },
    { id: uuidv4(), nome: 'Pop', cor: '#E06B69' },
    { id: uuidv4(), nome: 'Rock', cor: '#DB6EBF' },
    { id: uuidv4(), nome: 'Pagode', cor: '#FFBA05' }
  ])

  const artistasStatic = [{
    id: uuidv4(),
    rank: 1,
    nome: "Racionais",
    musicaFavorita: "Fórmula mágica da paz",
    imagem: "https://lh3.googleusercontent.com/Yuxak8kI8_XJpzekFaE2mfyvPB9GQOKHapNNrEo61JQ5BxwLBkcjtGvSAo13fKpBw5D8TaUOvCXy3Po=w120-h120-l90-rj",
    genero: "Rap"
  },
  {
    id: uuidv4(),
    rank: 1,
    nome: "Marília Mendonça",
    musicaFavorita: "Intenção",
    imagem: "https://lh3.googleusercontent.com/LFELkrgpF616dDo4BrqOPsqs2avX9fc1iHvk26Vb84VtbK_NOdaOADEIKHcZ_AH0C5x_a5Wk23SdT08A=w544-h544-l90-rj",
    genero: "Sertanejo"
  },
  {
    id: uuidv4(),
    rank: 1,
    nome: "MC Menor da VG",
    musicaFavorita: "Conto do pescador",
    imagem: "https://lh3.googleusercontent.com/_-Knt0ggQCkEZ9pX4eQ3p5kq6fwUACxSCzbxao6fcbQd3XIa_ZUsjLsz3iGq7TG5PzYgapLTRJKIneeBWA=w544-h544-l90-rj",
    genero: "Funk"
  }]

  const [artistas, setArtistas] = useState(artistasStatic);

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

  function onDeleteArtista(id) {
    setArtistas(artistas.filter(x => x.id != id));
  }

  function onChangeColorGenero(color, id) {
    setGeneros(generos.map(genero => {
      if (genero.id === id) {
        genero.cor = color;
      }
      return genero;
    }));
  }

  function createGenero(genero) {
    setGeneros([...generos, { ...genero, id: uuidv4() }]);
  }

  function onFavoriteArtista(id) {
    setArtistas(artistas.map(artista => {
      if (artista.id === id) artista.favorito = !artista.favorito;
      return artista;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        createGenero={createGenero}
        generos={generos.map(x => x.nome)} 
        onCreate={x => onCreate(x)} 
      />
      {generos.map(x => 
        <Genero 
          key={x.id}
          onChangeColor={onChangeColorGenero}
          genero={x}
          artistas={artistas.filter(y => y.genero == x.nome)}
          onDeleteArtista={onDeleteArtista}
          onFavoriteArtista={onFavoriteArtista}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;