let company={
sales:[{name:'Jones', salary:1000},{name:'Alise', salary:600}],
develpmant:{
    web:[{name:'Peter', salary: 2000},  {name:'Alex', salary: 1800}  ],
    internals:[{name:'Jack', salary: 1300}]
}
};
function sumSalaries(departament){
    if(Arrayy.isArray(departament)){
        return departament.reduce((prev, current)=> prev + current.salary, 0);}
        else{
            let sum = 0;
            for(let subdep of Object.values(departament)){
                sum += sumSalaries(subdep)
            }
        {
            return sum;
        }

        }

}
console.log(sumSalaries(company));
