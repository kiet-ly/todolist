function toggleCheckBox(e) {
  let element = e.parentElement.parentElement;

  if (element.classList.contains("done") == false) {
    element.classList.add("done");
  } else {
    element.classList.remove("done");
  }
}

function taskEvent(e) {
  const parentElement = e.target.parentElement;
  if (e.target.value !== "") {
    parentElement.classList.remove("wait");
    createTask(parentElement.nextElementSibling);
  } else {
    parentElement.classList.add("wait");
    if (parentElement.nextElementSibling.querySelector(".txtTask").value === "") {
      removeTask(parentElement.nextElementSibling);
    }
  }
}

function createTask(element) {
  // Does not create if content already exist
  if (element.innerHTML !== "") {
    return;
  }

  const template = document.getElementById("task-content");
  const clone = template.content.cloneNode(true);
  element.appendChild(clone);
  element.classList.add("wait");
}

function handleNextAndPreviousElement(e) {
  if (e.keyCode === 13) {
    const parentElement = e.target.parentElement;
    if (parentElement.nextElementSibling !== null) {
      parentElement.nextElementSibling.querySelector(".txtTask").focus();
    }
  } else if (e.keyCode === 8 && e.target.value === "") {
    const parentElement = e.target.parentElement;
    if (parentElement.previousElementSibling !== null) {
      parentElement.previousElementSibling.querySelector(".txtTask").focus();
      removeTask(e);
    }
  }
}

function removeTask(element) {
  element.innerHTML = "";
}
