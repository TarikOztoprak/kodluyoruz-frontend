function Main({data, setData, isComplate, setIsComplate}) {
    return (
        <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">
            Mark all as complete
        </label>

        <ul className="todo-list">
            {
                data.map((td, index) => 
                <li key={index} className = {isComplate[index]}>
                    <div>
                        <input className="toggle" type="checkbox" onClick = {(e) =>{
                            if (e.target.checked) {
                                isComplate[index] = "completed"     
                            }
                            else
                            {
                                isComplate[index] = "no"     
                            }
                        }}/>
                        <label>{td}</label>
                        <button className="destroy" onClick={(e) => 
                            {
                                data.splice(index, 1);
                                isComplate.splice(index, 1);
                                setData(data)
                                setIsComplate(isComplate)
                            }}></button>
                    </div>
                 </li>
                )
            }
        </ul>
        </section>
      
    )
}

export default Main
