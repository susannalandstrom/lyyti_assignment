export const getName = (event) => {
    const keys = Object.keys(event.name)
    if (keys.includes('en')) {
      return event.name.en
    }
    else return event.name[keys[0]]
}