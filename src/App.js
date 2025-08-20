import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const times = [
    { nome: 'Programação', coPrimaria: '#D9F7E9', corSecundaria: '#57C278' },
    { nome: 'Front-End', coPrimaria: '#E8F8FF', corSecundaria: '#82CFFA' },
    { nome: 'Data Science', coPrimaria: '#F0F8E2', corSecundaria: '#A6D157' },
    { nome: 'Devops', coPrimaria: '#FDE7E8', corSecundaria: '#E06B69' },
    { nome: 'UX e Design', coPrimaria: '#FAE9F5', corSecundaria: '#DB6EBF' },
    { nome: 'Mobile', coPrimaria: '#FFF5D9', corSecundaria: '#FFBA05' },
    { nome: 'Inovação e Gestão', coPrimaria: '#FFEEDF', corSecundaria: '#FF8A29' }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const onCreate = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />

      <Form times={times.map(time => time.nome)} onCreate={colaborador => onCreate(colaborador)}/>

      {times.map(time => <Team 
        key={time.nome}
        name={time.nome} 
        primaryColor={time.coPrimaria} 
        secundaryColor={time.corSecundaria}
        colaboradores={colaboradores}
      />)}
    </div>
  );
}

export default App;