function tableGenerator () {
    let table = document.getElementById('table-number');
    let tableLength = document.getElementById('table-length');
    let para = document.getElementById('para');

    for (let i = 1; i<=tableLength.value; i++) {
        para.innerText = para.innerText + `${table.value} x ${i} = ${table.value*i} \n`;
    }  
}