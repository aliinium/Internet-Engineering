var insArr = [
    {
        "insCode": "90001",
        "insName": "سجاد پیراهش"
    },
    {
        "insCode": "90002",
        "insName": "نسیم ارغا"
    },
    {
        "insCode": "90003",
        "insName": "مهدی میرزابکی"
    }
];

function Instructor(insCode, insName) {
    this.insCode = insCode;
    this.insName = insName;
}

function createInstructorList() {
    if (insArr.length > 0) {
        createInstructorTable();
        createInstructorComboBox();
    }
}

function createInstructorTable() {
    var tbl =   '<table class="insTbl">' +
                    '<tr>' +
                        '<th style="width:5%">ردیف</th>' +
                        '<th>کد استاد</th>' +
                        '<th style="width:40%">نام و نام‌خانوادگی</th>' +
                        '<th colspan="2" style="width:20%">عملیات</th>' +
                    '</tr>';

    for (var i = 0; i < insArr.length; i++) {
        tbl +=  '<tr>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + insArr[i].insCode + '</td>' +
                    '<td>' + insArr[i].insName + '</td>' +
                    '<td><button class="btnUpdate" onclick="editInstructor(' + i + ')">ویرایش</button></td>' +
                    '<td><button class="btnDelete" onclick="deleteInstructor(' + i + ')">حذف</button></td>' +
                '</tr>';
    }

    tbl += "</table>";
    document.getElementById("insListTbl").innerHTML = tbl;
}

function createInstructorComboBox() {
    var cmb = '<select id="crpInsCode">';
    
    for (var i = 0; i < insArr.length; i++) {
        cmb +=  '<option value="' + i + '">' + insArr[i].insName + '</option>';
    }

    cmb += "</select>";
    document.getElementById("crpInsCombo").innerHTML = cmb;
}

function resetInsForm() {
    document.getElementById("insCode").value = "";
    document.getElementById("insName").value = "";
    document.getElementById("insIndex").value = "";
    document.getElementById("insAlert").innerHTML = "";
}

function saveInstructor() {
    var insCode = document.getElementById("insCode").value;
    var insName = document.getElementById("insName").value;

    var insIndex = document.getElementById("insIndex").value;

    if (insCode !== "" && insName !== "") {
        if (insIndex === "") {
            var ins = new Instructor(insCode, insName);
            insArr.push(ins);

            document.getElementById("insAlert").innerHTML = "";
            resetInsForm();
        } else {
            if (insIndex > -1) {
                insArr[insIndex].insCode = insCode;
                insArr[insIndex].insName = insName;
            }

            resetInsForm();
        }
    } else {
        document.getElementById("insAlert").innerHTML = "دیتایی وارد نشده.";
        document.getElementById("insCode").focus();
    }

    createInstructorList();
}

function deleteInstructor(insIndex) {
    if (insIndex > -1) {
        insArr.splice(insIndex, 1);

        if (insArr.length < 1) {
            document.getElementById("insListTbl").innerHTML = "";
            document.getElementById("crpInsCombo").innerHTML = "<select></select>";
        } else {
            createInstructorList();
        }
    }
}

function editInstructor(insIndex) {
    if (insIndex > -1) {
        var ins = insArr[insIndex];
        document.getElementById("insCode").value = ins.insCode;
        document.getElementById("insName").value = ins.insName;
        document.getElementById("insIndex").value = insIndex;
    }
}
