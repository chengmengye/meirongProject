function addMonth(date, num) {
   num = parseInt(num);
    var sDate = new Date(date);
    var sYear = sDate.getFullYear();
    var sMonth = sDate.getMonth() + 1;
    var sDay = sDate.getDate();
    var eYear = sYear;
    var eMonth = sMonth + num;
    var eDay = sDay;
    while (eMonth > 12) {
      eYear++;
      eMonth -= 12;
    }
    var eDate = new Date(eYear, eMonth - 1, eDay);
    while (eDate.getMonth() != eMonth - 1) {
      eDay--;
      eDate = new Date(eYear, eMonth - 1, eDay);
    }

    return eDate;
 }

function formatDate (date) {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}