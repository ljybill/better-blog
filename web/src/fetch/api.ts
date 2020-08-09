import core from './core'

const PREFIX = '/api'
const PATH_ARTICLES = '/articles'
const PATH_ARTICLE = '/article'

export const getArticles = () => core.get(PREFIX + PATH_ARTICLES)
export const getArticle = (title: string) => core.get(PREFIX + PATH_ARTICLE + `/${title}`)
