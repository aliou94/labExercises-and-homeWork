const test = (town) => {
  let limit;
  !document.getElementById("numOfComplains").value
    ? (limit = 10)
    : (limit = document.getElementById("numOfComplains").value);
  let cont1 = document.getElementById("one");
  let ul1 = document.getElementById("complaints");
  let para = document.createElement("p");
  para.innerHTML = null;
  ul1.innerHTML = null;
  let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${town}&$limit=${limit}&$offset=0`;

  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      let complaint = res.map((element) => element.complaint_type);
      let resolution = res.map((element) => element.resolution_description);

      for (let i = 0; i < res.length; i++) {
        let li = document.createElement("li");
        li.style.width = "80%";

        let button = document.createElement("button");

        button.style.background = "red";
        button.style.borderRadius = "30%";
        button.style.color = "white";
        button.style.widows = "10%";
        button.style.marginInlineStart = "80px";
        button.style.alignSelf = "center";
        button.innerHTML = "what did the police do ?";
        button.id = "toggle";

        button.addEventListener("mouseover", function () {
          para.innerHTML = resolution[i];
          li.appendChild(para);
        });
        button.addEventListener("mouseout", function () {
          // para.innerHTML = '';
          li.removeChild(para);
        });
        li.innerHTML = `${complaint[i]}`;
        ul1.appendChild(li);
        ul1.appendChild(li).appendChild(button);
      }
      cont1.appendChild(ul1);
    });
};
