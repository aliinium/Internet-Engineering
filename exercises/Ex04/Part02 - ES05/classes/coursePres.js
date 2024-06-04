var crpArr = [
    {
        "crpCode": "40201001",
        "Course": {
            "crsCode": "1000102",
            "crsName": "مهندسی اینترنت",
            "crsUnit": "3"
        },
        "Instructor": {
            "insCode": "90001",
            "insName": "سجاد پیراهش"
        }
    },
    {
        "crpCode": "40201002",
        "Course": {
            "crsCode": "1000101",
            "crsName": "مهندسی نرم‌افزار",
            "crsUnit": "3"
        },
        "Instructor": {
            "insCode": "90002",
            "insName": "نسیم ارغا"
        }
    },
    {
        "crpCode": "40201003",
        "Course": {
            "crsCode": "1000201",
            "crsName": "آز. مهندسی نرم‌افزار",
            "crsUnit": "1"
        },
        "Instructor": {
            "insCode": "90002",
            "insName": "نسیم ارغا"
        }
    },
    {
        "crpCode": "40201004",
        "Course": {
            "crsCode": "1000103",
            "crsName": "روش پژوهش و ارائه",
            "crsUnit": "2"
        },
        "Instructor": {
            "insCode": "90003",
            "insName": "مهدی میرزابکی"
        }
    }
];

function CoursePres(crpCode, Course, Instructor) {
    this.crpCode = crpCode;
    this.Course = Course;
    this.Instructor = Instructor;
}

function createCoursePresList() {
    if (crpArr.length > 0) {
        createCoursePresTable();
        createCoursePresComboBox();
        resetCrpForm();
    }
}

function createCoursePresTable() {
    var tbl = '<table class="crpTbl">' +
                  '<tr>' +
                      '<th style="width:5%">ردیف</th>' +
                      '<th>کد ارائه</th>' +
                      '<th style="width:25%">نام درس (تعداد واحد)</th>' +
                      '<th style="width:25%">نام استاد</th>' +
                      '<th colspan="2" style="width:20%">عملیات</th>' +
                  '</tr>';

    for (var i = 0; i < crpArr.length; i++) {
        tbl += '<tr>' +
                   '<td>' + (i + 1) + '</td>' +
                   '<td>' + crpArr[i].crpCode + '</td>' +
                   '<td>' + crpArr[i].Course.crsName + ' (' + crpArr[i].Course.crsUnit + ')</td>' +
                   '<td>' + crpArr[i].Instructor.insName + '</td>' +
                   '<td><button class="btnUpdate" onclick="editCoursePres(' + i + ')">ویرایش</button></td>' +
                   '<td><button class="btnDelete" onclick="deleteCoursePres(' + i + ')">حذف</button></td>' +
               '</tr>';
    }

    tbl += "</table>";
    document.getElementById("crpListTbl").innerHTML = tbl;
}

function createCoursePresComboBox() {
    var cmb = '<select id="slcCrpCode">';
    
    for (var i = 0; i < crpArr.length; i++) {
        cmb += '<option value="' + i + '">' + crpArr[i].crpCode + '</option>';
    }

    cmb += "</select>";
    document.getElementById("slcCrpCombo").innerHTML = cmb;
}

function resetCrpForm() {
    document.getElementById("crpCode").value = "";
    document.getElementById("crpCrsCode").value = "0";
    document.getElementById("crpInsCode").value = "0";
    document.getElementById("crpIndex").value = "";
    document.getElementById("crpAlert").innerHTML = "";
}

function saveCoursePres() {
    try {
        var crpCode = document.getElementById("crpCode").value;
        var crsIndex = document.getElementById("crpCrsCode").value;
        var insIndex = document.getElementById("crpInsCode").value;
        var crpIndex = document.getElementById("crpIndex").value;

        if (crpCode != "") {
            if (crpIndex === "") {
                var crs = crsArr[crsIndex];
                var ins = insArr[insIndex];
                var crp = new CoursePres(crpCode, crs, ins);
                crpArr.push(crp);

                document.getElementById("crpAlert").innerHTML = "";
                resetCrpForm();
            } else {
                if (crpIndex > -1) {
                    crpArr[crpIndex].crpCode = crpCode;
                    crpArr[crpIndex].Course = crsArr[crsIndex];
                    crpArr[crpIndex].Instructor = insArr[insIndex];
                }

                resetCrpForm();
            }
        } else {
            document.getElementById("crpAlert").innerHTML = "دیتایی وارد نشده.";
            document.getElementById("crpCode").focus();
        }
    } catch (e) {
        document.getElementById("crpAlert").innerHTML = "خطا";
    }

    createCoursePresList();
}

function deleteCoursePres(crpIndex) {
    if (crpIndex > -1) {
        crpArr.splice(crpIndex, 1);

        if (crpArr.length < 1) {
            document.getElementById("crpListTbl").innerHTML = "";
            document.getElementById("slcCrpCombo").innerHTML = "<select></select>";
        } else {
            createCoursePresList();
        }
    }
}

function editCoursePres(crpIndex) {
    if (crpIndex > -1) {
        var crp = crpArr[crpIndex];
        document.getElementById("crpCode").value = crp.crpCode;
        document.getElementById("crpCrsCode").value = "";
        document.getElementById("crpInsCode").value = "";
        document.getElementById("crpIndex").value = crpIndex;
    }
}
