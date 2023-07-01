import classes from './TicketRow.module.scss'

export default function TicketRow ({data}) {

  const {destination,duration,origin,stops, date} = data
  let countStops = !stops.length?'Без пересадок':stops.length==1?'1 пересадка':`${stops.length} пересадки`
  let stop = stops.join()
  let hours=Math.floor(duration/60)
  let minutes = duration%60

  let hoursDeparture=new Date(date).getHours()
  let minutesDeparture=new Date(date).getMinutes()
  let hArrivals = (hoursDeparture+hours) 
  let hourArrivals = hArrivals == 24? hArrivals=0:hArrivals > 36?hArrivals-36:hArrivals>24?hArrivals-24:hArrivals
  let mArrivals = minutesDeparture+minutes
  if (mArrivals > 60){
    mArrivals=mArrivals-60
    hourArrivals++
  }

  return (
    <div className={classes['info_row']}>
      <p className={classes['info__way']}>{origin}-{destination}</p>
      <p className={classes['info__in']}>В пути</p>
      <p className={classes['info__countOfTransfer']}>{countStops}</p>
      <p className={classes['info__arrivingTime']}>{hoursDeparture}:{minutesDeparture} - {hourArrivals}:{mArrivals}</p>
      <p className={classes['info__time']}>{hours}ч {minutes}м</p>
      <p className={classes['info__transfers']}>{stop}</p>
    </div>
  )
}