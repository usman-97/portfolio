export const getZoneTime = (tz) => {
    return new Date().toLocaleTimeString("en-GB", {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

export const getYear = () => {
    return new Date().getFullYear();
}