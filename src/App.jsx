
import Perfil from './Components/Perfil' 
import CardProduto from './Components/CardProduto'
import Usuarios from './Components/ListaUsuarios'
import Post from './Components/Post'
import Comentario from './Components/Comentario'
import CardComImagem from './Components/CardComImagem'
import TabelaSimples from './Components/TabelaSimples'
import ComponenteAluno from './Components/ComponenteAluno'
import ComponenteMenu from './Components/ComponenteMenu'
import Layout from './Components/Layout'

function App() {

  return (
    <>
      <Perfil nome = "João Pedro" email = "joaolindo@hotmail.com" foto= "https://designcomcafe.com.br/wp-content/uploads/2018/09/memes-nazare-tedesco-turn-down-for-what.jpg"/>
      <CardProduto nome = "Pc gamer" preco = "2.500" descricao = "Pc gamer completo" />
      <Usuarios usuario = "João Pedro" />
      <Post titulo = "Marte" autor = "João" conteudo = "Livro sobre Marte" />
      <Comentario autor = "João" mensagem = "Variavel é algo que:" listacomentario = "vareia"/>
      <CardComImagem imagem =" https://designcomcafe.com.br/wp-content/uploads/2018/09/memes-nazare-tedesco-turn-down-for-what.jpg" titulo = "Variavel Variando" texto = "Constanteando" />
      <TabelaSimples nome = "João Pedro" idade = "19 anos" cidade = "São Paulo" nome1 = "Raquel" idade1 = "70 anos" cidade1 = "Osasco" nome2 = "Ana" idade2 = "85 anos" cidade2 = "São Paulo" />
      <ComponenteAluno nome = "José" nota = "Você foi Aprovado" />
      <ComponenteMenu link = "https://www.youtube.com/watch?v=vK6ey9iCtZ4&list=RDvK6ey9iCtZ4&start_radio=1"/>
      <Layout cabecalho = "cabeçalho" menu = "menu" rodape = "rodapé" />
    </>
  )
}

export default App
