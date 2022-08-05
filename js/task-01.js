const categoriesCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesCount.length}`);

const titleSublist = categoriesCount.forEach((elem) => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}` +
      `\n` +
      `Elements: ${elem.lastElementChild.children.length}`
  );
});
