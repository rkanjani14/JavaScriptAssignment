let employee = new Array(
    {
        name:"rakesh",
        age:20,
        salary:10000,
        DOB:"11-03-1999"
    },
    {
        name:"mukesh",
        age:25,
        salary:800,
        DOB:"11-03-1998"
    },
    {
        name:"shivam",
        age:20,
        salary:20000,
        DOB:"11-03-1997"
    },
    {
        name:"sonali",
        age:11,
        salary:30000,
        DOB:"11-03-1995"
    },{
        name:"prashant",
        age:24,
        salary:700,
        DOB:"11-03-1992"
    }

)
// ------------Filter------------------------
let result = employee.filter(emp => {
    // console.log(emp)
    if(emp.salary > 5000){
        return emp
    }
})
console.log(result)

// ---------------Reduce-----------------------
const emp = employee.reduce((acc,obj) => {
    if(acc[0].age==obj.age){
        acc.unshift(obj);
    }
    return acc;
 },new Array({
    name : "",
    age : 20,
    salary : 0,
    DOB : 0
 }));
 
 emp.pop();
 
 console.log(emp);
// ------------------Map----------------------------

employee.map(emp => {
    if(emp.salary < 1000 && emp.age > 20){
        emp.salary *= 5;
    }
})

console.log(employee)