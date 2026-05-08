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
                <Link>
                    <h1>{data.name}</h1>
                </Link>
            </div>)}
        </>
    )
}

export default User