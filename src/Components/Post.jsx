function Post (props) {
    return (
        <>
        <ul>
            <li><h2>Titulo:{props.titulo}</h2></li>
            <li>Autor: {props.autor}</li>
            <li>conteudo: {props.conteudo}</li>
        </ul>
        </>
    
    )
}

export default Post