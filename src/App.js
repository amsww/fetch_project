import React,{useEffect,useState} from 'react';
import './App.css';
import Post from './Post';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';

function App() {

  
  const [data,setData] = useState([]);
  useEffect(()=> fetchAPI,[])


  const fetchAPI = async() => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  response = await response.json()
  setData(response)
        } 

  const onAdd = async (title, body) => {
   let response =  await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              body
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
      response =response.status == 201 &&  await  response.json();
      console.log(response)
      setData([...data,response])
        };


const onEdit = async (id , title, body) => {
    let response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          id,
          title,
          body,
          userId:id
            }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
              })
       
      response =response.status == 200 &&  await  response.json();
      setData(data.map(item => item.id == id ? response:item))
               };

  return (
    <div className="App">
      <AddPost 
        onAdd={onAdd}
      />
      <EditPost
      onEdit={onEdit}
      />
     <div className='postDiv'>
     {data.map(item => (
        <Post
        item={item}
        key ={item.id} />
      ))}
     </div>
    </div>
  );
}

export default App;









