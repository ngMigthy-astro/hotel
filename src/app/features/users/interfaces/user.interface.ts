export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  status: boolean;
  //todo: crear otra interface
  role: UserRole
}
export type UserRole = 'admin' | 'user' | 'guest';
