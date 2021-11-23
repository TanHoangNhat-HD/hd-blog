import * as React from 'react'
import { Navigate } from 'react-router'
import { useAppSelector } from '../core/hooks/hooks'

export interface PrivateRouteProps {
  children: React.ReactElement
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const username = useAppSelector((state) => state.user.username)
  return username ? children : <Navigate to='/sign-in' />
}
