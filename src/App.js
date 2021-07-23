import React from 'react'
import './App.css'

function App() {
  const [isTextInputVisible, setIsTextInputVisible] = React.useState(false)
  const [isParagraphVisible, setIsParagraphVisible] = React.useState(false)
  const [paragraphText, setParagraphText] = React.useState('')
  const [isResetLinkVisible, setIsResetLinkVisible] = React.useState(false)

  const handleClick = () => {
    setIsTextInputVisible(true)
  }

  const handleChange = (event) => {
    setIsParagraphVisible(true)
    if (event.target.value.toLowerCase() === 'secret') {
      setParagraphText('Congrats, you found it!')
      setIsResetLinkVisible(true)
    } else {
      setParagraphText(event.target.value)
      setIsResetLinkVisible(false)
    }
  }

  const handleReset = () => {
    setIsTextInputVisible(false)
    setIsParagraphVisible(false)
    setParagraphText('')
    setIsResetLinkVisible(false)
  }

  return (
    <div className="App">
      <h1>Live TAT Code Coverage</h1>
      <button onClick={handleClick} disabled={isTextInputVisible}>Start</button>

      { isTextInputVisible && <input type="text" placeholder="Find the easter egg" onChange={handleChange} /> }
      { isParagraphVisible && <p>{paragraphText}</p> }
      { isResetLinkVisible && <button onClick={handleReset}>Reset</button> }
    </div>
  )
}

export default App
