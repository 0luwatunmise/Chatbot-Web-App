import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { chatbot } from 'supersimpledev'
import './App.css'


function App(){
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [])

  useEffect (()=>{
    chatbot.addResponses({'who is the GOAT': 'Cristiano Ronaldo'})
  }, [])

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);
  //const [chatMessages, setChatMessages] = array
  //const chatMessages = array[0]
  //const setChatMessages = array[1]

  return (
    <div className = 'app-container'>
      {chatMessages.length === 0 && ( <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>) }

      <ChatMessages 
        chatMessages = {chatMessages}
      />

      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>         
  )
}

function AutoScroll (dependencies){
  const containerRef = useRef(null)

  useEffect(()=>{
    const containerElem = containerRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [dependencies])

  return containerRef
}

export default App
