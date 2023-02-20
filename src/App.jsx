import { useEffect, useState } from 'react'
import './css/App.css'
import axios from 'axios'

const server = axios.create({
  baseURL: 'http://thepwnexperts.com:3001/'
})

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (id)=> {
    setCart(prev=>{
      if(prev.includes(id)) return prev
      else return [...prev, id]
    })
  }

  const showCart = ()=> {
    server.post('/cal', {id: cart})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    const getDataController = new AbortController()
    server.get('/', {signal: getDataController.signal})
    .then(res=>{
      res.data?.test.map(item=>{
        setData(prev=>[...prev, item])  
      })
    })
    .catch(err=>{
      console.log(err)
    })

    return ()=> getDataController.abort()
  }, [])

  return (
    <div>
      {data.map(item=>{
        return <div key={item._id}>{item.name} <button onClick={()=>addToCart(item.id)}>Add to Cart</button></div>
      })}
      <button onClick={showCart}>Show Cart</button>
    </div>
  )
}

export default App
