export const IMAGE_UNAVAILABLE_PLACEHOLDER = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"

export const API__GAMES_URL = (key: string, page: number, page_size: number = 20) => `https://api.rawg.io/api/games?key=${key}&page=${page}&page_size=${page_size}`;
