import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/types";

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_SECRET as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
}; 