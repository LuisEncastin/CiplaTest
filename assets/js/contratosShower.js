// default card
var contrato1 = document.getElementById("contrato1");
var contratoa = document.getElementById("contratoa");
var contratoDefault = document.getElementById("contratoDefault");

contrato1.addEventListener("mouseover", () => {
    // contratoDefault.className = "c";
    contratoDefault.className = "default";
    contratoa.className = "contratoContent";
    contratob.className = "default";
    contratoc.className = "default";
    contratod.className = "default";
    contratoe.className = "default";
}, false);
contrato1.addEventListener("mouseout", () => {
    contratoa.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

// Primer contrato
var contrato1 = document.getElementById("contrato1");
var contratoa = document.getElementById("contratoa");

contrato1.addEventListener("mouseover", () => {
    contratoDefault.className = "default";
    contratoa.className = "contratoContent";
    contratob.className = "default";
    contratoc.className = "default";
    contratod.className = "default";
    contratoe.className = "default";
}, false);
contrato1.addEventListener("mouseout", () => {
    contratoa.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

// Segundo contrato
var contrato2 = document.getElementById("contrato2");
var contratob = document.getElementById("contratob");

contrato2.addEventListener("mouseover", () => {
    contratoDefault.className = "default";
    contratoa.className = "default";
    contratob.className = "contratoContent";
    contratoc.className = "default";
    contratod.className = "default";
    contratoe.className = "default";
}, false);
contrato2.addEventListener("mouseout", () => {
    contratob.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

// Tercer contrato
var contrato3 = document.getElementById("contrato3");
var contratoc = document.getElementById("contratoc");

contrato3.addEventListener("mouseover", () => {
    contratoDefault.className = "default";
    contratoa.className = "default";
    contratob.className = "default";
    contratoc.className = "contratoContent";
    contratod.className = "default";
    contratoe.className = "default";
}, false);
contrato3.addEventListener("mouseout", () => {
    contratoc.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

// Cuarto contrato
var contrato4 = document.getElementById("contrato4");
var contratod = document.getElementById("contratod");

contrato4.addEventListener("mouseover", () => {
    contratoDefault.className = "default";
    contratoa.className = "default";
    contratob.className = "default";
    contratoc.className = "default";
    contratod.className = "contratoContent";
    contratoe.className = "default";
}, false);
contrato4.addEventListener("mouseout", () => {
    contratod.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

// Quinto contrato
var contrato5 = document.getElementById("contrato5");
var contratoe = document.getElementById("contratoe");

contrato5.addEventListener("mouseover", () => {
    contratoDefault.className = "default";
    contratoa.className = "default";
    contratob.className = "default";
    contratoc.className = "default";
    contratod.className = "default";
    contratoe.className = "contratoContent";
}, false);
contrato5.addEventListener("mouseout", () => {
    contratoe.className = "default";
    contratoDefault.className = "defaultCard";
}, false);

