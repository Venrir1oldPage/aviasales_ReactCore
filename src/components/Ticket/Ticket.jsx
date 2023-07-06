import TicketRow from '../TicketRow/TicketRow'

import classes from './Ticket.module.scss'

const Ticket = ({data}) => {

  const{ price, carrier, segments} = data

  return (
    <li className={classes['ticket']}>
      <div className={classes['head']}>
        <p className={classes['price']}>{price} P</p>
        <img className={classes['company']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`Авиакомпания ${carrier}`} width={110} height={36}/>
      </div>
      <div className={classes['info']}>
        <TicketRow  data={segments[0]}/>
        <TicketRow  data={segments[1]}/>
      </div>
    </li>
  )
}

export default Ticket