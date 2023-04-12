
const addToDb = (id) => {
    let jobCart = [];
    const storedJob = localStorage.getItem("jobCart");
    if (storedJob) {
      jobCart = JSON.parse(storedJob);
    }
  
  
    const index = jobCart.findIndex((item) => item.id === id);
    console.log(jobCart);
    console.log(index);
  
    if (index !== -1) {
      jobCart[index].quantity += 1;
    } else {
      // Otherwise, add a new item
      jobCart.push({ id, quantity: 1 });
    }
  
    localStorage.setItem("jobCart", JSON.stringify(jobCart));
  
   
  };
  
  const getStoredJob = () => {
    let jobCart = {};
  
    const storedJob = localStorage.getItem("jobCart");
    if (storedJob) {
      jobCart = JSON.parse(storedJob);
    }
  
    return jobCart;
  };
  
  export { addToDb, getStoredJob };