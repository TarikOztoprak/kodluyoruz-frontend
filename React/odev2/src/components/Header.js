import React from 'react'

function Header({toDo, setToDo, data, setData}) {
    const Send = (e) =>
    {
       if(e.key === 'Enter'){
        setData([...data,toDo])
        setToDo(" ")
       } 
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(e) => e.preventDefault()}>
             <input onChange={(e) => setToDo(e.target.value)} className="new-todo" value={toDo} placeholder="What needs to be done?" autoFocus 
             onKeyPress = {Send}/>
            </form>
        </header>
    )
}

export default Header
