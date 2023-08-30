
import React, { useState, useEffect } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = axios.get('https://dummyjson.com/products')
        setProducts(response.data);
        setIsLoading(false);
      } catch {
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
              <pre key={product.id}>{product.name}</pre>
            ))
          }
    </div>
  )
}

export default App
