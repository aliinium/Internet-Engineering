slcArr = []

class SelectedCourse {
    constructor(Student, CoursePres, grade) {
        this.Student = Student;
        this.CoursePres = CoursePres;
        this.grade = grade;
    }
}

function createSelectedCourseList() {
    if (slcArr.length > 0) {
        createSelectedCourseTable()
        createStudentList()
        resetSlcForm()
    }
}

function createSelectedCourseTable() {
    let tbl =   `   <table class="slcTbl">
                        <tr>
                            <th style="width:5%">ردیف</th>
                            <th style="width:25%">شماره دانشجویی</th>
                            <th style="width:25%">نام و نام‌خانوادگی دانشجو</th>
                            <th style="width:25%">نام درس (تعداد واحد)</th>
                            <th>نمره درس</th>
                            <th style="width:10%">عملیات</th>
                        </tr>
                `

    for (let i = 0; i < slcArr.length; i++) {
        tbl +=  `   <tr>
                        <td>${i + 1}</td>
                        <td>${slcArr[i].Student.stCode}</td>
                        <td>${slcArr[i].Student.getFullName()}</td>
                        <td>${slcArr[i].CoursePres.Course.crsName} (${slcArr[i].CoursePres.Course.crsUnit})</td>
                        <td>${slcArr[i].grade}</td>
                        <td><button class="btnDelete" onclick="deleteSelectedCourse(${i})">حذف</button></td>
                    </tr>
                `
    }

    tbl += "</table>"
    document.getElementById("slcListTbl").innerHTML = tbl
}

function resetSlcForm() {
    document.getElementById("slcStuCode").value = "0"
    document.getElementById("slcCrpCode").value = "0"
    document.getElementById("slcGrade").value = ""
    document.getElementById("slcIndex").value = ""
    document.getElementById("slcAlert").innerHTML = ""
    document.getElementById("slcStuCode").disabled = false
    document.getElementById("addSelectCourse").style.display = "none"  
}

function saveSelectedCourse() {
    try {
        let stuIndex = document.getElementById("slcStuCode").value
        let crpIndex = document.getElementById("slcCrpCode").value
        let grade = document.getElementById("slcGrade").value
    
        let slcIndex = document.getElementById("slcIndex").value
        
        if (grade != "") {
            let stu = stArr[stuIndex]
            let crp = crpArr[crpIndex]
            let slc = new SelectedCourse(stu, crp, grade)
            slcArr.push(slc)

            document.getElementById("slcAlert").innerHTML = ""
            resetSlcForm()
        } else {
            document.getElementById("slcAlert").innerHTML = "دیتایی وارد نشده."
            document.getElementById("slcGrade").focus()
        }
    } catch {
        document.getElementById("slcAlert").innerHTML = "خطا"
    }

    createSelectedCourseList()
}

function deleteSelectedCourse(slcIndex) {
    if (slcIndex > -1) {
        slcArr.splice(slcIndex,1)

        if (slcArr.length < 1) {
            document.getElementById("slcListTbl").innerHTML = ""
            createStudentList()
        } else {
            createSelectedCourseList()
        }
    }
}