insArr = []

class Instructor {
    constructor(insCode, insName) {
        this.insCode = insCode;
        this.insName = insName;
    }
}

function createInstructorList() {
    if (insArr.length > 0) {
        createInstructorTable()
    }
}

function createInstructorTable() {
    let tbl =   `   <table class="insTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>کد استاد</th>
                            <th>نام و نام‌خانوادگی</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < insArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${insArr[i].insCode}</td>
                        <td>${insArr[i].insName}</td>
                        <td><button class="btnUpdate" onclick="editInstructor(${insArr[i].insCode})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteInstructor(${insArr[i].insCode})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("insListTbl").innerHTML = tbl
}

function getIndexInstructor(insCode) {
    let idx = -1

    for (let i = 0; i < insArr.length; i++) {
        if (insArr[i].insCode == insCode) {
            idx = i
            break
        }
    }

    return idx
}

function resetInsForm() {
    document.getElementById("insCode").value = ""
    document.getElementById("insName").value = ""
    document.getElementById("insOldCode").value = ""
    document.getElementById("insAlert").innerHTML = ""
}

function saveInstructor() {
    let insCode = document.getElementById("insCode").value
    let insName = document.getElementById("insName").value

    let insOldCode = document.getElementById("insOldCode").value

    if (!(insCode == "" || insName == "")) {
        if (insOldCode === "") {
            let ins = new Instructor(insCode, insName)
            insArr.push(ins)

            document.getElementById("insAlert").innerHTML = ""
            resetInsForm()
        } else {
            insOldCode = parseInt(insOldCode)
            let idx = getIndexInstructor(insOldCode)

            if (idx > -1) {
                insArr[idx].insCode = insCode
                insArr[idx].insName = insName
            }

            resetInsForm()
        }
    } else {
        document.getElementById("insAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("insCode").focus()
    }

    createInstructorList()
}

function deleteInstructor(insCode) {
    let insIdx = getIndexInstructor(insCode)

    if (insIdx > -1) {
        insArr.splice(insIdx,1)

        if (insArr.length < 1) {
            document.getElementById("insListTbl").innerHTML = ""
        } else {
            createInstructorList()
        }
    }
}

function editInstructor(insCode) {
    let insIdx = getIndexInstructor(insCode)

    if (insIdx > -1) {
        let ins = insArr[insIdx]
        document.getElementById("insCode").value = ins.insCode
        document.getElementById("insName").value = ins.insName
        document.getElementById("insOldCode").value = ins.insCode
    }
}