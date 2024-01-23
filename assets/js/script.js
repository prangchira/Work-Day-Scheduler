$('#currentDay').text(dayjs().format("dddd, Do MMMM YYYY"));            //get the current date 
var StartHour = 17;                                                     //set the first Hour (0-24) to display on Scheduler
var EndHour= 24;                                                        //set the last Hour (0-24) to display on Scheduler
var HourNow = dayjs().format('H');                                      //get the current time only in Hour


// Add content/styles
for (var i=StartHour;i<=EndHour;i++){
    createTr(i);   
    SetColour(i);
}

// Create and append table rows in html via script. Also add id and class to format. Add Hour display in AM/PM format
function createTr(j){
    var t = dayjs('1/1/1 ' + j+ ':00').format('hA')                     //to convert the Hour number into format AM/PM
    $('tbody').append(`
      <tr id="tr${j}">
        <td class = "hour col-1" id="Hour${j}">${t}</td>
        <td class = "col-10" style="border-bottom-width: none ; padding:none" ><textarea  id="Task${j}"></textarea></td>
        <td><button class = "btn saveBtn col-1 row id="Btn${j}"><i class="fa fa-save"></i></button></td>
      </tr>
    `);
}

// Compare the Hour display to current Hour and set the colour for past, present and future accordingly
function SetColour(k){
    var idTag = "#Task"+k
    if(k===Math.floor(HourNow)){
        $(idTag).addClass("present");
    }else if(i<HourNow){
        $(idTag).addClass('past');
    }else{
        $(idTag).addClass('future');
    }
}

//When button is clicked, the whole schedule is saved to localStorage
$('button').on("click",function(event){
    for (var k=StartHour;k<=EndHour;k++){
        localStorage.setItem("Task"+k, $("#Task"+k).val());
    }
})

//Display the Tasks saved in LocalStorage
for (var k=StartHour;k<=EndHour;k++){
    $("#Task"+k).val(localStorage.getItem("Task"+k));
}




