crpArr = []

class CoursePres {
    constructor(crpCode, crsCode, insCode) {
        this.crpCode = crpCode;
        this.crsCode = crsCode;
        this.insCode = insCode;
    }
}

function createCoursePresList() {
    if (crpArr.length > 0) {
        createCoursePresTable()
        createCoursePresComboBox()
    }
}

function createCoursePresTable() {
    let tbl =   `   <table class="crpTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>کد ارائه</th>
                            <th>نام درس</th>
                            <th>نام استاد</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < crpArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${crpArr[i].crpCode}</td>
                        <td>${crpArr[i].crsCode.crsCode}</td>
                        <td>${crpArr[i].insCode.insCode}</td>
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
                    <option>${crpArr[i].crpCode}</option>
                `
    }

    cmb += "</select>"
    document.getElementById("slcCrpCombo").innerHTML = cmb
}

function resetCrpForm() {
    document.getElementById("crpCode").value = ""
    document.getElementById("crpCrsCode").value = ""
    document.getElementById("crpInsCode").value = ""
    document.getElementById("crpIndex").value = ""
    document.getElementById("crpAlert").innerHTML = ""
}

function saveCoursePres() {
    let crpCode = document.getElementById("crpCode").value
    let crsCode = document.getElementById("crpCrsCode").value
    let insCode = document.getElementById("crpInsCode").value

    let crpIndex = document.getElementById("crpIndex").value

    if (!(crpCode == "" || crsCode == "" || insCode == "")) {
        if (crpIndex === "") {
            let crs = new Course(crsCode, crsName, crsUnit)
            let ins = new Instructor(insCode, insName)
            let crp = new CoursePres(crpCode, crs, ins)
            crpArr.push(crp)

            document.getElementById("crpAlert").innerHTML = ""
            resetCrpForm()
        } else {
            if (crpIndex > -1) {
                crpArr[crpIndex].crpCode = crpCode
                crpArr[crpIndex].crsCode.crsCode = crsCode
                crpArr[crpIndex].insCode.insCode = insCode
            }

            resetCrpForm()
        }
    } else {
        document.getElementById("crpAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("crpCode").focus()
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
        document.getElementById("crpCrsCode").value = crp.crsCode.crsCode
        document.getElementById("crpInsCode").value = crp.insCode.insCode
        document.getElementById("crpIndex").value = crpIndex
    }
}