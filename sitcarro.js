
//3.377176, -73.495287


 config = {
    apiKey: "AIzaSyDOfLv_05Bt6C2JRnD3UhfH7c2LrY6NfbE",
    authDomain: "porbarfirebase.firebaseapp.com",
    databaseURL: "https://porbarfirebase.firebaseio.com",
    projectId: "porbarfirebase",
    storageBucket: "porbarfirebase.appspot.com",
    messagingSenderId: "393018993566"
  };
  firebase.initializeApp(config);



var general;

var nodeusersit="usertsit";

traerdef(nodeusersit);






function traerdef(stnode){ 
  firebase.database().ref().child(String(stnode)).
  once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) 
    || 'Anonymous';  general=snapshot.val();//generalkey=snapshot.key;
  });

}
//4.646993, -74.153212
var varemail="";
var varpass="";
var miname="";
var varcarlat=0;
var varcarlng=0;

var lemail="";
var lpass="";
var nodehuno="";

//setTimeout(login, 2000);
function getidvalor(stl){
return document.getElementById(String(stl)).value;

}

function escribep(latcar,lngcar){
    var d = new Date();
document.getElementById("idp").innerHTML = "lat car: "+latcar +" "+" lng car: "+lngcar +" Colombia "+d ;

}
function login(){
console.log(general); 

lemail=getidvalor("idemail");
lpass=getidvalor("idpass");
for(var i in general){
    if(general[i].keymi==lemail&&general[i].pass==lpass){
    
//varcarlat=parseFloat(general[i].lat);
//varcarlng=parseFloat(general[i].lng);

  document.getElementById("idlog").style.display = "none";
  document.getElementById("map").style.display = "flex";
  document.getElementById("idp").style.display = "flex";
//varcarlat=4.646993;
//varcarlng=-74.153212;

 nodehuno=general[i].keymi;
window.Android.showToast(nodehuno);
escribep("funcionando",nodehuno);
}
    else{
        //alert("pas o email erroneo");
    }
}


}




