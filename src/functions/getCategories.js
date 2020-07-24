export const getCategories = (event) => {
    const keys = Object.keys(event.category)
    const categories = keys.map(key => {
      return event.category[key].title
    })
    return categories
  }