// @ts-nocheck
fetch("data.json")
.then(data => data.json())
.then(res => {
const statsList = document.getElementById("statsList")
statsList.classList.add("flex", "center", "justify");
  for (let stat of res) {
    const container = document.createElement("div");
    statsList.appendChild(container);
    container.classList.add("container", "flex", "column");

    const barContainer = document.createElement("div");
    barContainer.classList.add("barContainer", "flex");
    container.appendChild(barContainer);

    const bar = document.createElement("div");
    bar.classList.add("bar");
    barContainer.appendChild(bar);
    bar.setAttribute("data-barStat", "$" + stat.amount);

    const dayLabel = document.createElement("div");
    dayLabel.classList.add("day");
    dayLabel.innerText = stat.day;
    container.appendChild(dayLabel);

    barContainer.style.height = "100%";
    barHeight = stat.amount * 2;
    bar.style.height = barHeight + "%";

    if (barHeight > 100) {
    bar.setAttribute("id", "max");
    }
  }
})