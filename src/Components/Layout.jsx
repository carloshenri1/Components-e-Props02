function Layout (props) {
    return (
        <>
      <header>
        {props.cabecalho}
      </header>
      <main>
       {props.menu}
      </main>
      <footer>
        {props.rodape}
      </footer>
      </>
    )
}

export default Layout