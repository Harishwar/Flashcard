/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSetInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
};

export type UpdateSetInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
};

export type DeleteSetInput = {
  id?: string | null,
};

export type CreateCardInput = {
  id?: string | null,
  createdAt?: string | null,
  title: string,
  description: string,
  order: number,
  cardSetId: string,
};

export type UpdateCardInput = {
  id: string,
  createdAt?: string | null,
  title?: string | null,
  description?: string | null,
  order?: number | null,
  cardSetId?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type ModelSetFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  order?: ModelIntFilterInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateSetMutationVariables = {
  input: CreateSetInput,
};

export type CreateSetMutation = {
  createSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateSetMutationVariables = {
  input: UpdateSetInput,
};

export type UpdateSetMutation = {
  updateSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteSetMutationVariables = {
  input: DeleteSetInput,
};

export type DeleteSetMutation = {
  deleteSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type GetSetQueryVariables = {
  id: string,
};

export type GetSetQuery = {
  getSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      createdAt: string | null,
      title: string,
      description: string,
      order: number,
      set:  {
        __typename: "Set",
        id: string,
        name: string,
        createdAt: string | null,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSetSubscription = {
  onCreateSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet:  {
    __typename: "Set",
    id: string,
    name: string,
    createdAt: string | null,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        createdAt: string | null,
        title: string,
        description: string,
        order: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    createdAt: string | null,
    title: string,
    description: string,
    order: number,
    set:  {
      __typename: "Set",
      id: string,
      name: string,
      createdAt: string | null,
      cards:  {
        __typename: "ModelCardConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};
