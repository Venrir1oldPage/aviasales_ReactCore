import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState , Fragment } from 'react'
import { connect } from 'react-redux'
import { Spin, Alert} from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'

import * as actions from '../../Redux/actions'
import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.scss'


const TicketList = ({tickets, loading, error, filters, sort, cutNumber, getTickets, showMore} ) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getTickets()
    setProgress(tickets.length / 95.55)
  }, [tickets])

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />  
  
  let noCheckedFilters = filters.filter((i)=>!i.checked).map((i)=>i.key)


  let filteredTickets 
  if (noCheckedFilters.length === 5) {
    filteredTickets = []
  } else if (!noCheckedFilters.length) {
    filteredTickets = [...tickets]
  } else {
    for (let i of noCheckedFilters) {
      if (i==1){
        filteredTickets=filteredTickets.filter((ticket) => {
          if ( ticket.segments[0].stops.length !== 1 || ticket.segments[1].stops.length !== 1) { 
            return false }
          return true 
        })
      }
      if (i==2||i==3||i==4){
        filteredTickets=filteredTickets.filter((ticket) => ticket.segments[0].stops.length !==(i-1)) //два варианта фильтра. какой лучше?
          .filter((ticket) => ticket.segments[1].stops.length !== (i-1))
      } else {
        filteredTickets = [...tickets]
      }
    }
  }
  
  if(sort=='cheapest'){
    filteredTickets = filteredTickets.sort((a, b) => a.price - b.price)
  } else if (sort=='fastest'){
    filteredTickets = filteredTickets.sort((a, b) => (
      a.segments[0].duration+a.segments[1].duration) - (b.segments[0].duration+b.segments[1].duration))
  } else if (sort=='optimal'){
    filteredTickets = filteredTickets.sort((a, b) => (
      a.segments[0].duration+a.segments[1].duration+a.price) - (b.segments[0].duration+b.segments[1].duration+b.price))
  }

  let ticketArr
  if(filteredTickets.length) {
    ticketArr = filteredTickets.slice(0, cutNumber).map((i)=>{
      let key= uuidv4()
      return(<Ticket data={i} key={key} />)
    })
  }

  const results= loading?<Spin indicator={antIcon}/>:error?
    <Alert className='page__alert' showIcon message='Что-то пошло совсем не так' type="error" />:filteredTickets.length?
      [ticketArr,<button type="button" key='showMore' 
        className={classes['showMore']} onClick={showMore}>Загрузить еще 5 билетов</button> ]:
      <Alert className='page__alert' showIcon message='Рейсов, подходящих под заданные фильтры, не найдено' type="error" />

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
    error:state.error,
    sort:state.sort,
    cutNumber:state.cutNumber,
    filters:state.filters
  }}

export default connect(mapStateToProps, actions)(TicketList)


// настроить фильтрацию