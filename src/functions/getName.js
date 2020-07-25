export const getName = (event) => {
    if (!event) return "Name not found"

    const keys = Object.keys(event.name)
    if (keys.includes('en')) {
      return event.name.en
    }
    else return event.name[keys[0]]
}