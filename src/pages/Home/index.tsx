import BotaoAdcionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTareafas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDeTarefas />
    <BotaoAdcionar />
  </>
)

export default Home
