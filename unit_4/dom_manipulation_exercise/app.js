// 1. Select the section with an id of container without using querySelector.
const containerEl = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.
document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.
document.querySelectorAll("li.second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol li.third");

// 5. Give the section with an id of container the text “Hello!”.
// containerEl.innerHTML = "Hello!";

// 6. Add the class main to the div with a class of footer.
const footerEl = document.querySelector(".footer");
footerEl.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
footerEl.classList.remove("main");

// 8. Create a new li element.
const newItem = document.createElement("li");

// 9. Give the li the text “four”.
newItem.innerHTML = "four";

// 10. Append the li to the ul element.
const ulList = document.querySelector("ul");
ulList.appendChild(newItem);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const liItems = document.querySelectorAll("ol li");
for (let item of liItems) {
  item.style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
footerEl.remove();
