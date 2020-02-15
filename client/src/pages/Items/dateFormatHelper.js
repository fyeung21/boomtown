const dateFormatHelper = isoTime => {

    let date = new Date(isoTime),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return month + ' / ' + day + ' / ' + year
}

export default dateFormatHelper;