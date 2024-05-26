crsArr = []

class Course {
    constructor(crsCode, crsName, crsUnit) {
        this.crsCode = crsCode;
        this.crsName = crsName;
        this.crsUnit = crsUnit;
    }
}

function createCourseList() {
    if (crsArr.length > 0) {
        createCourseTable()
        createCourseComboBox();
    }
}

function createCourseTable() {
    let tbl =   `   <table class="crsTbl">
                        <tr>
                            <th style="width:5%">ردیف</th>
                            <th>کد درس</th>
                            <th style="width:40%">نام</th>
                            <th>تعداد واحد</th>
                            <th colspan="2" style="width:20%">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < crsArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${crsArr[i].crsCode}</td>
                        <td>${crsArr[i].crsName}</td>
                        <td>${crsArr[i].crsUnit}</td>
                        <td><button class="btnUpdate" onclick="editCourse(${i})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteCourse(${i})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("crsListTbl").innerHTML = tbl
}

function createCourseComboBox() {
    cmb = `<select id="crpCrsCode">`
    
    for (let i = 0; i < crsArr.length; i++) {
        cmb +=  `
                    <option value="${i}">${crsArr[i].crsName}</option>
                `
    }

    cmb += "</select>"
    document.getElementById("crpCrsCombo").innerHTML = cmb
}

function resetCrsForm() {
    document.getElementById("crsCode").value = ""
    document.getElementById("crsName").value = ""
    document.getElementById("crsUnit").value = ""
    document.getElementById("crsIndex").value = ""
    document.getElementById("crsAlert").innerHTML = ""
}

function saveCourse() {
    let crsCode = document.getElementById("crsCode").value
    let crsName = document.getElementById("crsName").value
    let crsUnit = document.getElementById("crsUnit").value

    let crsIndex = document.getElementById("crsIndex").value

    if (crsCode != "" && crsName != "" && crsUnit != "") {
        if (crsIndex === "") {
            let crs = new Course(crsCode, crsName, crsUnit)
            crsArr.push(crs)

            document.getElementById("crsAlert").innerHTML = ""
            resetCrsForm()
        } else {
            if (crsIndex > -1) {
                crsArr[crsIndex].crsCode = crsCode
                crsArr[crsIndex].crsName = crsName
                crsArr[crsIndex].crsUnit = crsUnit
            }

            resetCrsForm()
        }
    } else {
        document.getElementById("crsAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("crsCode").focus()
    }

    createCourseList()
}

function deleteCourse(crsIndex) {
    if (crsIndex > -1) {
        crsArr.splice(crsIndex,1)

        if (crsArr.length < 1) {
            document.getElementById("crsListTbl").innerHTML = ""
            document.getElementById("crpCrsCombo").innerHTML = "<select></select>"
        } else {
            createCourseList()
        }
    }
}

function editCourse(crsIndex) {
    if (crsIndex > -1) {
        let crs = crsArr[crsIndex]
        document.getElementById("crsCode").value = crs.crsCode
        document.getElementById("crsName").value = crs.crsName
        document.getElementById("crsUnit").value = crs.crsUnit
        document.getElementById("crsIndex").value = crsIndex
    }
}