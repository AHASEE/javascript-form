
// // Arrays to store form data
var firstNamearrys= [];
 var lastNamearrys=[];
 var parentsnamearrys=[];
 var inputdobarrys=[];
 var AddressArrys=[];
 var Address2Arrys=[];
 var CityArrys=[];
 var inputStateArrys=[];
 var statearrys = [];
 var inputZipArrys=[];
 var inpuPhoneArrys=[];
 var gridCheckArrys=[];




function insertvalue (){
//     // / Get the values from the form inputs
 var firstNamevalue = document.getElementById( "firstName").value;
 var lastNamevalue = document.getElementById( "lastName").value;
 var parentsnamevalue =document.getElementById("parentsname").value;
 var inputdobvalue = document.getElementById("inputdob").value;
 var AddressValue= document.getElementById("Address").value
 var address2value = document.getElementById("Address2").value;
 var cityvalue = document.getElementById("City").value;
 var statevalue = document.getElementById("inputState").value;
var zipvalue = document.getElementById("inputZip").value;
var phonevalue = document.getElementById("inputPhone").value;
var gridCheckvalue = document.getElementById("gridCheck").value

// // Push the values into respective arrays
firstNamearrys.push(firstNamevalue);
lastNamearrys.push(lastNamevalue);
parentsnamearrys.push(parentsnamevalue);
inputdobarrys.push(inputdobvalue);
AddressArrys.push(AddressValue);
Address2Arrys.push(address2value);
CityArrys.push(cityvalue);
statearrys.push(statevalue);
inputZipArrys.push(zipvalue);
inpuPhoneArrys.push(phonevalue);
gridCheckArrys.push(gridCheckvalue);


//  // Log the arrays to the console
 console.log("First Name Array:", firstNamearrys);
 console.log("Last Name Array:", lastNamearrys);
 console.log("Parents Name Array:", parentsnamearrys);
 console.log("DOB Array:", inputdobarrys);
 console.log("Address Array:", AddressArrys);
 console.log("Address2 Array:", Address2Arrys);
 console.log("City Array:", CityArrys);
 console.log("State Array:", statearrys);
 console.log("Zip Array:",inputZipArrys);
 console.log("Phone Number Array:",inpuPhoneArrys);
 console.log ("grid check:" ,gridCheckArrys);

}


// // function insertvalue() 
   
    

   