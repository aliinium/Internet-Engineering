stArr = []

class Student{
    constructor(stCode, firstName, lastName, gender) {
        this.stCode = stCode
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getGenderTitle() {
        return (this.gender == 0) ? 'مرد' : 'زن'
    }
}

function createStudentList() {
    if (stArr.length > 0) {
        createStudentTable()
    }
}

function createStudentTable() {
    let tbl =   `   <table class="stuTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>شماره دانشجویی</th>
                            <th>نام</th>
                            <th>نام‌خانوادگی</th>
                            <th>جنسیت</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < stArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${stArr[i].stCode}</td>
                        <td>${stArr[i].firstName}</td>
                        <td>${stArr[i].lastName}</td>
                        <td>${stArr[i].getGenderTitle()}</td>
                        <td><button class="btnUpdate" onclick="editStudent(${stArr[i].stCode})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteStudent(${stArr[i].stCode})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("stuListTbl").innerHTML = tbl
}

function getIndexStudent(stuCode) {
    let idx = -1

    for (let i = 0; i < stArr.length; i++) {
        if (stArr[i].stCode == stuCode) {
            idx = i
            break
        }
    }

    return idx
}

function resetStForm() {
    document.getElementById("stCode").value = ""
    document.getElementById("stFirstName").value = ""
    document.getElementById("stLastName").value = ""
    document.getElementById("stGender").value = "0"
    document.getElementById("oldStCode").value = ""
    document.getElementById("studentAlert").innerHTML = ""
}

function saveStudent() {
    let stCode = document.getElementById("stCode").value
    let firstName = document.getElementById("stFirstName").value
    let lastName = document.getElementById("stLastName").value
    let gender = document.getElementById("stGender").value

    let oldStuCode = document.getElementById("oldStCode").value

    if (!(stCode == "" || firstName == "" || lastName == "")) {
        if (oldStuCode === "") {
            let stu = new Student(stCode, firstName, lastName, gender)
            stArr.push(stu)

            document.getElementById("studentAlert").innerHTML = ""
            resetStForm()
        } else {
            oldStuCode = parseInt(oldStuCode)
            let idx = getIndexStudent(oldStuCode)

            if (idx > -1) {
                stArr[idx].stCode = stCode
                stArr[idx].firstName = firstName
                stArr[idx].lastName = lastName
                stArr[idx].gender = gender
            }

            resetStForm()
        }
    } else {
        document.getElementById("studentAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("stCode").focus()
    }

    createStudentList()
}

function deleteStudent(stCode) {
    let stuIdx = getIndexStudent(stCode)

    if (stuIdx > -1) {
        stArr.splice(stuIdx,1)

        if (stArr.length < 1) {
            document.getElementById("stuListTbl").innerHTML = ""
        } else {
            createStudentList()
        }
    }
}

function editStudent(stCode) {
    let stuIdx = getIndexStudent(stCode)

    if (stuIdx > -1) {
        let stu = stArr[stuIdx]
        document.getElementById("stCode").value = stu.stCode
        document.getElementById("stFirstName").value = stu.firstName
        document.getElementById("stLastName").value = stu.lastName
        document.getElementById("stGender").value = stu.gender
        document.getElementById("oldStCode").value = stu.stCode
    }
}