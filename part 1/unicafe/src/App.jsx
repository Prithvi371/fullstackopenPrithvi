import { useState } from "react";
import React from 'react'

const App = () => {
  
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  
  return (
  <>
   <h1>Give Feedback!</h1> 

   <Button handleClick={()=>setGood(good+1)} text = "good"/>
   <Button handleClick={()=>setNeutral(neutral+1)} text = "neutral"/>
   <Button handleClick={()=>setBad(bad+1)} text = "bad"/>
  
    <h1>Statistics</h1>

   <Statistics good={good} neutral = {neutral} bad = {bad}/>
  </>
  )
}

const Button = ({handleClick,text}) => (<button onClick = {handleClick}>{text}</button>)  

const DispStat = ({text,val})=>(<p>{text} : {val}</p>)

const Statistics = ({good,neutral,bad}) =>{
  const total = good + neutral + bad
  const avg = (total)/3
  const positive = good*(100)/total

  if(total == 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <p>
    <DispStat text = "Good" val = {good}/>
    <DispStat text = "Neutral" val = {neutral}/>
    <DispStat text = "Bad" val = {bad}/>
    <DispStat text = "Total" val = {total}/>
    <DispStat text = "Average" val = {avg}/>
    <DispStat text = "Positive" val = {positive + "%"}/>
    </p>
  )
  
}

export default App
