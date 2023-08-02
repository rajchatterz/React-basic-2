import axios from 'axios'
import {useState} from 'react'
function RestApi(){
    const [image,setImage] = useState('')
    const getData = async()=>{
        try {
            let axioss = axios.get('https://fakestoreapi.com/products/')
            console.log(axioss.then((e)=>setImage(e.data[0].image)))
        } catch (error) {
            console.error('error fetching the data',error);
        }
    }
    return(
        <>
        <div className="App">
            <button onClick={getData}>get Data</button>
        </div>
        <div>
            <img src={image} alt="Product" />
        </div>
        </>
    )
}
export default RestApi