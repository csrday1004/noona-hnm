import React from 'react'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = (page) => {
  const auth = useSelector(state=>state.auth.auth)
  return (
    auth===true?<Detail page={page}/>:<Navigate to={'/login'}/>
  )
}
