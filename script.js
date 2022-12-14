function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
  
    let hours = document.getElementById("hours");
    hours.innerHTML = "";
  
    let now = new Date();
    // allow 14 minutes to fall sleep!
    now.setMinutes(now.getMinutes() + 14);
  
    // calculate sleep cycles!
    for (let i = 1; i <= 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      let elm = document.createElement("div");
      elm.innerText = 
        now.toLocaleTimeString("en-US", { timeStyle: "short" });
      elm.style.color = "red";
      hours.appendChild(elm);
    } 
  }