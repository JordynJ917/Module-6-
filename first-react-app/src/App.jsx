// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
// import PropsDisplayer from './components/PropsDisplayer'
// import City from './components/City'
// import Address from './components/Address'
// import Pet from './components/Pet'
// import Greeting from './components/Greeting'
// import FullName from './components/FullName'
// import ComplexComment from './components/ComplexComponent'
// import FancyBox from './components/FancyBox'
import MoviesList from './components/MovieList'
import BigCats from './components/bigCats';
import './components/BigCat.css'
import MoodChanger from './components/MoodChanger';
import Emoji from './components/Emoji';
import BirthdayTranslator from './components/BirthdayTranslator';
// import Weather from './components/Weather';
import LoginForm from './components/loginform';
// import ExplodingBomb from './components/ExplodingBomb';
import Calculator from './components/calculator';

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

//   function Welcome(props) { // custom Welcome component
//     return (
//     <div className="Welcome componentBox">
//       {/* if the 'name' prop exists, render it on the screen */}
//       <h3>Welcome {props.name}!</h3>
//       {/* if this component has children, render them here */}
//       {props.children}
//     </div>
//   )
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: { 
//     name: 'Hello Kitty',
//     avatarUrl: 'data:image/png;base64,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',
//   },
// };

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
      {/* <PropsDisplayer name="Harry Styles" age={29}/>
      <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */}
      {/* <City name="Sydney" />
      <City name="Melbourne" state="VIC" /> */}
      {/* <City name="Chicago" state="Illinois" country="USA" /> */}
      {/* <Address Street="380 Random" zipcode='12'/> */}
      {/* <City name="Newcastle">
        <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
        <div><strong>Population:</strong> 322,278 (2016)</div>
        <div><strong>Random:</strong>Hellooooo!</div>
      </City> */}
      {/* <Pet name="random" type="random type" colour="brown"/> */}
      {/* <Greeting name="John">
        <div>This is the child text</div>
      </Greeting> */}
      {/* <FullName first="Kendrick" middle="Mustaaarrrd" last="Lamar"/> */}
      {/* <ComplexComment author={comment.author}
      date={comment.date}
      text={comment.date}/> */}
      {/* <Callout title="Nested React Component"
      message="Simple message with a fancy box applied via composition">
      <FullName first="Elon" last="Musk" />
      </Callout> */}
      {/* <MoviesList/> */}
      {/* <BigCats/> */}
      {/* <MoodChanger/> */}
      {/* <Emoji/> */}
      {/* <BirthdayTranslator/> */}
      {/* <Weather/> */}
      {/* <LoginForm/> */}
      {/* <ExplodingBomb/> */}
      <Calculator/>
    </div> 
  )
}

export default App;
