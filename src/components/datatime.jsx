function DateTime(){
    let date=new Date();
    return(
      <p style={{color:"brown"}}>This is the current Time:{date.toLocaleDateString()}-{date.toLocaleTimeString()}</p>
    )
}

export default DateTime;