import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right +1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onButtonClick={handleLeftClick} text = 'left'/>
      <Button onButtonClick={handleRightClick} text ='right'/>
      {right}
      <History allClicks = {allClicks}/>
      Total:{total}
    </div>
  )
}
const History = (props) =>{
  if(props.allClicks.length == 0){
    return(
      <div>
        the app is used by pressing buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onButtonClick,text}) => {
  return (
    <button onClick={onButtonClick}>
      {text}
    </button>
  )
}
export default App