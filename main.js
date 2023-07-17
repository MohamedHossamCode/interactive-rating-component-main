let spans = document.querySelectorAll("span");
let sub = document.querySelector("button");
let parent = document.querySelector(".parent");
let img = document.querySelector("img");
let imageDiv = document.querySelector(".img");
let h = document.querySelector(".parent h2");
let p = document.querySelector(".parent p");
let choice = document.querySelector(".choice");

spans.forEach(ele => {
  ele.addEventListener("click", () => {
    spans.forEach(ele => {
      ele.classList.remove("choose");
      ele.removeAttribute("select", "selcted");
    })
    ele.classList.add("choose")
    ele.setAttribute("select","selected")
  });
});

sub.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "rediv";
  img.src = "images/illustration-thank-you.svg"
  imageDiv.className = "reimage";
  for (let i = 0; i < spans.length; i++) {
    let ele = spans[i];
    if (ele.hasAttribute("select")) {
      div.textContent = `You selected ${ele.getAttribute("value")} out of 5`;
    }
  };
  h.replaceWith(div);
  p.remove();
  choice.remove();
  sub.remove();
  let reP = document.createElement("p");
  reP.innerText = textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch";
  reP.className = "rep";
  let reH = document.createElement("h2");
  reH.innerText = "Thank you!";
  reH.className = "reh"
  parent.append(reH);
  parent.append(reP);
  parent.style.textAlign = "center";
});