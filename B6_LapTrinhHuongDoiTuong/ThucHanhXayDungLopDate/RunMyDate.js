function origin() {
    let date = new MyDate(2, 2, 2007);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getYear();
    alert(day + "/" + month + "/" + year);
}

function set() {
    let date = new MyDate();
    let day = date.setDay(10);
    let month = date.setMonth(10);
    let year = date.setYear(2019);
    day = date.getDay();
    month = date.getMonth();
    year = date.getYear();
    alert(day + "/" + month + "/" + year);

}
function update() {
    let date = new MyDate();
    let inputDay = prompt("Enter the Day");
    let inputMonth = prompt("Enter the Month");
    let inputYear = prompt("Enter the Year");
    let day = date.setDay(parseInt(inputDay));
    let month = date.setMonth(parseInt(inputMonth));
    let year = date.setYear(parseInt(inputYear));
    day = date.getDay();
    month = date.getMonth();
    year = date.getYear();
    let printDate = day + "/" + month +"/"+year;
    alert(printDate);
}

    

