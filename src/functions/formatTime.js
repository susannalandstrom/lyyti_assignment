const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const formatTime = (startTime) => {
    const date = new Date(startTime * 1000)
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const minuteFormatted = minute < 10 ? "0" + minute : minute
    const secondFormatted = second < 10 ? "0" + second : second
    
    return weekdays[date.getDay()] + ' ' 
            + date.getDate() + '.' 
            + (date.getMonth() + 1) + '.' 
            + date.getFullYear() + ' ' 
            + date.getHours() + ':' 
            + minuteFormatted + ':' 
            + secondFormatted
  }