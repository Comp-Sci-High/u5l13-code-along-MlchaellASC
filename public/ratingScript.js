const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/rating", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// Delete rating function
async function deleteRating(id){
    await fetch('/ratings/' + id, {method: "DELETE"});
    window.location.href = "/ratings"
}

// Update rating function
async function updateRating(id) {
    const username = document.querySelector(`input[name="edit-username-${id}"]`).value;
    const teacher = document.querySelector(`input[name="edit-teacher-${id}"]`).value;
    const comment = document.querySelector(`input[name="edit-comment-${id}"]`).value;
    const rating = document.querySelector(`input[name="edit-rating-${id}"]`).value;

    const response = await fetch('/ratings/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            teacher: teacher,
            comment: comment,
            rating: rating
        })
    });
    
    const data = await response.json();
    console.log(data);
    window.location.href = "/ratings";
}

// Toggle edit form visibility
function toggleEditForm(id) {
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = editForm.style.display === "none" ? "block" : "none";
}