export const datepicker = () => {
    let days = [];
    let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];
    let years = [];
    for (var i = 1; i < 32; i++) {
        days.push(i);
    }
    for (var j = 1330; j < 1399; j++) {
        years.push(j);
    }
    return { days, months, years };
};
