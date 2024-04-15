

import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser(username) {
  const { data, error, mutate } = username ? useSWR(`https://api.github.com/users/${username}`, fetcher) : {}

  const refetch = () => mutate(fetcher(`https://api.github.com/users/${username}`))

  return { data, loading: !data && !error, error, refetch };
}