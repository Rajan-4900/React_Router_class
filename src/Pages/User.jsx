import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user = [
        { id: 1, name: "Rajan", gmail: "rajan@gmail.com", age: 20 },
        { id: 2, name: "Raj", gmail: "raj@gmail.com", age: 20 },
        { id: 3, name: "Raju", gmail: "raju@gmail.com", age: 20 },
        { id: 4, name: "Rajesh", gmail: "rajesh@gmail.com", age: 20 }
    ]
    return (
        <>
            {user.map((data) => <div key={data.id}>
                {/* this is a Dynamic Routing which if we click the link inside the body it will redirect to anaother page of same page  */}
                <Link to={`/user/${data.id}`}>
                    <h1>{data.name}</h1>
                </Link>
            </div>)}
        </>
    )
}

export default User