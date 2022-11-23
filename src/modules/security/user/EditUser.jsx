import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectUserById } from "../../../redux/reducers/users/usersSlice";
const EditUser = () => {
  const { userId } = useParams()
  const user = useSelector(state => selectUserById(state, userId))
  return (
    <div>
      
    </div>
  )
}

export default EditUser