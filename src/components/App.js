import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
        {/* Do not remove the main div */}
          {
            products.map((product) => (
              <pre>{product}</pre>
            ))
          }
    </div>
  )
}

export default App
