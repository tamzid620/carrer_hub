
const addToDb = id => {
    let jobCart = {}

    const storedJob = localStorage.getItem('jobCart')
    if(storedJob){
        jobCart = JSON.parse(storedJob)
    }

    const quantity = jobCart[id]
    if(quantity){
        const newQuantity = quantity +1
        jobCart[id]= newQuantity
    }
    else{
        jobCart[id] = 1
    }

    localStorage.setItem('jobCart' , JSON.stringify(jobCart))

}

const getStoredJob =()=> {
    let jobCart = {}

    const storedJob = localStorage.getItem('jobCart')
    if(storedJob){
        jobCart = JSON.parse(storedJob)
    }

    return jobCart
}

  export { addToDb , getStoredJob }