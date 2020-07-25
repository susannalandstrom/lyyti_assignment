export const getCategories = (event) => {
    if (!event) return "Categories not found"

    const keys = Object.keys(event.category)
    const categories = keys.map(key => {
      return event.category[key].title
    })
    return categories
  }