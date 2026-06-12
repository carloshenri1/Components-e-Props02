function TabelaSimples (props) {
    return(
        <>
        <table>
        <thead>
        <tr>
          <th>Nome:</th>
          <th>Idade:</th>
          <th>Cidade:</th>
        </tr>
      </thead>
       <tbody>
          <tr>
            <td>{props.nome}</td>
            <td>{props.idade}</td>
            <td>{props.cidade}</td>
          </tr>
      </tbody>
       <tbody>
          <tr>
            <td>{props.nome1}</td>
            <td>{props.idade1}</td>
            <td>{props.cidade1}</td>
          </tr>
      </tbody>
       <tbody>
          <tr>
            <td>{props.nome2}</td>
            <td>{props.idade2}</td>
            <td>{props.cidade2}</td>
          </tr>
      </tbody>
      </table>
      </>
    )
}

export default TabelaSimples