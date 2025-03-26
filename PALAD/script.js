function changeTableStyle() {
    let table = document.getElementById("studentTable");
    table.style.border = "white";
    table.style.backgroundColor = "yellow";

    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = "blue";
        th.style.color = "white";
    }


        let tds = tr.getElementsByTagName("td");
        for (let td of tds) {
            td.style.backgroundColor = "yellow";
            td.style.color = "black";
        }
    }

