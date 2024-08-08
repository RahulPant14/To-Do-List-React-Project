
import './app.css'
import {useState} from 'react';
const App=()=>{    
    
    const[list,setList]=useState({text:""});
    const[data,setData]=useState([])

    const handleClick=()=>{
        console.log(list.text)
        const rcds=[...data]
        rcds.push(list);
        setData(rcds);
        setList({text:""})
    }

    const handleDel=(i)=>{
        const rcds=[...data]
        rcds.splice(i,1);
        setData(rcds)
    }
    
    return(
        <div className='to-do-list'>       
           <h1>TO DO LIST</h1>
           <div className='to-do-items'>         
                    <input className='input' type="text" placeholder='Add List....' value={list.text} name='text' onChange={(e)=>setList({text:e.target.value})}  />
                    <input className='button' type="button" value="ADD" onClick={handleClick} />
                    {
                     data.map((name,i)=>{return(
                         <div key={i} className='to-do-add'>
                             
                                     <div className="child">
                                     <div><p>{name.text}</p></div>
                                     {/* <textarea name="text"><div><p>{name.text}</p></div></textarea> */}
                                     <div><input className='button-del' type="button" value="Delete" onClick={()=>handleDel(i)}/></div>
                                     
                                     </div>

                        </div>
                    )})
                    }
            </div> 
           
        </div> 
    );    
}
export default App;