export type Location = {
  country: string;
  region: string;
};

export type Destination = {
  slug: string;
  title: string;
  location: Location;
  description: string;
  thumbnail: string;
  banner: string;
};

export interface FilterState {
  search: string;
  country: string;
  region: string;
}