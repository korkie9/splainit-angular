export interface Game {
    id: string,
    name: string,
    creator: string,
    teamNames: string[],

    noWordsPerPlayer: number,
    password: string
}