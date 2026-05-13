import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicUser = () => {
  // console.log(useParams())

  // useParams() is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
  // In this case, it will return an object with the key 'id' and the value will be whatever is in the URL after '/user/'.
  const {id} = useParams()
  return (
    <div>
      <h1>ID : {id}</h1>
    </div>
  )
}

export default DynamicUser