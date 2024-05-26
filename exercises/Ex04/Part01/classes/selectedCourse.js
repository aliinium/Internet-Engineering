slcArr = []

class SelectedCourse {
    constructor(stuCode, crpCode, grade, slcIndex) {
        this.stuCode = stuCode;
        this.crpCode = crpCode;
        this.grade = grade;
    }
}

function createSelectedCourseList() {
    if (slcArr.length > 0) {
        createSelectedCourseTable()
    }
}

function createSelectedCourseTable() {
    let tbl =   `   <table class="slcTbl">
                        <tr>
                            <th>ردیف</th>
                            <th>شماره دانشجویی</th>
                            <th>کد ارائه</th>
                            <th>معدل</th>
                            <th colspan="2">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < slcArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${slcArr[i].stuCode}</td>
                        <td>${slcArr[i].crpCode}</td>
                        <td>${slcArr[i].grade}</td>
                        <td><button class="btnUpdate" onclick="editSelectedCourse(${i})">ویرایش</button></td>
                        <td><button class="btnDelete" onclick="deleteSelectedCourse(${i})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("slcListTbl").innerHTML = tbl
}

function resetSlcForm() {
    document.getElementById("slcStuCode").value = ""
    document.getElementById("slcCrpCode").value = ""
    document.getElementById("slcGrade").value = ""
    document.getElementById("slcIndex").value = ""
    document.getElementById("slcAlert").innerHTML = ""
}

function saveSelectedCourse() {
    let stuCode = document.getElementById("slcStuCode").value
    let crpCode = document.getElementById("slcCrpCode").value
    let grade = document.getElementById("slcGrade").value

    let slcIndex = document.getElementById("slcIndex").value

    if (!(stuCode == "" || crpCode == "" || grade == "")) {
        if (slcIndex === "") {
            let slc = new SelectedCourse(stuCode, crpCode, grade)
            slcArr.push(slc)

            document.getElementById("slcAlert").innerHTML = ""
            resetSlcForm()
        } else {
            slcIndex = parseInt(slcIndex)

            if (slcIndex > -1) {
                slcArr[slcIndex].stuCode = stuCode
                slcArr[slcIndex].crpCode = crpCode
                slcArr[slcIndex].grade = grade
            }

            resetSlcForm()
        }
    } else {
        document.getElementById("slcAlert").innerHTML = "دیتایی وارد نشده."
        document.getElementById("slcStuCode").focus()
    }

    createSelectedCourseList()
}

function deleteSelectedCourse(slcIndex) {
    if (slcIndex > -1) {
        slcArr.splice(slcIndex,1)

        if (slcArr.length < 1) {
            document.getElementById("slcListTbl").innerHTML = ""
        } else {
            createSelectedCourseList()
        }
    }
}

function editSelectedCourse(slcIndex) {
    if (slcIndex > -1) {
        let slc = slcArr[slcIndex]
        document.getElementById("slcStuCode").value = slc.stuCode
        document.getElementById("slcCrpCode").value = slc.crpCode
        document.getElementById("slcGrade").value = slc.grade
        document.getElementById("slcIndex").value = slcIndex
    }
}