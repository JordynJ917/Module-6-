// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import PropsDisplayer from './components/PropsDisplayer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 4)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
    
//   )
// }

// const spiderman = { 
//   name: 'Spiderman', 
//   alterEgo: 'Peter Parker', 
//   catchPhrase: 'With great power comes great responsibility' 
// };
// const spideyJSX = ( <div>
//   <h3>{spiderman.name}</h3>
//   <blockquote>{Spiderman.catchPhrase}</blockquote>
//   <cite>{spiderman.alterEgo}</cite>
//   </div>
// )

// function ExampleComponent() {
//   return (
//     <div className="ExampleComponent componentBox">
//       <h1>My Example Component</h1>
//         <p>My first React component!</p>
//     </div>
//   )
//   }

  // function ExampleComponent2() {
  //   return (
  //     <div className="ExampleComponent componentBox">
  //       <h1>My Example Component 2</h1>
  //         <p>My first React component!</p>
  //     </div>
  //   )
  //   }

  function Welcome(props) { // custom Welcome component
    return (
    <div className="Welcome componentBox">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* {spideyJSX}
      {spideyJSXFragment} */}
      {/* <ExampleComponent/> */}
      {/* <ExampleComponent2/> */}
      {/* <Welcome name="students">
        <p>Children of Welcome Component</p>
      </Welcome> */}
      {/* <PropsDisplayer/>
      <PropsDisplayer myProp="first prop"/>
      <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}
      <PropsDisplayer name="Harry Styles" age={29}/>
      <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
      <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>
    </div>
  )
}

export default App;
