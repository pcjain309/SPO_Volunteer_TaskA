// For Jee Checkbox
var query1 =document.querySelector("input[id='Jee checkbox']");
query1.addEventListener('change',function JeeActivate(){
    if(query1.checked){
        let JeeElement = document.getElementsByName("JEE");
        let len = JeeElement.length;
        for(let i=0;i<len;i++) {
            JeeElement[i].checked = true;
        }
    }
    else{
        let JeeElement = document.getElementsByName("JEE");
        let len = JeeElement.length;
        for(let i=0;i<len;i++) {
            JeeElement[i].checked = false;
        }
    }
}
)
// For Gate Checkbox
var query2 =document.querySelector("input[id='Gate checkbox']");
query2.addEventListener('change',function GateActivate(){
    if(query2.checked){
        let GateElement = document.getElementsByName("GATE");
        let len2 = GateElement.length;
        for(let i=0;i<len2;i++) {
            GateElement[i].checked = true;
        }
    }
    else{
        let GateElement = document.getElementsByName("GATE");
        let len2 = GateElement.length;
        for(let i=0;i<len2;i++) {
  
            GateElement[i].checked = false;
        }
    }
}
// For JAM checkbox
)
var query3 =document.querySelector("input[id='JAM checkbox']");
query3.addEventListener('change',function JAMActivate(){
    if(query3.checked){
        let JAMElement = document.getElementsByName("JAM");
        let len2 = JAMElement.length;
        for(let i=0;i<len2;i++) {
            JAMElement[i].checked = true;
        }
    }
    else{
        let JAMElement = document.getElementsByName("JAM");
        let len2 = JAMElement.length;
        for(let i=0;i<len2;i++) {
            JAMElement[i].checked = false;
        }
    }
}
)
// For CAT checkbox
var query4 =document.querySelector("input[id='CAT checkbox']");
query4.addEventListener('change',function CatActivate(){
    if(query4.checked){
        let CatElement = document.getElementsByName("CAT");
        let len2 = CatElement.length;
        for(let i=0;i<len2;i++) {
            CatElement[i].checked = true;
        }
    }
        
    if(!query4.checked){
        let CatElement = document.getElementsByName("CAT");
        let len2 = CatElement.length;
        for(let i=0;i<len2;i++) {
            CatElement[i].checked = false;
        }
    }
}
)
// For branchwise Checkboxes
var queryBranch = document.querySelectorAll("input.smallCheckbox");
let len = queryBranch.length;
for(let i=0;i<len;i++) {
    queryBranch[i].addEventListener('change', function activate(){
        let str = queryBranch[i].id;
        str = '#' + str.slice(0,-9)
        var elms = document.querySelectorAll(`${str}`);
        let len2 = elms.length;
        if(queryBranch[i].checked){
            for(let j=0;j<len2;j++) {
                elms[j].checked = true;
            }
        }
        else{
            for(let j=0;j<len2;j++) {
                elms[j].checked = false;
            }
        }
    })
}

// For DegreeWise Checkboxes
var queryDegree = document.querySelectorAll('td.Row');
let len2 = queryDegree.length;
for(let i=0;i<len2;i++) {
    var elms = document.querySelectorAll('input.Row')
    queryDegree[i].firstElementChild.addEventListener('change',function activate(){
        if(queryDegree[i].firstElementChild.checked){
            for(let j=23*i;j<23*(i+1);j++) {
                elms[j].checked = true;
            }
        }
        else {
            for(let j=23*i;j<23*(i+1);j++) {
                elms[j].checked = false;
            }
        }
    }
    )
}
// For 'All' checkbox
var queryAll = document.querySelector("input[id='All checkbox']")
queryAll.addEventListener('change',function activate(){
    let allBoxes = document.querySelectorAll(".mediumCheckbox, .smallCheckbox")
    if(queryAll.checked){
        for(let i=0;i<allBoxes.length;i++){
            allBoxes[i].checked = true;
        }
    }
    else{
        for(let i=0;i<allBoxes.length;i++){
            allBoxes[i].checked = false;
        }
    }
})
// ResetButton Working
var ResetButton = document.querySelector(".ResetButton")
function Reset(){
    let allBoxes = document.querySelectorAll(".mediumCheckbox, .smallCheckbox,.largerCheckbox")
        for(let i=0;i<allBoxes.length;i++){
            allBoxes[i].checked = false;
        }
}
// On clicking Next button
function Next(){
    if(query1.checked){
        console.log("Programmes offered by JEE Advanced are: ")
        let JeeElement = document.getElementsByName("JEE");
        let len = JeeElement.length;
        for(let i=0;i<len;i++) {
            var x = JeeElement[i].id
            console.log("BT/BS/Double Major/ Dual in" )
            console.log(x)
        }
    }
    if(query2.checked){
        console.log("Programmes offered by GATE are: ")
        let GateElement = document.getElementsByName("GATE");
        let len = GateElement.length;
        console.log("MT/MS/MSR in ")
        for(let i=0;i<len;i++) {
            console.log(GateElement[i].id)
        }
    }
    if(query3.checked){
        console.log("Programmes offered by JAM are: ")
        let JAMElement = document.getElementsByName("JAM");
        let len = JAMElement.length;
        console.log("MT/MS/MSR in ")
        for(let i=0;i<len;i++) {
            console.log(JAMElement[i].id)
        }

    }
    if(query4.checked){
        console.log("Programmes offered by CAT are: ")
        console.log("MBA in IME department");
    }
};

function reload(){
    window.location.reload();
}