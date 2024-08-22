import { useEffect, useState } from 'react'

// react is not gonna look into it
// let state = {
//   count: 1
// }

// function App() {
//   const [count,setCount] = useState(0);

//   return (
//     <div>
//       <div>
//         <h3>Hii There ! 😀</h3>
//         {/* <button onClick={clickfunc}>Counter: {count}</button>
//         {state.count} -->  is the syntax how you render a dynamic variable inside a component */}
//         <CustomButton count={count} setCount={setCount}></CustomButton>
//       </div>
//     </div>
//   )
// }

// // here CustomButton is another component
// // props --> basically the dynamic variables as inputs
// function CustomButton(props) {
//   function clickfunc() {
//     // alert("checking usesatate functionality")
//     // count  = count + 1; --> this is not the way in which you change your variable
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={clickfunc}>Counter: {props.count}</button>
// }


// Another way


// function App() {
//   const [todo,setTodo] = useState([
//     {
//         title: "doing dsa",
//         description: "doing dsa will make you strong"
//     },
//     {
//         title: "doing devlopment",
//         description: "doing dev will mak eyou in any startup"
//     },
//   ]);

//   function addTodo() {
//     // const arr = [1,2] -> [...arr,3] --> will simply add 3 in the array--> [1,2,3]
//     // 🔴 jaise hi state change hua then react khud hi component ko re-render kr dega 🔴
//     // Any time parent gets re-rendered , all of it's childs will get re-rendered
//     setTodo([...todo,
//       {
//         title: "new task",
//         description: "checking wheteher it is working or not"
//       }
//     ])
//   }

//   return (
//     <div>
//         <h3>Hii There ! 😀</h3>
//         {todo.map(function(obj) {
//           return <Make_todo title={obj.title} description={obj.description} />
//         })}
//         <button onClick={addTodo}>Click for adding a to_do</button>
//     </div>
//   )
// }

// function Make_todo(props) {
//     return (
//         <div>
//             <h4>{props.title}</h4>
//             <p>{props.description}</p>
//         </div>
//     )
// }


// Deeper dive in react
// Other hooks

// RE-RENDERING

function App() {
  // here you will need to use <div></div> , kyunki --> you can't return two parent together
  return (
    // <div>
    //   <Header title="deepak"/>
    //   <Header title="suraj"/>
    // </div>
    // iski wajah se ek extra div add ho raha so simply u can use <></> , it will not add an extra div also --> <React.Fragment/> both will work
    <div>
      <Headerwithbutton/>
      <Header title="suraj"/>
      <Header title="Aditya"/>
      <Header title="Amit"/>
    </div>
  )
}

// push the state down here
function Headerwithbutton() {
  const [title,setTitle] = useState("deepak");

  function changeTitle() {
    setTitle(Math.random);
  }

    return (
      <div>
        <button onClick={changeTitle}>Change the name</button>
        <Header title={title}/>
      </div>
    )
}

function Header(props) {
  return <div>
    My name is {props.title}
  </div>
}


// Keys

// let counter = 3;
// function App() {
//   const [todo,setTodo] = useState([
//     {
//       id: 1,
//       title: "Do atleast one prblm of DSA",
//       description: "Do it from 9-10 pm"
//     },{
//       id: 2,
//       title: "Go to gym",
//       description: "go to gym from 5-6 pm"
//     },
//   ]);

//   function addTodo() {
//     setTodo([...todo,{
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }]);
//   }

//   return (
//     <>
//       {todo.map(function(el) {
//         return <Todo key={el.id} title={el.title} description={el.description}/>
//       })}
//       <button onClick={addTodo}>Click for adding a todo</button>
//     </>
//   )
// }

// function Todo(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </div>
//   )
// }

// WRAPPER COMPONENT

// function App() {
//   return (
//     <>
//       <Cardwrapper>
//         Hii There !
//       </Cardwrapper>
//     </>
//   )
// }

// function Cardwrapper({children}) { // here you can only write "children" as argument
//   return (
//     <div style={{border: "2px solid black", padding: 20}}>
//       {children}
//     </div>
//   )
// }

// USEEFFECT

// function App() {
//   const [todos,setTodos] = useState([]);

//   useEffect(() => { // here you can't use async function --> useEffect ka first function shouln't be async
//     setTimeout(() => {
//       fetch("https://sum-server.100xdevs.com/todos")
//         .then(async function(res) {
//           const json = await res.json();
//           setTodos(json.todos);
//       });
//     },10000);
//   },[])
//   //Here 👆🏻 empty array(known as dependency array)means-->It will fetch data only once, not on every re-rendeing
//   // if you give an variable let say , then whenever that variable will change this fetching will take place

//   return (
//     <>
//       {todos.map(function(el) {
//         return <Todo key={el.id} title={el.title} description={el.description}/>
//       })}
//     </>
//   )
// }

// function Todo(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <h3>{props.description}</h3>
//     </div>
//   )
// }

export default App