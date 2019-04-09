import posts from './mocks/posts.json'

export default {
  get: () => new Promise(resolve => setTimeout(() => resolve(posts), 100)),
}
