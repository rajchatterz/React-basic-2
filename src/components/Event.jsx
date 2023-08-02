function Event(){
    const getInput = (e)=>{
        console.log(e.target.value)
    }
    const addNums = (x,y)=>[
        console.log(x+y)
    ]
    return(
        <>
        <input type="text" placeholder="Add something" onChange={getInput} />
        <button onClick={()=>{addNums(1,1)}}>Add numbers</button>
        </>
    )
}
export default Event