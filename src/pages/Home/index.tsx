import BotaoAdcionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeTareafas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDeContatos />
    <BotaoAdcionar />
  </>
)

export default Home
