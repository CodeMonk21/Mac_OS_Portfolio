import React, { useEffect, useState } from 'react'

function DateTime() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayName = days[now.getDay()]
  const dayNumber = now.getDate()
  const monthName = months[now.getMonth()]
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return (
    <div>{`${dayName} ${dayNumber} ${monthName} ${hours}:${minutes}`}</div>
  )
}

export default DateTime