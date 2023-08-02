function Dynamic(){
    const getInputValue = (e)=>{
        let {name,value}  =e.target

        console.log(e.target.name)
    }
    return (
        <>
        <div className="input-container">
            <input placeholder="name" name="name" onChange={getInputValue} />
            <input placeholder="age"  name="age" onChange={getInputValue}/>
            <input placeholder="Years of experience"  name="yes" onChange={getInputValue}/>
        </div>
        <button>Add New Groups</button>
        </>
    )
}
export default Dynamic