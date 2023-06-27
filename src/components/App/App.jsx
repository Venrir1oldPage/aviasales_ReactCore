import logoAviasales from '../../images/logoAviasales.png'
import Options from '../Options/Options'
import SideFilters from '../SideFilters/SideFilters'
import TicketList from '../TicketsList/TicketsList'


import classes from './App.module.scss'
const showMore = () => {
  console.log('show more')
}
function App() {
  return (
    <div className={classes['page']}>
      <header className={classes['page__header']}>
        <img className={classes['logo']} src={logoAviasales} alt="Логотип Aviasales" />
      </header>
      <main className={classes['page__content']}>
        <SideFilters />
        <div className={classes['wrapper']}>
          <Options />
          <TicketList />
          <button type="button" className={classes['showMore']} onClick={showMore}>Загрузить еще 5 билетов</button>
        </div>
      </main>
    </div>
  )
}
export default App
