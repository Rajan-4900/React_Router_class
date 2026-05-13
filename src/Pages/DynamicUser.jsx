import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicUser = () => {
  // console.log(useParams())

  // useParams() is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
  // In this case, it will return an object with the key 'id' and the value will be whatever is in the URL after '/user/'.
  const { id } = useParams()
  const user = [
    { id: 1, name: "Rajan", gmail: "rajan@gmail.com", age: 20 },
    { id: 2, name: "Raj", gmail: "raj@gmail.com", age: 20 },
    { id: 3, name: "Raju", gmail: "raju@gmail.com", age: 20 },
    { id: 4, name: "Rajesh", gmail: "rajesh@gmail.com", age: 20 }
  ];
  //const specificUser = user.filter(data => data.id == id) // this will filter the user array and return the specific user object that matches the id from the URL. We use '==' instead of '===' because the id from the URL is a string and the id in the user array is a number.
  const specificUser = user.find(data => data.id == id) // this will filter the user array and return the specific user object that matches the id from the URL. We use '==' instead of '===' because the id from the URL is a string and the id in the user array is a number.
  console.log(specificUser) // this will return an array with the specific user object that matches the id from the URL.
  return (
    // this will displays the values in the screen instead of in the console. We use specificUser[0] because filter() returns an array and we want to access the first element of that array which is the specific user object.
    <div>
      <h1>ID : {specificUser.id}</h1>
      <h1>Name : {specificUser.name}</h1>
      <h1>Gmail : {specificUser.gmail}</h1>
      <h1>Age : {specificUser.age}</h1>
    </div>
  )
}

export default DynamicUser