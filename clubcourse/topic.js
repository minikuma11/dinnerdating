var topic = [
    "謝師宴",
    "導生聚",
    "親愛的慶生派對",
    "通識邊緣人聚餐",
    "同學會",
    "社團飯局",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6,20);