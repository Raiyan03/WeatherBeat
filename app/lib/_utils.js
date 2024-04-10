export const intoTemp = (num) => {
    return Math.ceil(parseInt(num));
}

export const intoTime = (time) => {
    const date = new Date(time * 1000)
    const format = { hour: 'numeric',  minute: 'numeric', hour12: true }
    const readableTime = date.toLocaleTimeString('en-us', format);
    return readableTime;
}