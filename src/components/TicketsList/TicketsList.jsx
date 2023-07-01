import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState , Fragment } from 'react'
import { connect } from 'react-redux'
import { Spin, Alert} from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'

import * as actions from '../../Redux/actions'
import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.scss'


const TicketList = ({tickets, loading, error, getTickets, showMore} ) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getTickets()
    setProgress(tickets.length / 95.55)
  }, []) //остановка на первой порции

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />  
  
  const showMoreee = () => {
    console.log('show more')
    showMore()
  }

  let dataArr = tickets.slice(0, 5)
  let ticketArr = dataArr.map((i)=>{
    let key= uuidv4()
    return(<Ticket data={i} key={key}/>)
  })

  const results= loading?<Spin indicator={antIcon}/>:error?
    <Alert className='page__alert' showIcon message='Что-то пошло совсем не так' type="error" />:
    [ticketArr,<button type="button" key='showMore' 
      className={classes['showMore']} onClick={showMoreee}>Загрузить еще 5 билетов</button> ]


  //tickets.lenght?[<TicketList key='tickets'/>, <button type="button" key='showMore' 
  //  className={classes['showMore']} onClick={showMore}>Загрузить еще 5 билетов</button>]:
  //<Alert className='page__alert' showIcon message='Рейсов, подходящих под заданные фильтры, не найдено' type="error" />
  return (
    <Fragment>
      <LoadingBar color="#2196F3" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <ul className={classes['tickets']}>
        {results}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets:state.tickets,
    loading:state.loading,
    error:state.error
  }}

export default connect(mapStateToProps, actions)(TicketList)


// настроить отображение билетов по данным
// настроить показ лоадинг бара