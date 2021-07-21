import React from 'react'
import './App.css'

function App() {
  const [isTextInputVisible, setIsTextInputVisible] = React.useState(false)
  const [isParagraphVisible, setIsParagraphVisible] = React.useState(false)
  const [paragraphText, setParagraphText] = React.useState('')

  const handleClick = () => {
    setIsTextInputVisible(true)
  }

  const handleChange = (event) => {
    setIsParagraphVisible(true)
    if (event.target.value.toLowerCase() === 'secret') {
      setParagraphText('Congrats, you found it!')
    } else {
      setParagraphText(event.target.value)
    }
  }

  return (
    <div className="App">
      <h1>Live TAT Code Coverage</h1>
      <button onClick={handleClick}>Start</button>

      { isTextInputVisible && <input type="text" placeholder="Find the easter egg" onChange={handleChange} /> }
      { isParagraphVisible && <p>{paragraphText}</p> }
    </div>
  )
}

export default App
