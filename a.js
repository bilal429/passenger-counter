let c = document.getElementById("count");
let saveEL= document.getElementById("saveEL");
let count = 0;

function increment(params) {
    count += 1;
    // console.log(count);
  c.textContent=count;
}

function Save(params) {
  let countstr = count + ",";
  saveEL.textContent += countstr;
 c.textContent = 0
    count=0;
}

  