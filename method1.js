function monthsWorked(date) {
    return moment().diff(moment(date), 'months');
}