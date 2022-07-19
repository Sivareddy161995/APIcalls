

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);
  
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
    axios.get(`${baseURL}/6`).then((response) => {
      console.log(response)
      setPost(response.data);
    }).catch((error)=> {
      console.log(error);
    setErr(error.message)
    });
  }, []);
  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  if (!post) return null;

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Sri MAni Updated!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }


  if (!post) return "No post!"

  return (
    <div>

      { err ? <h2>{err}</h2> : <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>

      <button onClick={deletePost}>Delete Post</button>
      </>

      }
      
    </div>
  );
}



/*
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}


/*
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

/*import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}




/*import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './App.css';

const App = () => {
  const[data,setData] = useState([]);
  useEffect(()=>{
    axios.post("https://jsonplaceholder.typicode.com/todos").then
    (response => setData(response.data))
  },[])
  return (
    <div >
    {data.map(item => <li key={item.id}>{item.title}</li>)}
          </div>
  );
}

export default App;
*/





// import React, { useState } from 'react'

// //import React from 'react'

// function App() {
//   const [student, setStudent] = useState([
//     {
//       name:'siva',
//       gender:'male',
//       percentage:'70'

//     },
//     {
//       name:'sri',
//       gender:'female',
//       percentage:'80'

//     },
//     {
//       name:'nave',
//       gender:'male',
//       percentage:'90'

//     },
//     {
//       name:'rtao',
//       gender:'xx',
//       percentage:'50'

//     }

//   ]);
//   return (
//     <div className="App">

//       <h3>REACTJS</h3>
//     <table>
//       <thead>
//         <th>name</th>
//         <th>gender</th>
//         <th>percentage</th>
//        </thead>
//       <tbody>
//         {
//           student.map((student)=>{
//             return (
//               <tr>
//               <td>{student.name}</td>
//               <td>{student.gender}
//               {
//                 student.gender === 'male' && (<img src ="https://i.pinimg.com/564x/f4/9c/2c/f49c2c5054772ed87c4cdd28db9ff354.jpg" alt="" width="30px"/>)
//               }
//               {
//                 student.gender ==='female' && (<img src ="https://www.freeiconspng.com/thumbs/female-icon/female-icon-27.png" alt="" width="30px"/>)
//               }
//               </td>
//               <td>{student.percentage}</td>
//               </tr>
//             )
//           })
//         }
        
//       </tbody>
//     </table>
//     </div>
//   );
// }

// export default App;
/*export default function App() {
  const[number, setNumber] = React.useState(9);
  return (
    <div className='App'>
      <h3>welcome to reactjs</h3>
      <h1>given number is:{number}</h1>
      <input type="text" onChange={(e)=>{setNumber(e.target.value)}}/>
       {number%2===0?(
      <h3>Even Number</h3>):
      (<h3>Odd Number</h3>)}
      </div>
  )
}











/*import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './App.css';

const App = () => {
  const[data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => setData(response.data))
  },[])
  return (
    <div >
    {data.map(item => <li key={item.id}>{item.title}</li>)}
          </div>
  );
}

export default App;
*/