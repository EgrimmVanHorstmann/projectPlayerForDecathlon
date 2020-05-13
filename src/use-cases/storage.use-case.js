const PLAYER_STORAGE_KEY_PREFIX = 'player'
const getCalculatedKey = key => `${PLAYER_STORAGE_KEY_PREFIX}.${key}`

export default class StorageUseCase {
  static getItem (key) {
    return localStorage.getItem(getCalculatedKey(key))
  }

  static getItemParsed (key) {
    const theKey = getCalculatedKey(key)
    try {
      return JSON.parse(localStorage.getItem(theKey))
    } catch (e) {
      localStorage.removeItem(theKey) // clear key to avoid polluting user memory
      return null
    }
  }

  static setItem (key, value) {
    localStorage.setItem(getCalculatedKey(key), JSON.stringify(value))
  }

  static removeItem (key) {
    localStorage.removeItem(getCalculatedKey(key))
  }
}
