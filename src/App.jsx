import './App.css'
import Home from './pages/Home'
import Loader from './components/HomePage/Loader'
import { useEffect, useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData =  () => {
      setTimeout(() => {
        setLoading(false);
      },4000);
    }
      fetchData();
  },[])
  

  return (
    <div>
      {/* {
         loading ? <Loader  /> : <Home/>
      } */}
      <Home />
    </div>
  )
}

export default App
