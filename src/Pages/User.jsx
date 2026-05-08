import React from 'react'

const User = () => {
    const user = [
        { id:1, name:"Rajan", gmail:"rajan@gmail.com"},
        { id:2, name:"Raj", gmail:"raj@gmail.com"},
        { id:3, name:"Raju", gmail:"raju@gmail.com"},
        { id:4, name:"Rajesh", gmail:"rajesh@gmail.com"}
    ]
  return (
    <>
    {user.map((data)=><div key={data.id}>
        <h1></h1>
    </div>)}
    </>
  )
}

export default User