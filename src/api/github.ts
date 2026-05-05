import { Octokit } from '@octokit/core'

const octokit = new Octokit()

export type UserInfo = {
  avatar_url: string | null
  bio: string | null
  company: string | null
  public_repos: number
  followers: number
  following: number
  html_url: string | null
  location: string | null
  login: string
  created_at: string
  twitter_username: string | null
}

const formatJoinDate = (iso: string) => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).formatToParts(new Date(iso))

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ''

  return `${get('day')} ${get('month')} ${get('year')}`
}

export const fetchUserInfo = async (username: string) => {
  try {
    const { data } = await octokit.request('GET /users/{username}', {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2026-03-10',
      },
    })

    const result = {
      created_at: formatJoinDate(data.created_at),
      avatar_url: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      following: data.following,
      html_url: data.html_url,
      location: data.location,
      login: data.login,
      twitter_username: data.twitter_username,
      public_repos: data.public_repos,
    } as UserInfo

    return result
  } catch (error) {
    console.error(error)
    return null
  }
}
