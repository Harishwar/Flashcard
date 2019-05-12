// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSet = `mutation CreateSet($input: CreateSetInput!) {
  createSet(input: $input) {
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
export const updateSet = `mutation UpdateSet($input: UpdateSetInput!) {
  updateSet(input: $input) {
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
export const deleteSet = `mutation DeleteSet($input: DeleteSetInput!) {
  deleteSet(input: $input) {
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
export const createCard = `mutation CreateCard($input: CreateCardInput!) {
  createCard(input: $input) {
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
export const updateCard = `mutation UpdateCard($input: UpdateCardInput!) {
  updateCard(input: $input) {
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
export const deleteCard = `mutation DeleteCard($input: DeleteCardInput!) {
  deleteCard(input: $input) {
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
