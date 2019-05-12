// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSet = `subscription OnCreateSet {
  onCreateSet {
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
export const onUpdateSet = `subscription OnUpdateSet {
  onUpdateSet {
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
export const onDeleteSet = `subscription OnDeleteSet {
  onDeleteSet {
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
export const onCreateCard = `subscription OnCreateCard {
  onCreateCard {
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
export const onUpdateCard = `subscription OnUpdateCard {
  onUpdateCard {
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
export const onDeleteCard = `subscription OnDeleteCard {
  onDeleteCard {
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
