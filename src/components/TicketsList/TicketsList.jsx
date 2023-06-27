import Ticket from '../Ticket/Ticket'

import classes from './TicketList.module.scss'

const TicketList = () => {
  return (
    <ul className={classes['tickets']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}

export default TicketList