import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types/types'

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: process.env.EXPIRES_IN
    }
  )
  return token
} 