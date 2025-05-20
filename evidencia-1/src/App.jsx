import './App.css';
import Card from './components/Card';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
      setProducts(res.data.products);
    })
  }, []);

  return (
    <>
      <h1>PRIMERA EVIDENCIA</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
          <Card title={p.title} price={p.price} />
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;