export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  genres: { name: string }[];
  runtime: string;
  spoken_languages: { english_name: string }[];
  production_companies: { name: string }[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  original_title: string;
  number_of_seasons: number;
  number_of_episodes: number;
}
export interface Episode {
  air_date: string;
  episode_number: string;
  id: string;
  name: string;
  overview: string;
  production_code: string;
  runtime: string;
  season_number: string;
}
export interface Element {
  type: 'Bloopers' | 'Featurette' | 'Behind the Scenes' | 'Clip' | 'Trailer' | 'Teaser';
}
