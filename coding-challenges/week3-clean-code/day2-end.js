function calculateDaysUntilDate(date) {
    const currentDate = new Date();
    const days = Math.ceil(
        Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    return days;
}

function compareDates(date1, date2) {
    date1 = date1.toDateString();
    date2 = date2.toDateString();
    return date1;
}

function comp1(date1, date2) {
    const daysUntilDate1 = calculateDaysUntilDate(date1);
    const daysUntilDate2 = calculateDaysUntilDate(date2);

    const date1String = date1.toDateString();
    const date2String = date2.toDateString();

    if (daysUntilDate1 * 2 <= daysUntilDate2) {
        return `If you thought ${date1String} was a long wait, wait until you see how long it is until ${date2String}.`;
    } else if (daysUntilDate1 < daysUntilDate2) {
        return `Don't worry, ${date2String} isn't too much farther away than ${date1String} in the scheme of things.`;
    } else if (daysUntilDate1 === daysUntilDate2) {
        return `They're the same number of days away!`;
    } else {
        return `You know ${date1String} is closer, right?`;
    }
}

function comp2(date1, date2) {
    const daysUntilDate1 = calculateDaysUntilDate(date1);
    const daysUntilDate2 = calculateDaysUntilDate(date2);

    const date1String = date1.toDateString();
    const date2String = date2.toDateString();
    if (daysUntilDate1 < daysUntilDate2) {
        const difference = Math.floor(daysUntilDate2 / daysUntilDate1);
        return `Looks like ${date2String} is ${difference} times farther away than ${date1String}.`;
    } else if (daysUntilDate1 === daysUntilDate2) {
        return `Same exact date there, mate.`;
    } else {
        const difference = Math.floor(daysUntilDate1 / daysUntilDate2);
        return `Looks like ${date1String} is ${difference} times farther away than ${date2String}.`;
    }
}

function compareDaysUntilDates(date1, date2) {
    const daysUntilDate1 = calculateDaysUntilDate(date1);
    const daysUntilDate2 = calculateDaysUntilDate(date2);

    const date1String = date1.toDateString();
    const date2String = date2.toDateString();
    const difference = daysUntilDate2 - daysUntilDate1;
    return `You have ${daysUntilDate1} days left until ${date1String}, and ${daysUntilDate2} days left until ${date2String}. There are ${difference} days between them.`;
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26);
const dateB = new Date(2022, 11, 25);

console.log(comp1(dateA, dateB));
console.log(comp2(dateA, dateB));
console.log(compareDaysUntilDates(dateA, dateB));
