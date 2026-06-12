function CardProduto (props) {
    return (
        <>
        <ul>
            <li>Nome:{props.nome}</li>
            <li>Preço:{props.preco}</li>
            <li>Descrição:{props.descricao}</li>
        </ul>
        </>
    
    )
}

export default CardProduto