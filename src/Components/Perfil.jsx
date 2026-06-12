function Perfil (props) {
    return (
        <>
        <p>Nome:{props.nome}</p>
        <p>Email:{props.email}</p>
        <p>Foto:<img src={props.foto} alt={props.descricao}/></p>
        </>

    )
}

export default Perfil