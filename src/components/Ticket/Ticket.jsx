import {  Card } from 'antd'
import { useState } from 'react'
const { Meta } = Card

import logoS7 from '../../images/S7 Logo.png'

import classes from './Ticket.module.scss'

const Ticket = () => {
  const [loading] = useState(false)
  
  if(loading){
    return (
      <>
        <Card loading={loading} className={classes['ticket']}>
          <Meta title="Card description"
            description="This is the description" />
        </Card>
      </>
    )
  }
  return (
    <li className={classes['ticket']}>
      <div className={classes['ticket__head']}>
        <p className={classes['ticket__price']}>13400 P</p>
        <img className={classes['ticket__company']} src={logoS7} alt="Логотип авиакомпании" width={110} height={36}/>
      </div>
      <div className={classes['ticket__info']}>
        <div className={classes['ticket__there']}>
          <p className={classes['info__way']}>MOW-HKT</p>
          <p className={classes['info__in']}>В пути</p>
          <p className={classes['info__countOfTransfer']}>2 пересадки</p>
          <p className={classes['info__arrivingTime']}>10:45 - 8:00</p>
          <p className={classes['info__time']}>21ч 15м</p>
          <p className={classes['info__transfers']}>HKG, JNB</p>
        </div>
        <div className={classes['ticket__back']}>
          <p className={classes['info__way']}>MOW-HKT</p>
          <p className={classes['info__in']}>В пути</p>
          <p className={classes['info__countOfTransfer']}>2 пересадки</p>
          <p className={classes['info__arrivingTime']}>10:45 - 8:00</p>
          <p className={classes['info__time']}>21ч 15м</p>
          <p className={classes['info__transfers']}>HKG, JNB</p>
        </div>
      </div>
    </li>
  )
}

export default Ticket