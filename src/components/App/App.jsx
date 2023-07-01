import {Provider} from 'react-redux'
import {configureStore, compose} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { Offline } from 'react-detect-offline'
import { Alert} from 'antd'

import logoAviasales from '../../images/logoAviasales.png'
import Sort from '../Sort/Sort'
import SideFilters from '../SideFilters/SideFilters'
import TicketList from '../TicketsList/TicketsList'
import reducer from '../../Redux/reducer'

import classes from './App.module.scss'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose


const store = configureStore({
  reducer: reducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware(thunk),
  devTools:composeEnhancers(),
})

function App() {
  return (
    <Provider store={store}>
      <div className={classes['page']}><Offline>
        <Alert className='page__alert' showIcon message='Кажется, у вас нет интернета. Проверьте сетевое соединение' type="error" />
      </Offline>
      <header className={classes['page__header']}>
        <img className={classes['logo']} src={logoAviasales} alt="Логотип Aviasales" />
      </header>
      <main className={classes['page__content']}>
        <SideFilters />
        <div className={classes['wrapper']}>
          <Sort />
          <TicketList/>
        </div>
      </main>
      </div>
    </Provider>
  )
}
export default App
