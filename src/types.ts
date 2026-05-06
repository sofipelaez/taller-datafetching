// src/types.ts
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// src/types.ts (añadir)
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}