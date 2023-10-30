interface Game {
    id: number;
    name: string;
    slug: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: {};
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    platforms: [{
        platform: {
            id: number;
            name: string;
            slug: string;
        };
        released_at: string;
        requirements: {
            minimum: string;
            recommended: string;
        }
    }];
    esrb_rating: {
        id: number;
        name: string;
        slug: string;
    };
}

interface GameList {
    count: number;
    next: string;
    previous: string;
    results: Game[];
}

export default Game;
export type {GameList};