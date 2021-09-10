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
                                let tempIsComplate = [...isComplate]
                                setIsComplate(tempIsComplate)
                            }
                            else
                            {
                                isComplate[index] = "no"     
                                let tempIsComplate = [...isComplate]
                                setIsComplate(tempIsComplate)
                            }
                        }}/>
                        <label>{td}</label>
                        <button className="destroy" onClick={(e) => 
                            {
                                data.splice(index, 1);
                                isComplate.splice(index, 1);
                                let tempData = [...data]
                                let tempIsComplate = [...isComplate]
                                setData(tempData)
                                setIsComplate(tempIsComplate)
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
