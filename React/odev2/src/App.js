import './App.css';
import { useState } from 'react';
import Footer from "./components/footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Operation from "./components/Operation"

function App() {
  const [toDo, setToDo] = useState("")
  const [data, setData] = useState(["data"])
  const [isComplate, setIsComplate] = useState(["no"]);
  return (
    <div>
    
      <section className="todoapp">

        <Header toDo={toDo} setToDo = {setToDo} data={data} setData={setData}/>
        <Main data={data} setData={setData} isComplate={isComplate} setIsComplate={setIsComplate}/>
        <Operation data={data} setData={setData} isComplate={isComplate} setIsComplate={setIsComplate}/>

      </section>

      <Footer/>
    
    </div>
  );
}

export default App;
