function createPythagorasTable(size=10){
    const container= document.getElementById('matrix-container');
    const table = document.createElement('table');

     for(let i=1; i<= size;i++){
        const row= document.createElement('tr');
    for(let j=1; i<=size; i++){
        const cell = document.createElement(i===1|| j===1? 'th':'td');
        cell.textContent= i*j;
        if(i===j){
         cell.classList.add('diagonal');
        }  
      row.appendChild(cell);    
    }
    table.appendChild(row);
    }
    container.appendChild(table);
}
createPythagorasTable(10);