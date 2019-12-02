/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyLongShoreman = `query GetMyLongShoreman($id: ID!) {
  getMyLongShoreman(id: $id) {
    id
    name
    owner
    date
    description
    completed
  }
}
`;
export const listMyLongShoremans = `query ListMyLongShoremans(
  $filter: ModelMyLongShoremanFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyLongShoremans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      date
      description
      completed
    }
    nextToken
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    owner
    date
    description
    completed
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      date
      description
      completed
    }
    nextToken
  }
}
`;
export const searchMyLongShoremans = `query SearchMyLongShoremans(
  $filter: SearchableMyLongShoremanFilterInput
  $sort: SearchableMyLongShoremanSortInput
  $limit: Int
  $nextToken: String
) {
  searchMyLongShoremans(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      owner
      date
      description
      completed
    }
    nextToken
    total
  }
}
`;
export const searchTodos = `query SearchTodos(
  $filter: SearchableTodoFilterInput
  $sort: SearchableTodoSortInput
  $limit: Int
  $nextToken: String
) {
  searchTodos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      owner
      date
      description
      completed
    }
    nextToken
    total
  }
}
`;
