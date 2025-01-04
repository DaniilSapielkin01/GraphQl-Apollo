import { gql } from "@apollo/client";

export const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;

export const NEW_TODO = gql`
  mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {
    newTodo: createTodo(
      title: $title
      user_id: $userId
      completed: $completed
    ) {
      id
      title
      user_id
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;
