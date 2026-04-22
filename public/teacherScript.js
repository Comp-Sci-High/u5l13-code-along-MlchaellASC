const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/"
})

// Delete teacher function
async function deleteTeacher(id){
    await fetch('/teachers/' + id, {method: "DELETE"});
    window.location.href = "/"
}

// Update teacher function
async function updateTeacher(id) {
    const name = document.querySelector(`input[name="edit-name-${id}"]`).value;
    const department = document.querySelector(`input[name="edit-department-${id}"]`).value;
    const image = document.querySelector(`input[name="edit-image-${id}"]`).value;

    const response = await fetch('/teachers/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            department: department,
            image: image
        })
    });
    
    const data = await response.json();
    console.log(data);
    window.location.href = "/";
}

// Toggle edit form visibility
function toggleEditForm(id) {
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = editForm.style.display === "none" ? "block" : "none";
}