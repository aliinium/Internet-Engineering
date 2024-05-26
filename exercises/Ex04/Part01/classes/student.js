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
        createStudentComboBox()
    }
}

function createStudentTable() {
    let tbl =   `   <table class="stuTbl">
                        <tr>
                            <th style="width:5%">ردیف</th>
                            <th style="width:25%">شماره دانشجویی</th>
                            <th style="width:25%">نام</th>
                            <th style="width:25%">نام‌خانوادگی</th>
                            <th>جنسیت</th>
                            <th colspan="2" style="width:20%">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < stArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${stArr[i].stCode}</td>
                        <td>${stArr[i].firstName}</td>
                        <td>${stArr[i].lastName}</td>
                        <td>${stArr[i].getGenderTitle()}</td>
                        <td><button class="btnUpdate" onclick="editStudent(${i})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteStudent(${i})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("stuListTbl").innerHTML = tbl
}

function createStudentComboBox() {
    cmb = `<select id="slcStuCode">`
    
    for (let i = 0; i < stArr.length; i++) {
        cmb +=  `
                    <option value="${i}">${stArr[i].stCode}</option>
                `
    }

    cmb += `</select>`
    document.getElementById("slcStuCombo").innerHTML = cmb
}

function resetStForm() {
    document.getElementById("stCode").value = ""
    document.getElementById("stFirstName").value = ""
    document.getElementById("stLastName").value = ""
    document.getElementById("stGender").value = "0"
    document.getElementById("insIndex").value = ""
    document.getElementById("studentAlert").innerHTML = ""
}

function saveStudent() {
    let stCode = document.getElementById("stCode").value
    let firstName = document.getElementById("stFirstName").value
    let lastName = document.getElementById("stLastName").value
    let gender = document.getElementById("stGender").value

    let insIndex = document.getElementById("insIndex").value

    if (stCode != "" & firstName != "" & lastName != "") {
        if (insIndex === "") {
            let stu = new Student(stCode, firstName, lastName, gender)
            stArr.push(stu)

            document.getElementById("studentAlert").innerHTML = ""
            resetStForm()
        } else {
            if (insIndex > -1) {
                stArr[insIndex].stCode = stCode
                stArr[insIndex].firstName = firstName
                stArr[insIndex].lastName = lastName
                stArr[insIndex].gender = gender
            }

            resetStForm()
        }
    } else {
        document.getElementById("studentAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("stCode").focus()
    }

    createStudentList()
}

function deleteStudent(insIndex) {
    if (insIndex > -1) {
        stArr.splice(insIndex,1)

        if (stArr.length < 1) {
            document.getElementById("stuListTbl").innerHTML = ""
            document.getElementById("slcStuCombo").innerHTML = cmb
        } else {
            createStudentList()
        }
    }
}

function editStudent(insIndex) {
    if (insIndex > -1) {
        let stu = stArr[insIndex]
        document.getElementById("stCode").value = stu.stCode
        document.getElementById("stFirstName").value = stu.firstName
        document.getElementById("stLastName").value = stu.lastName
        document.getElementById("stGender").value = stu.gender
        document.getElementById("insIndex").value = insIndex
    }
}