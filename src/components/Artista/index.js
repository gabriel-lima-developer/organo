import './Artista.css'

const Artista = ({ artista, backgroundColor }) => {
    return (
        <div className='artista'>
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src={artista.imagem} alt={artista.nome}/>
            </div>
            <div className='rodape'>
                <h4>{artista.nome} ({artista.rank})</h4>
                <h5>{artista.musicaFavorita}</h5>
            </div>
        </div>
    )
}

export default Artista;