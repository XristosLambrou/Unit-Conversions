function temperature(){
    //To convert celcius to farenheit
    var c = document.getElementById("celsius").value;
    var f = (c*9/2) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //To convert KGs to Pounds
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    //To convert KMs to Miles
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}