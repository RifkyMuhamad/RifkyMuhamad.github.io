import { useState } from 'react'
import Typewriter from "typewriter-effect";
import './App.css'

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [titles, setTitles] = useState(["Rifky Muhamad..", "Dyone-Strankers.", "ディオン・ストランカース", "디온 수토랑쿠","Wanna be Generalist.", "Wanna be Expert.", "Love Language!", "Full Time Learner!", "*(3rNd&#0R3IM(_)@$"]);

  return (
    <>
      <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: titles,
                }}
              />
    </>
  )
}

export default App
