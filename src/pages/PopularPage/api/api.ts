import { Profile } from "../../../app/types/profiles";

const id: string = "YOUR_CLIENT_ID";
const sec: string = "YOUR_SECRET_ID";
const params: string = `?client_id=${id}&client_secret=${sec}`;

export function fetchPopularRepos(language: string): Promise<any[]> {
  const endpoint: string = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
}

function getErrorMsg(message: string, username: string): string {
  if (message === "Not Found") {
    return `${username} doesn't exist`;
  }
  return message;
}

function getProfile(username: string): Promise<any> {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username));
      }
      return profile;
    });
}

function getRepos(username: string): Promise<any[]> {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username));
      }
      return repos;
    });
}

function getStarCount(repos: any[]): number {
  return repos.reduce((count, { stargazers_count }) => {
    return count + stargazers_count;
  }, 0);
}

function calculateScore(followers: number, repos: any[]): number {
  return followers * 3 + getStarCount(repos);
}

function getUserData(
  player: string
): Promise<{ profile: Profile; score: number }> {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  );
}

function sortPlayers(players: { score: number }[]): { score: number }[] {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players: string[]): Promise<{ score: number }[]> {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    sortPlayers
  );
}
