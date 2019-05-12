// tslint:disable
// this is an auto generated file. This will be overwritten

export const getSet = `query GetSet($id: ID!) {
  getSet(id: $id) {
    id
    name
    createdAt
    cards {
      items {
        id
        createdAt
        title
        description
        order
      }
      nextToken
    }
  }
}
`;
export const listSets = `query ListSets($filter: ModelSetFilterInput, $limit: Int, $nextToken: String) {
  listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      cards {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
    id
    createdAt
    title
    description
    order
    set {
      id
      name
      createdAt
      cards {
        nextToken
      }
    }
  }
}
`;
export const listCards = `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      title
      description
      order
      set {
        id
        name
        createdAt
      }
    }
    nextToken
  }
}
`;
