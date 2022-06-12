const form = document.querySelector('#form');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const table = document.querySelector('#data');
const clear = document.querySelector('#clear');



form.addEventListener('submit', (s)=>{
    s.preventDefault();

    const nVal = name.value;
    const dVal = date.value;
    const aVal = amount.value;

    const row = document.createElement("tr");
    const nm = document.createElement("td");
    nm.classList.add("name");
    const dt = document.createElement("td");
    dt.classList.add("date");
    const amnt = document.createElement("td");
    amnt.classList.add("amount");
    const btn = document.createElement("td");
    btn.classList.add("button");
    const remove = document.createElement("button");
    remove.classList.add("remove");

    row.classList.add("values");

    table.appendChild(row);

    //name
    row.appendChild(nm);
    nm.innerText = nVal;

    //date
    row.appendChild(dt);
    dt.innerText = dVal;

    //amount
    row.appendChild(amnt);
    amnt.innerText = "$" + aVal;

    //button
    row.appendChild(btn);
    btn.appendChild(remove);
    remove.innerText = "Remove";

    remove.addEventListener('click', ()=>{
        table.removeChild(row);
    })

    clear.addEventListener('click', () => { 
        if (row) {
          table.removeChild(row);  
        }
    })

})