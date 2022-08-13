export const formatDate = (dateObject) => {
    const second = formatTime(dateObject.getSeconds())
    const minute = formatTime(dateObject.getMinutes())
    const hour = formatTime(dateObject.getHours())
    const date = formatTime(dateObject.getDate())
    const month = formatTime(dateObject.getMonth() + 1)
    const year = dateObject.getFullYear()

    const format = `${hour}:${minute}:${second} - ${date}/${month}/${year}`
    return format
}

const formatTime = (data) => {
    return data >= 10 ? data : `0${data}`
}