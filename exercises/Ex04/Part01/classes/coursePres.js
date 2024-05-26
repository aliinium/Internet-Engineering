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
    }
}

function createCoursePresTable() {
    let tbl =   `   <table class="crpTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>کد ارائه</th>
                            <th>کد درس</th>
                            <th>کد استاد</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < crpArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${crpArr[i].crpCode}</td>
                        <td>${crpArr[i].crsCode}</td>
                        <td>${crpArr[i].insCode}</td>
                        <td><button class="btnUpdate" onclick="editCoursePres(${crpArr[i].crpCode})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteCoursePres(${crpArr[i].crpCode})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("crpListTbl").innerHTML = tbl
}

function getIndexCoursePres(crpCode) {
    let idx = -1

    for (let i = 0; i < crpArr.length; i++) {
        if (crpArr[i].crpCode == crpCode) {
            idx = i
            break
        }
    }

    return idx
}

function resetCrpForm() {
    document.getElementById("crpCode").value = ""
    document.getElementById("crpCrsCode").value = ""
    document.getElementById("crpInsCode").value = ""
    document.getElementById("crpOldCode").value = ""
    document.getElementById("crpAlert").innerHTML = ""
}

function saveCoursePres() {
    let crpCode = document.getElementById("crpCode").value
    let crsCode = document.getElementById("crpCrsCode").value
    let insCode = document.getElementById("crpInsCode").value

    let crpOldCode = document.getElementById("crpOldCode").value

    if (!(crpCode == "" || crsCode == "" || insCode == "")) {
        if (crpOldCode === "") {
            let crp = new CoursePres(crpCode, crsCode, insCode)
            crpArr.push(crp)

            document.getElementById("crpAlert").innerHTML = ""
            resetCrpForm()
        } else {
            crpOldCode = parseInt(crpOldCode)
            let idx = getIndexCoursePres(crpOldCode)

            console.log(idx)

            if (idx > -1) {
                crpArr[idx].crpCode = crpCode
                crpArr[idx].crsCode = crsCode
                crpArr[idx].insCode = insCode
            }

            resetCrpForm()
        }
    } else {
        document.getElementById("crpAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("crpCode").focus()
    }

    createCoursePresList()
}

function deleteCoursePres(crpCode) {
    let crpIdx = getIndexCoursePres(crpCode)

    if (crpIdx > -1) {
        crpArr.splice(crpIdx,1)

        if (crpArr.length < 1) {
            document.getElementById("crpListTbl").innerHTML = ""
        } else {
            createCoursePresList()
        }
    }
}

function editCoursePres(crpCode) {
    let crpIdx = getIndexCoursePres(crpCode)

    if (crpIdx > -1) {
        let crp = crpArr[crpIdx]
        document.getElementById("crpCode").value = crp.crpCode
        document.getElementById("crpCrsCode").value = crp.crsCode
        document.getElementById("crpInsCode").value = crp.insCode
        document.getElementById("crpOldCode").value = crp.crpCode
    }
}