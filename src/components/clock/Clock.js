import React, { useState, useEffect } from "react"
import "./Clock.css"

function ClockComp() {
  const [date, setDate] = useState("")

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date()
      setDate({
        sec: newDate.getSeconds(),
      })
    }, 1000)
  }, [])

  const computeDegreeSecMin = (value) => value * 6

  return (
        <div className="clock">
          <div className="dot" />
          <div
            className="line long"
            style={{ transform: `rotate(${computeDegreeSecMin(date.sec)}deg)` }}
          />
        </div>
  )
}

export default ClockComp
