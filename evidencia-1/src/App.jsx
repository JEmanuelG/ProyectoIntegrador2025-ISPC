import './App.css';
import Card from './components/Card';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com//products').then((res)=>{
      setProducts(res.data);
    })
  }, []);

  return (
    <>
      <h1>PRUEBA LISTA PRODUCTOS</h1>
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