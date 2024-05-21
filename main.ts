#! /user/bin/env node
import inquirer from "inquirer"
 let student1 ={ name:"john", rollnumber: "574", obtainedMarks: "480"};

let student2={ name:"elen", rollnumber: "575", obtainedMarks: "356"};         

let student3 ={ name:"elsa", rollnumber: "576", obtainedMarks: "478"} ;       

let student4 ={ name:"sana", rollnumber: "577", obtainedMarks: "289"};            
            
let student5 ={ name:"noor", rollnumber: "578", obtainedMarks: "493"};

let student6 ={ name:"sara", rollnumber: "579", obtainedMarks: "398"};

let student7 ={ name:"maria", rollnumber: "600", obtainedMarks: "340"};            
            
            
        
let studentsResult = await inquirer.prompt(
    [
        
        {
            name: "form",
            type: "number", 
            message: "please! enter your roll number",
            list:["574", "575", "576"]
        }
    ]
);

if(studentsResult.form === 574){
    console.log(`name: ${student1.name}   marks obtained:${student1.obtainedMarks}  "passed"`)
}else if(studentsResult.form === 575){
    console.log(`name: ${student2.name}   marks obtained:${student2.obtainedMarks} "passed"`)
}else if(studentsResult.form === 576)
    {  console.log(`name: ${student3.name}   marks obtained:${student3.obtainedMarks} "passed"`)
}else if(studentsResult.form === 577){
    console.log(`name:${student4.name}   marks obtained:${student4.obtainedMarks} "failed"`)
}else if(studentsResult.form === 578){
    console.log(`name:${student5.name}    marks obtained:${student5.obtainedMarks} "passed"`)
}else if(studentsResult.form === 579){
    console.log(`name:${student6.name}    marks obtained:${student6.obtainedMarks} "passed"`)
}else if(studentsResult.form === 600 ){
    console.log(`name:${student7.name}   marks obtained:${student7.obtainedMarks}  "passed"`)
}
else{
    console.log('your rollnumber is inccorect')
}

