//Array of object
let employees=[

    {
        "id":101,
        "name":"Lavish",
        "Designation":"Senior FUll Stack Developer",
        "yearsofexp":10,
    },
    {
        "id":102,
        "name":"Shiva",
        "Designation":"Junior FUll Stack Developer",
        "yearsofexp":10
    },
    {
        "id":103,
        "name":"Swapnil",
        "Designation":"Linux Administrator",
        "yearsofexp":15
    },
    {
        "id":104,
        "name":"Sai",
        "Designation":"System Analyst",
        "yearsofexp":8
    },
    {
        "id":105,
        "name":"Mohan",
        "Designation":"Mern Stack Developer",
        "yearsofexp":11
    },
    {
        "id":106,
        "name":"Himanshu",
        "Designation":"Java Developer",
        "yearsofexp":7,
    }
    ]
   
    //for loop
    //Object.keys gives length of object.
    var res=Object.keys(employees)
    for(var i=0;i<res.length;i++){
        console.log(res[i],employees[res[i]]);
    }

    for(let element of employees){
        console.log(element);
    }

    //for in
for(var i in employees){
    console.log(employees[i])
}

    //for Each loop
    let employeeid=[];
    employees.forEach(function(x){
      employeeid.push(x.id)
    })
    console.log(employeeid);

