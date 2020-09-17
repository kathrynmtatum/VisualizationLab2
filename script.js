// load the dataset

let attractions;
fetch("attractions.json")
  .then(response => response.json())
  .then(data => {
    attractions = data;
    console.log("attractions", attractions);
    attractions.sort(function(a, b) {
      return a.visitors > b.visitors;
    });
    let info = attractions.slice(0, 5);
    renderBarChart(info);
    console.log("info", info);
  });

/*filter top 5 attractions*/
function filterData(category) {
  const maxLength = 5;
  //  let all = attractions.Category;

  if (category == null) {
    attractions.sort(function(a, b) {
      return a.visitors > b.visitors;
    });
  }

  if (category == "all") {
    let data = attractions.slice(0, 5);
    renderBarChart(data);
  } else {

  /* filter attractions by the selected category*/
    let filteredAttraction = attractions.filter(
      attractions => attractions.Category == category
    );
    filteredAttraction.sort((a, b) => {
      return a.visitors > b.visitors;
    });
    let data = filteredAttraction.slice(0, maxLength);
    renderBarChart(data);
  }
}
let selector = document.querySelector("#attraction-category");
selector.addEventListener("change", function(event) {
  attractions.filter(filterData(event.target.value));
  attractions.filter(filterData(event.target.value));
  console.log(event.target.value);
});
