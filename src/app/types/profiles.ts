export interface Profile {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location?: string;
  company?: string;
}

export interface Player {
  profile: Profile;
  score: number;
}
