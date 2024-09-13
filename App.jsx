import { useState } from 'react'
import React from 'react' 
import './App.css'
// import Counter from './Components/Counter/Counter'
// import Toggle from './Components/Toggle/Toggle'
// import Card from './Components/Cards/Card/Card'
// import Child from './Components/Cards/Card/Child'
// import Todo from './Components/Todo/Todo'
// import Like from './Components/Like_btn/Like'
// import ProductList from './Components/Map/Map'
// import DropDown from './Components/Dropdown/DropDown'
// import Authent from './Components/Authentication/Authent'
// import Rendering from './Components/Rendering/Rendering'
// import Active from './Components/Active/Active'
// import Fetch from './Components/Fetch/Fetch'
// import Width from './Components/Width/Width'
// import Parent from './Components/Authentic/Parent/Parent'
// import Login from './Components/Authentic/Login/Login'
// import Logout from './Components/Authentic/Logout/Logout'
// import Userinfo from './Components/Authentic/Userinfo/Userinfo'
// import { useTheme } from './Components/Theme/Theme/Theme'
// import NewTheme from './Components/Theme/NewTheme/NewTheme'
import Multiple from './Components/Multiple/Multiple'
import { CardProvider } from './Components/Multiple/CardContext'


function App() {
// const {theme} = useTheme(); 



  return (
    <>
      {/* <Counter/> */}
      {/* <Toggle /> */}
      {/* <Card /> */}
      {/* <Child/> */}
      {/* <Todo/> */}
      {/* <Like/> */}
      {/* <ProductList/> */}
      {/* <DropDown/> */}
      {/* <Authent/> */}
      {/* <Rendering/> */}
      {/* <Active/> */}
      {/* <Fetch/> */}
      {/* <Width/> */}

      {/* <Parent>

        <div className='App'>
          <h1>Welcome</h1>
          <Login />
          <Logout />
          <Userinfo />
        </div>
      
      </Parent> */}

{/* <div 
style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>

      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)}Theme</h1>

      
      <NewTheme/>
    </div> */}

<CardProvider>
        <Multiple />
    </CardProvider>
      


    </>

  )
}

export default App





