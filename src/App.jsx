import Navbar from './Components/Navbar'
import Buttons from './Components/Buttons'
import AddNumber from './Components/AddNumber'
import Canvas from './Components/Canvas'
import { useState } from 'react'
import "./styles.css";
import Footer from './Components/Footer'
function App() {

  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(Number.MIN_VALUE);
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%", alignItems: "center" }}>
      <Navbar />
      <AddNumber data={data} rawData={rawData} minHeight={minHeight} maxHeight={maxHeight} setData={setData} setRawData={setRawData} setMinHeight={setMinHeight} setMaxHeight={setMaxHeight} disabled={disabled}/>
      <Buttons data={data} disabled={disabled} setData={setData} setDisabled={setDisabled}/>
      <Canvas data={data} minHeight={minHeight} maxHeight={maxHeight}/>
      <Footer minHeight={minHeight} maxHeight={maxHeight}/>
    </div>
  )
}

export default App
