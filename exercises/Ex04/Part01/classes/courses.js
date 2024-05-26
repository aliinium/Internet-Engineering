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
    }
}

function createCourseTable() {
    let tbl =   `   <table class="crsTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>کد درس</th>
                            <th>نام</th>
                            <th>تعداد واحد</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < crsArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${crsArr[i].crsCode}</td>
                        <td>${crsArr[i].crsName}</td>
                        <td>${crsArr[i].crsUnit}</td>
                        <td><button class="btnUpdate" onclick="editCourse(${crsArr[i].crsCode})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteCourse(${crsArr[i].crsCode})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("crsListTbl").innerHTML = tbl
}

function getIndexCourse(crsCode) {
    let idx = -1

    for (let i = 0; i < crsArr.length; i++) {
        if (crsArr[i].crsCode == crsCode) {
            idx = i
            break
        }
    }

    return idx
}

function resetCrsForm() {
    document.getElementById("crsCode").value = ""
    document.getElementById("crsName").value = ""
    document.getElementById("crsUnit").value = ""
    document.getElementById("crsOldCode").value = ""
    document.getElementById("crsAlert").innerHTML = ""
}

function saveCourse() {
    let crsCode = document.getElementById("crsCode").value
    let crsName = document.getElementById("crsName").value
    let crsUnit = document.getElementById("crsUnit").value

    let crsOldCode = document.getElementById("crsOldCode").value

    if (!(crsCode == "" || crsName == "" || crsUnit == "")) {
        if (crsOldCode === "") {
            let crs = new Course(crsCode, crsName, crsUnit)
            crsArr.push(crs)

            document.getElementById("crsAlert").innerHTML = ""
            resetCrsForm()
        } else {
            crsOldCode = parseInt(crsOldCode)
            let idx = getIndexCourse(crsOldCode)

            if (idx > -1) {
                crsArr[idx].crsCode = crsCode
                crsArr[idx].crsName = crsName
                crsArr[idx].crsUnit = crsUnit
            }

            resetCrsForm()
        }
    } else {
        document.getElementById("crsAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("crsCode").focus()
    }

    createCourseList()
}

function deleteCourse(crsCode) {
    let crsIdx = getIndexCourse(crsCode)

    if (crsIdx > -1) {
        crsArr.splice(crsIdx,1)

        if (crsArr.length < 1) {
            document.getElementById("crsListTbl").innerHTML = ""
        } else {
            createCourseList()
        }
    }
}

function editCourse(crsCode) {
    let crsIdx = getIndexCourse(crsCode)

    if (crsIdx > -1) {
        let crs = crsArr[crsIdx]
        document.getElementById("crsCode").value = crs.crsCode
        document.getElementById("crsName").value = crs.crsName
        document.getElementById("crsUnit").value = crs.crsUnit
        document.getElementById("crsOldCode").value = crs.crsCode
    }
}