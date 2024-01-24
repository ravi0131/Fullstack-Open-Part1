import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)

  const calculateAvg = (good, neutral, bad, total)=>{
    console.log('Hello form the calculateAvg')
    const weightedSum = (good*1) + (neutral*0) + (bad*-1)
    const aveargeVal = weightedSum/total
    setAverage(aveargeVal)
  }

  const calculatePercentage = (positive,total) =>{
    console.log('Hello from the calculatePercentage')
    
    const update = (positive/total) * 100
    setPositivePercentage(update)
  }

  const goodButtonClick = () => {
    console.log('hello from goodButtonClick')
    
    const updatedGood = good + 1
    const updatedTotal = total + 1
    
    setGood(updatedGood)
    setTotal(updatedTotal)
    
    calculateAvg(updatedGood,neutral,bad,updatedTotal)
    calculatePercentage(updatedGood,updatedTotal)
}
const neutralButtonClick = () =>{
  console.log('Hello from the neutralButtonClick')
  
  const updatedNeutral = neutral+1
  const updatedTotal = total+1
  
  setNeutral(updatedNeutral)
  setTotal(updatedTotal)
  
  calculateAvg(good, updatedNeutral, bad, updatedTotal)
  calculatePercentage(good, updatedTotal)
}

const badButtonClick = () =>{
  console.log('Hello from the badButtonClick')
  
  const updatedBad = bad+1
  const updatedTotal = total+1
  
  setBad(updatedBad)
  setTotal(updatedTotal)
  
  calculateAvg(good,neutral,updatedBad,updatedTotal)
  calculatePercentage(good,updatedTotal)
}

  return (
    <div>
      <Header title = 'give Feedback'/>
      <Button onClick = {goodButtonClick} text = {'good'} />
      <Button onClick = {neutralButtonClick} text = {'neutral'} />
      <Button onClick = {badButtonClick} text = {'bad'} />
      <Header title='statistics'/>
      <Statistics 
        good={good} neutral={neutral} bad={bad} all={total} average={average} positivePercentage={positivePercentage}/>
    </div>
  )
}

const Statistics = (props) =>{
  console.log('Hello from statistics component')
  if(props.all == 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.average}</p>
      <p>positivePercentage: {props.positivePercentage}%</p>
    </div>
  )
}

const Header = ({title}) =>{
  return(
    <h2>
      {title}
    </h2>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App