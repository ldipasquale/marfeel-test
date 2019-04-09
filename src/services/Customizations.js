import customizations from './mocks/customizations.json'

export default {
  get: () => new Promise(resolve => setTimeout(() => resolve(customizations), 1000)),
}
