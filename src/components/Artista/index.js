import './Artista.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Artista = ({ artista, backgroundColor, onDelete, onFavorite }) => {
    
    function favoritar() {
        onFavorite(artista.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='artista'>
            <AiFillCloseCircle 
                size={24}
                className='delete'
                onClick={() => onDelete(artista.id)} 
            />
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src={artista.imagem} alt={artista.nome}/>
            </div>
            <div className='rodape'>
                <h4>{artista.nome} ({artista.rank})</h4>
                <h5>{artista.musicaFavorita}</h5>
                <div className='favorite'>
                    {artista.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/> 
                        : <AiOutlineHeart {...propsFavorito}/> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Artista;