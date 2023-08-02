function Object (){
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const details = [
        {
            name:"Nishant",
            age:26
        },
        {
            name:"Raj",
            age:28
        },
        {
            name:"Srinjan",
            age:20
        },
        {
            name:"iwiw",
            age:21
        },
        {
            name:"Palash",
            age:31
        },
        
    ]
    return(
        <>
        <ul>
            {numbers.map((e)=>{
                return <li key={e}>{e}</li>
            })}
        </ul>
        <ul>
            {details.map((e)=>{
                return (
                    <>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    </>
                
                    )
            })}
        </ul>
        </>
    )
}
export default Object