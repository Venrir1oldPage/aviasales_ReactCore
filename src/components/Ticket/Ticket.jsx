import TicketRow from '../TicketRow/TicketRow'

import classes from './Ticket.module.scss'

const Ticket = ({data}) => {

  const{ price, carrier, segments} = data

  return (
    <li className={classes['ticket']}>
      <div className={classes['ticket__head']}>
        <p className={classes['ticket__price']}>{price} P</p>
        <img className={classes['ticket__company']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`Авиакомпания ${carrier}`} width={110} height={36}/>
      </div>
      <div className={classes['ticket__info']}>
        <TicketRow  data={segments[0]}/>
        <TicketRow  data={segments[1]}/>
      </div>
    </li>
  )
}

export default Ticket