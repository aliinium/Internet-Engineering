let patternCodeMelli = /^(?:\d{10}|[1-9]\d{0,5})$/;
let patternSerialSh = /^\d{1,2}\/[A-Za-z]-\d{6}$/;
let patternBirthDate = /^(\d{4}\/0[1-6]\/((0[1-9]|(1[0-9]|(2[0-9]|(3[0-1]))))))|(\d{4}\/((0[7-9])|(1[0-2]))\/((0[1-9]|(1[0-9]|(2[0-9]|([3][0]))))))$/;
let patternAddress = /123/;

function checkCodeMelliFunc() {
    var txtCodeMelli = document.getElementById("txtCodeMelli");
    var txtCodeMelli_alert = document.getElementById("txtCodeMelli_Alert");

    var patternCheckResult = patternCodeMelli.test(txtCodeMelli.value)

    if (patternCheckResult) {
        txtCodeMelli_alert.innerHTML = "✔";
        txtCodeMelli_alert.style.color = "#0D9276";
    } else if (patternCheckResult == false && txtCodeMelli.value.length != 0) {
        txtCodeMelli_alert.innerHTML = "✘";
        txtCodeMelli_alert.style.color = "#E72929";
    } else {
        txtCodeMelli_alert.innerHTML = "";
    }
}

function checkSerialShFunc() {
    var txtSerialSh = document.getElementById("txtSerialSh");
    var txtSerialSh_alert = document.getElementById("txtSerialSh_Alert");

    var patternCheckResult = patternSerialSh.test(txtSerialSh.value)

    if (patternCheckResult) {
        txtSerialSh_alert.innerHTML = "✔";
        txtSerialSh_alert.style.color = "#0D9276";
    } else if (patternCheckResult == false && txtSerialSh.value.length != 0) {
        txtSerialSh_alert.innerHTML = "✘";
        txtSerialSh_alert.style.color = "#E72929";
    } else {
        txtSerialSh_alert.innerHTML = "";
    }
}

function checkBirthDateFunc() {
    var txtBirthDate = document.getElementById("txtBirthDate");
    var txtBirthDate_alert = document.getElementById("txtBirthDate_Alert");

    var patternCheckResult = patternBirthDate.test(txtBirthDate.value)

    if (patternCheckResult) {
        txtBirthDate_alert.innerHTML = "✔";
        txtBirthDate_alert.style.color = "#0D9276";
    } else if (patternCheckResult == false && txtBirthDate.value.length != 0) {
        txtBirthDate_alert.innerHTML = "✘";
        txtBirthDate_alert.style.color = "#E72929";
    } else {
        txtBirthDate_alert.innerHTML = "";
    }
}

function checkAddressFunc() {
    var txtAddress = document.getElementById("txtAddress");
    var txtAddress_alert = document.getElementById("txtAddress_Alert");

    var patternCheckResult = patternAddress.test(txtAddress.value)

    if (patternCheckResult) {
        txtAddress_alert.innerHTML = "✔";
        txtAddress_alert.style.color = "#0D9276";
    } else if (patternCheckResult == false && txtAddress.value.length != 0) {
        txtAddress_alert.innerHTML = "✘";
        txtAddress_alert.style.color = "#E72929";
    } else {
        txtAddress_alert.innerHTML = "";
    }
}