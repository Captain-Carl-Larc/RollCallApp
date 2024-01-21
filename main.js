//first button events
let checkBox=document.getElementById("check-box");
let getStartedBtn=document.getElementById("proceed");
let inputBox=document.getElementById("Reginput");
let myData=[];
//fn to ensure checkbox is clicked
function agreeTerms(){
    getStartedBtn.classList.remove("no-display");
}

//fn to display lesson details and hide main section
let lessonDetaiilsSect=document.getElementById("lesson-details");
let mainSect=document.getElementById("main")

function showLessonDetails(){
    lessonDetaiilsSect.classList.remove("no-display");
    mainSect.classList.add("no-display")
}

// fn to fetch lesson details and show next page

let nameCont=document.getElementById("unit-name");
let codeCont=document.getElementById("unit-code");
let lecCont=document.getElementById("lec-name");
let venueCont=document.getElementById("venue");

//fn to put data in display for lesson details
function transferData(){
    let detailsCont=document.getElementById("detsCont");
    let nameDisplay=document.createElement("p");
    nameDisplay.innerHTML="Unit Name: "+nameCont.value;
    detailsCont.appendChild(nameDisplay);
    let codeDisplay=document.createElement("p");
    codeDisplay.innerHTML="Unit Code: "+codeCont.value;
    detailsCont.appendChild(codeDisplay)
    let lecDisplay=document.createElement("p");
    lecDisplay.innerHTML="Lecture Name: "+lecCont.value;
    detailsCont.appendChild(lecDisplay)
    let venueDisplay=document.createElement("p");
    venueDisplay.innerHTML="Venue: "+venueCont.value;
    detailsCont.appendChild(venueDisplay)
}

let reisterSection=document.getElementById("student-data-section")
//fn to check if all data is input
function checkFullness(){
    if (nameCont.value!=='' && codeCont.value!=='' && lecCont.value!=='' && venueCont.value!=='')  {
        transferData();
        reisterSection.classList.remove("no-display");
        reisterSection.classList.add("registration");
        lessonDetaiilsSect.classList.add("no-display");

    } else {
        alert("Please fill the form completely!")
    }
}

let myList=document.getElementById("present-list");
let student=document.createElement("li");
/* function addInfo()
{
   
    student.innerHTML=inputBox.value;
    myList.appendChild(student);
    inputBox.value=''
} */

//FUNCTION TO PUSH VALUE INTO ARRAY FOR STORAGE
function pushData(){
    myData.push(inputBox.value)
}


//FUNCTION TO ADD DATA TO LIST WHEN IT IS NOT OCCURRING AGAIN
function displayData(){
    let ol=document.getElementById("present-list");
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    ol.appendChild(li);
}

//FUNCTION TO CHECK IF DATA ALREADY EXIST TO AVOID DOUBLE REGISTRATION
function checkDuplicate(rawData,value){
    if (rawData.indexOf(value)!==rawData.lastIndexOf(value)) {
        console.log(value+ " "+"already exist");
        alert(inputBox.value+" "+"is already registered!")
        //go ahead and delete it
    } else {
        //THIS IS WHERE WE APPEND THE VALUE
        //WE RUN A FUNCTION TO APPEND THE CHILD
        displayData()
        console.log("Value is new!")
    }
}

//FUNCTION TO HANDLE THE BUTTON CLICK EVENT
function clickBtn(){
    if (inputBox.value=='') {
        console.log("No data entered")
    } else {
        pushData();
        checkDuplicate(myData,inputBox.value)
        inputBox.value=''
        console.log(myData)
    }
  
}


//fn yo show list
let displayCont=document.getElementById("display");


//FUNCTION TO RESET VALUES AND START AFRESH
//CURRENTLY NOT WORKING, NOT FINISHED
function displayOP(){
    displayCont.classList.remove("no-display");
}


//NEXT UPGRADE SEE DIARY BOOK
