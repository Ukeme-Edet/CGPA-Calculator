// to make the add courses form show
const addCourseContainer = document.querySelector("#addCourseContainer");
const addCourseForm = document.querySelector("#addCourseForm");
const addCourseBackground = document.querySelector("#container");
const addEditBtn = document.querySelector("#addEditCourseBtn");
const courseTable = document.querySelector("#courseTable");

document
    .querySelector("#middblebarAddCourseBtn")
    .addEventListener("click", () => {
        addCourseContainer.classList.add("form--hidden");
        addCourseForm.classList.remove("form--hidden");
        addCourseBackground.classList.add("Register");
        addEditBtn.classList.remove("form--hidden");
    });

document.querySelector("#addCourseFormBtn").addEventListener("click", (e) => {
    e.preventDefault();
    courseTable.classList.remove("form--hidden");
    addCourseForm.classList.add("form--hidden");
    addCourseBackground.classList.remove("Register");
    addEditBtn.classList.remove("form--hidden");
});

// To append data to table
function addCourse() {
    var courseTitle = document.sample.courseTitle.value;
    var courseCode = document.sample.courseCode.value;
    var courseUnit = document.sample.courseUnit.value;
    var courseGrade = document.sample.courseGrade.value;

    var tr = document.createElement("tr");
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));

    td2.innerHTML = courseTitle;
    td3.innerHTML = courseCode;
    td4.innerHTML = courseUnit;
    td5.innerHTML = courseGrade;

    document.getElementById("tb1").appendChild(tr);
}
