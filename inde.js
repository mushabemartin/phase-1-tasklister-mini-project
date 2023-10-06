document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Your code to add the task to the DOM should go here
    });
  });
  const prioritySelect = document.getElementById("priority");
const selectedPriority = prioritySelect.value;
newTask.classList.add(selectedPriority);
