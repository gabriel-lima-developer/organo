import './Form.css';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import { useState } from 'react';

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        props.onCreate({
            nome, cargo, imagem, time
        });
    }

    return (
        <section className='section-form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={valor => setNome(valor)} />

                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onChange={valor => setCargo(valor)} />

                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={valor => setImagem(valor)} />

                <DropdownList 
                    required={true} 
                    label="Time" 
                    itens={props.times}
                    value={time}
                    onChange={valor => setTime(valor)} />
                
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;