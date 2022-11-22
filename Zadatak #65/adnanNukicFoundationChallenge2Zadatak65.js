/*
Napisati funkciju koja racuna broj dana izmedju dva datuma. Datum u funkciju
prosljedjujete kao string u formatu DD.MM.YYYY.
PRIMJERI:
countDays(‘22.07.2022’, ‘30.12.2022’) → 161
countDays(‘19.09.2022’, ‘17.05.2023’) → 240
*/

function countDays(startDate, endDate) {

    let date1 = startDate.slice(3,5) + '/' + startDate.slice(0,2) + '/' + startDate.slice(6,10);
    let date2 = endDate.slice(3,5) + '/' + endDate.slice(0,2) + '/' + endDate.slice(6,10);

    date1 = new Date(date1);
    date2 = new Date(date2);

    //racunanje vremenske razlike:
    var time_difference = date2.getTime() - date1.getTime();

    //racunanje razlike dana dijeljenje ukupnog broja milisekundi dana:
    var days_difference = Math.round(time_difference / (1000 * 60 * 60 * 24));

    return days_difference;
}
console.log(countDays('22.07.2022', '30.12.2022'));