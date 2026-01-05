import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersList = signal<User[]>([
    {
      id: 1,
      name: 'Mauro Otero',
      email: 'mauro@dev.com',
      role: 'admin',
      status: true,
    },
    {
      id: 1,
      name: 'Cesar Jaramillo',
      email: 'cesar@dev.com',
      role: 'user',
      status: true,
    },
  ]);

  users = this.usersList.asReadonly();

  getById(id: number): User | undefined {
    return this.usersList().find((user) => user.id === id);
  }

  create(user: Omit<User, 'id'>): void {
    const newUser = { ...user, id: Date.now() };
    this.usersList.update((users) => [...users, newUser]);
  }

  update(id: number, user: Partial<User>): void {
    this.usersList.update((users) =>
      users.map((u) => (u.id === id ? { ...u, ...user } : u))
    );
  }

  delete(id: number): void {
    this.usersList.update((users) => users.filter((u) => u.id !== id));
  }
}
