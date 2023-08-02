import {useState} from 'react'
function Form(){
    const [object,setObject] = useState('')
    const getInput=(e)=>{
        let data = e.target.value
        return data
    }

    console.log(object)
    return ( 
        <>
        <div className="form">
            <input  type="text" onChange={getInput}  placeholder="Write your name" />
            <input type="text" placeholder="write your age" />
            <input type="text" placeholder="write your hobbies" />
            <input type="date" placeholder="write a date"/>
            <input type="file" placeholder="write a date"/>
            <button className="p-10">Submit</button>
        </div>
        </>
    )
}
export default Form