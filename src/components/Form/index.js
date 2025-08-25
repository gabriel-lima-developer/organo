import './Form.css';
import Button from '../Button';
import DropdownList from '../DropdownList';
import Field from '../Field';
import { useState } from 'react';

const Form = ({ onCreate, generos, createGenero }) => {

    const [rank, setRank] = useState('');
    const [nome, setNome] = useState('');
    const [musicaFavorita, setMusicaFavorita] = useState('');
    const [imagem, setImagem] = useState('');
    const [genero, setGenero] = useState('');
    const [nomeGenero, setNomeGenero] = useState('');
    const [corGenero, setCorGenero] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        onCreate({
            rank, nome, musicaFavorita, imagem, genero
        });
        setRank('');
        setNome('');
        setMusicaFavorita('');
        setImagem('');
        setGenero('');
    }

    return (
        <section className='section-form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do artista</h2>
                <Field 
                    required={true}
                    label="Posição no rank"
                    placeholder="Digite a posição do artista no seu rank"
                    value={rank}
                    type="number"
                    min={1}
                    max={5}
                    onChange={valor => setRank(Number(valor))} />
                <Field 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do artista"
                    value={nome}
                    onChange={valor => setNome(valor)} />
                <Field 
                    label="Música favorita do artista" 
                    placeholder="Digite a sua música favorita do artista"
                    value={musicaFavorita}
                    onChange={valor => setMusicaFavorita(valor)} />
                <Field 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={valor => setImagem(valor)} />
                <DropdownList 
                    required={true} 
                    label="Gênero" 
                    itens={generos}
                    value={genero}
                    onChange={valor => setGenero(valor)} />
                <Button>
                    Criar Card
                </Button>
            </form>

            <form onSubmit={ (e) => {
                e.preventDefault();
                console.log(e)
                createGenero({
                    nome: nomeGenero, cor: corGenero
                });
                setNomeGenero('');
                setCorGenero('');
            } }>
                <h2>Preencha os dados para criar um novo gênero</h2>
                <Field 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do gênero"
                    value={nomeGenero}
                    onChange={valor => setNomeGenero(valor)} />
                <Field 
                    type="color"
                    label="Cor" 
                    placeholder="Digite a cor do gênero"
                    value={corGenero}
                    onChange={valor => setCorGenero(valor)} />
                <Button>
                    Criar um novo gênero
                </Button>
            </form>
        </section>
    )
}

export default Form;