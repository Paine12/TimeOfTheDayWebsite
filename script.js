var slider = document.getElementById("timeRange")
var range = document.getElementById("rng")

var body = document.getElementById("bdy")

range.innerHTML = slider.value

slider.oninput = function() {
    
    
    range.innerHTML = this.value;
    
    if (this.value==1) {
        body.style.backgroundColor = "#222149";
    } 
    if (this.value==2) {
        body.style.backgroundColor = "#101036";
    } 
    if (this.value==3) {
        body.style.backgroundColor = "#040728";
    } 
    if (this.value==4) {
        body.style.backgroundColor = "#04061f";
    } 
    if (this.value==5) {
        body.style.backgroundColor = "#533a61";
    } 
    if (this.value==6) {
        body.style.backgroundColor = "#dd9d9b";
    } 
    if (this.value==7) {
        body.style.backgroundColor = "#b5acbf";
    } 
    if (this.value==8) {
        body.style.backgroundColor = "#939cbb";
    } 
    if (this.value==9) {
        body.style.backgroundColor = "#7d9ab8";
    } 
    if (this.value==10) {
        body.style.backgroundColor = "#7090b7";
    } 
    if (this.value==11) {
        body.style.backgroundColor = "#b3bdbf";
    } 
    if (this.value==12) {
        body.style.backgroundColor = "#e7e7e7";
    } 
    if (this.value==13) {
        body.style.backgroundColor = "#f7f7f7";
    } 
    if (this.value==14) {
        body.style.backgroundColor = "#f7f7f7";
    } 
    if (this.value==15) {
        body.style.backgroundColor = "#f7f7f7";
    }
    if (this.value==16) {
        body.style.backgroundColor = "#f7f7f7";
    } 
    if (this.value==17) {
        body.style.backgroundColor = "#f7f7f7";
    } 
    if (this.value==18) {
        body.style.backgroundColor = "#e7ded2";
    } 
    if (this.value==19) {
        body.style.backgroundColor = "#ccc2a9";
    } 
    if (this.value==20) {
        body.style.backgroundColor = "#d1b792";
    } 
    if (this.value==21) {
        body.style.backgroundColor = "#cc838a";
    } 
    if (this.value==22) {
        body.style.backgroundColor = "#493a63 ";
    } 
    if (this.value==23) {
        body.style.backgroundColor = "#090a29";
    } 
    if (this.value==24) {
        body.style.backgroundColor = "#222149";
    } 

}