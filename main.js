let input = document.querySelector(".container input");
let btn = document.querySelector(".container button");

btn.onclick = function () {
    let value = input.value;

    if (input.value.length == 0) {
        alert("Please Enter Your Task");
    }
    else {
        let div = document.createElement("div");
        div.classList.add("tasks");
        document.body.append(div);

        let task = document.createElement("div");
        task.classList.add("task");

        let paragraph = document.createElement("p");
        let span = document.createElement("span");
        span.textContent = "Delete";
        span.classList.add("delete");

        paragraph.innerHTML = value;
        task.appendChild(paragraph);
        task.appendChild(span);

        div.appendChild(task);
        span.onclick = function () {
            div.remove();
        }

        paragraph.onclick = function () {
            paragraph.style.textDecoration = "line-through";
        }

        input.value = "";
    }


}