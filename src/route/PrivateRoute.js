import React from 'react'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
  const auth = useSelector(state=>state.auth.auth)
  return (
    auth===true?<Detail/>:<Navigate to={'/login'}/>
  )
}
