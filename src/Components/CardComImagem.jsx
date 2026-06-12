function CardComImagem (props) {
    return (
        <>
        <ul>
            <li>Imagem:<img src={props.imagem} alt= {props.alternate} /></li>
            <li>Titulo:<h2>{props.titulo}</h2></li>
            <li>Texto:{props.texto}</li>
        </ul>
        </>
    
    )
}

export default CardComImagem