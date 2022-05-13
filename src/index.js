const assign5div = document.querySelector("div#iassign5div");
const assign5h2 = document.querySelector("h2#iassign5h2");
const inside = document.querySelector("div#iinside");

assign5div.classList.add("cbg-color-yellow");
assign5h2.classList.add("cbg-color-tomato");
//document.classList.add("cbg-colr-red");
function resizeListener() {
  /*
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  */
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w < 500) {
    document.body.style.backgroundColor = "red";
    assign5div.classList.add("cbg-color-red");
  } else if (w < 600) {
    document.body.style.backgroundColor = "green";
    assign5div.classList.add("cbg-color-green");
  } else if (w < 700) {
    document.body.style.backgroundColor = "blue";
    assign5div.classList.add("cbg-color-blue");
  } else if (w < 900) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }

  inside.textContent = `window size(w,h): ${window.innerWidth}, ${window.innerHeight}`;
}

window.addEventListener("resize", resizeListener);
