crpArr = []

class CoursePres {
    constructor(crpCode, Course, Instructor) {
        this.crpCode = crpCode;
        this.Course = Course;
        this.Instructor = Instructor;
    }
}

function createCoursePresList() {
    if (crpArr.length > 0) {
        createCoursePresTable()
        createCoursePresComboBox()
        resetSlcForm()
    }
}

function createCoursePresTable() {
    let tbl =   `   <table class="crpTbl">
                        <tr>
                            <th style="width:5%">ردیف</th>
                            <th>کد ارائه</th>
                            <th style="width:25%">نام درس (تعداد واحد)</th>
                            <th style="width:25%">نام استاد</th>
                            <th colspan="2" style="width:20%">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < crpArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${crpArr[i].crpCode}</td>
                        <td>${crpArr[i].Course.crsName} (${crpArr[i].Course.crsUnit})</td>
                        <td>${crpArr[i].Instructor.insName}</td>
                        <td><button class="btnUpdate" onclick="editCoursePres(${i})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteCoursePres(${i})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("crpListTbl").innerHTML = tbl
}

function createCoursePresComboBox() {
    cmb = `<select id="slcCrpCode">`
    
    for (let i = 0; i < crpArr.length; i++) {
        cmb +=  `
                    <option value="${i}">${crpArr[i].crpCode}</option>
                `
    }

    cmb += "</select>"
    document.getElementById("slcCrpCombo").innerHTML = cmb
}

function resetCrpForm() {
    document.getElementById("crpCode").value = ""
    document.getElementById("crpCrsCode").value = "0"
    document.getElementById("crpInsCode").value = "0"
    document.getElementById("crpIndex").value = ""
    document.getElementById("crpAlert").innerHTML = ""
}

function saveCoursePres() {
    try {
        let crpCode = document.getElementById("crpCode").value
        let crsIndex = document.getElementById("crpCrsCode").value
        let insIndex = document.getElementById("crpInsCode").value
    
        let crpIndex = document.getElementById("crpIndex").value

        if (crpCode != "") {
            if (crpIndex === "") {
                let crs = crsArr[crsIndex]
                let ins = insArr[insIndex]
                let crp = new CoursePres(crpCode, crs, ins)
                crpArr.push(crp)

                document.getElementById("crpAlert").innerHTML = ""
                resetCrpForm()
            } else {
                if (crpIndex > -1) {
                    crpArr[crpIndex].crpCode = crpCode
                    crpArr[crpIndex].Course = crsArr[crsIndex]
                    crpArr[crpIndex].Instructor = insArr[insIndex]
                }

                resetCrpForm()
            }
        } else {
            document.getElementById("crpAlert").innerHTML = "دیتایی وارد نشده."
            document.getElementById("crpCode").focus()
        }
    } catch {
        document.getElementById("crpAlert").innerHTML = "خطا"
    }

    createCoursePresList()
}

function deleteCoursePres(crpIndex) {
    if (crpIndex > -1) {
        crpArr.splice(crpIndex,1)

        if (crpArr.length < 1) {
            document.getElementById("crpListTbl").innerHTML = ""
            document.getElementById("slcCrpCombo").innerHTML = "<select></select>"
        } else {
            createCoursePresList()
        }
    }
}

function editCoursePres(crpIndex) {
    if (crpIndex > -1) {
        let crp = crpArr[crpIndex]
        document.getElementById("crpCode").value = crp.crpCode
        document.getElementById("crpCrsCode").value = ""
        document.getElementById("crpInsCode").value = ""
        document.getElementById("crpIndex").value = crpIndex
    }
}