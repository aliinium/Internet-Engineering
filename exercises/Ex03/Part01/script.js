let patternCodeMelli = /123/;
let patternSerialSh = "";
let patternBirthDate = "";
let patternAddress = "";

function checkCodeMelliFunc() {
    var txtCodeMelli = document.getElementById("txtCodeMelli");
    var txtCodeMelli_acceptable = document.getElementById("txtCodeMelli_acceptable");
    var txtCodeMelli_failed = document.getElementById("txtCodeMelli_failed");

    let patternCheckResult = patternCodeMelli.test(txtCodeMelli.value)

    if (patternCheckResult) {
        txtCodeMelli_acceptable.style.visibility = "visible";
        txtCodeMelli_failed.style.visibility = "hidden";
    } else if (patternCheckResult == false && txtCodeMelli.value.length != 0) {
        txtCodeMelli_acceptable.style.visibility = "hidden";
        txtCodeMelli_failed.style.visibility = "visible";
    } else {
        txtCodeMelli_acceptable.style.visibility = "hidden";
        txtCodeMelli_failed.style.visibility = "hidden";
    }
}


document.getElementById("txtSerialSh_failed").style.visibility = "hidden";
document.getElementById("txtSerialSh_acceptable").style.visibility = "hidden";

document.getElementById("txtBirthDate_failed").style.visibility = "hidden";
document.getElementById("txtBirthDate_acceptable").style.visibility = "hidden";

document.getElementById("txtAddress_failed").style.visibility = "hidden";
document.getElementById("txtAddress_acceptable").style.visibility = "hidden";
