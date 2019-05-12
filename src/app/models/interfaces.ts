export interface AppSyncResponse {
    data: any;
    loading: false;
    networkStatus: number;
    stale: false;
}

export interface SetInterface {
    id: string | null;
    name: string;
    createdAt: string | null;
    cards: CardInterface[];
}


export interface CardInterface {
    id?: string | null;
    createdAt?: string | null;
    title: string;
    description: string;
    order: number;
    cardSetId: string;
}
