var stArr = [];

function Student(stCode, firstName, lastName, gender) {
    this.stCode = stCode;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Student.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

Student.prototype.getGenderTitle = function() {
    return (this.gender == 0) ? 'مرد' : 'زن';
};

function getAvrage(stuIndex) {
    if (slcArr != "") {
        var stuCode = stArr[stuIndex].stCode;
        var score = 0;
        var unitSum = 0;

        for (var i = 0; i < slcArr.length; i++) {
            if (slcArr[i].Student.stCode == stuCode) {
                score += slcArr[i].grade * slcArr[i].CoursePres.Course.crsUnit;
                unitSum += parseInt(slcArr[i].CoursePres.Course.crsUnit);
            }
        }
    } else {
        return "NaN";
    }

    return (score / unitSum).toFixed(2);
}

function createStudentList() {
    if (stArr.length > 0) {
        createStudentTable();
        createStudentComboBox();
    }
}

function createStudentTable() {
    var tbl =   '<table class="stuTbl">' +
                    '<tr>' +
                        '<th style="width:5%">ردیف</th>' +
                        '<th style="width:25%">شماره دانشجویی</th>' +
                        '<th style="width:25%">نام</th>' +
                        '<th style="width:25%">نام‌خانوادگی</th>' +
                        '<th>جنسیت</th>' +
                        '<th>معدل</th>' +
                        '<th colspan="3" style="width:20%">عملیات</th>' +
                    '</tr>';

    for (var i = 0; i < stArr.length; i++) {
        tbl +=  '<tr>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + stArr[i].stCode + '</td>' +
                    '<td>' + stArr[i].firstName + '</td>' +
                    '<td>' + stArr[i].lastName + '</td>' +
                    '<td>' + stArr[i].getGenderTitle() + '</td>' +
                    '<td>' + getAvrage(i) + '</td>' +
                    '<td><button class="btnSelecteCourse" onclick="selectCourse(' + i + ')">انتخاب واحد</button></td>' +
                    '<td><button class="btnUpdate" onclick="editStudent(' + i + ')">ویرایش</button></td>' +
                    '<td><button class="btnDelete" onclick="deleteStudent(' + i + ')">حذف</button></td>' +
                '</tr>';
    }

    tbl += "</table>";
    document.getElementById("stuListTbl").innerHTML = tbl;
}

function createStudentComboBox() {
    var cmb = '<select id="slcStuCode">';
    
    for (var i = 0; i < stArr.length; i++) {
        cmb += '<option value="' + i + '">' + stArr[i].stCode + '</option>';
    }

    cmb += '</select>';
    document.getElementById("slcStuCombo").innerHTML = cmb;
}

function resetStForm() {
    document.getElementById("stCode").value = "";
    document.getElementById("stFirstName").value = "";
    document.getElementById("stLastName").value = "";
    document.getElementById("stGender").value = "0";
    document.getElementById("oldStCode").value = "";
    document.getElementById("studentAlert").innerHTML = "";
}

function saveStudent() {
    var stCode = document.getElementById("stCode").value;
    var firstName = document.getElementById("stFirstName").value;
    var lastName = document.getElementById("stLastName").value;
    var gender = document.getElementById("stGender").value;

    var stuIndex = document.getElementById("oldStCode").value;

    if (stCode !== "" && firstName !== "" && lastName !== "") {
        if (stuIndex === "") {
            var stu = new Student(stCode, firstName, lastName, gender);
            stArr.push(stu);

            document.getElementById("studentAlert").innerHTML = "";
            resetStForm();
        } else {
            if (stuIndex > -1) {
                stArr[stuIndex].stCode = stCode;
                stArr[stuIndex].firstName = firstName;
                stArr[stuIndex].lastName = lastName;
                stArr[stuIndex].gender = gender;
            }

            resetStForm();
        }
    } else {
        document.getElementById("studentAlert").innerHTML = "دیتایی وارد نشده.";
        document.getElementById("stCode").focus();
    }

    createStudentList();
}

function deleteStudent(stuIndex) {
    if (stuIndex > -1) {
        stArr.splice(stuIndex, 1);

        if (stArr.length < 1) {
            document.getElementById("stuListTbl").innerHTML = "";
            document.getElementById("slcStuCombo").innerHTML = cmb;
        } else {
            createStudentList();
        }
    }
}

function editStudent(stuIndex) {
    if (stuIndex > -1) {
        var stu = stArr[stuIndex];
        document.getElementById("stCode").value = stu.stCode;
        document.getElementById("stFirstName").value = stu.firstName;
        document.getElementById("stLastName").value = stu.lastName;
        document.getElementById("stGender").value = stu.gender;
        document.getElementById("oldStCode").value = stuIndex;
    }
}

function selectCourse(stuIndex) {
    document.getElementById("slcStuCode").value = stuIndex;
    document.getElementById("slcStuCode").disabled = true;    
    document.getElementById("addSelectCourse").style.display = "block";

    var stuCode = stArr[stuIndex].stCode;

    var tbl = '<table class="slcTbl">' +
                    '<tr>' +
                        '<th style="width:5%">ردیف</th>' +
                        '<th style="width:25%">شماره دانشجویی</th>' +
                        '<th style="width:25%">نام و نام‌خانوادگی دانشجو</th>' +
                        '<th style="width:25%">نام درس (تعداد واحد)</th>' +
                        '<th>نمره درس</th>' +
                        '<th style="width:10%">عملیات</th>' +
                    '</tr>';

    for (var i = 0; i < slcArr.length; i++) {
        if (slcArr[i].Student.stCode == stuCode) {
            tbl +=  '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + slcArr[i].Student.stCode + '</td>' +
                        '<td>' + slcArr[i].Student.getFullName() + '</td>' +
                        '<td>' + slcArr[i].CoursePres.Course.crsName + ' (' + slcArr[i].CoursePres.Course.crsUnit + ')</td>' +
                        '<td>' + slcArr[i].grade + '</td>' +
                        '<td><button class="btnDelete" onclick="deleteSelectedCourse(' + i + ')">حذف</button></td>' +
                    '</tr>';
        }
    }

    tbl += "</table>";
    document.getElementById("slcListTbl").innerHTML = tbl;
}
