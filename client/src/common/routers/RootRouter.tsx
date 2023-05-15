import { Routes, Route } from "react-router-dom"


const RootRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<p>Hello World!</p>}/>
    </Routes>
  )
}

export default RootRouter