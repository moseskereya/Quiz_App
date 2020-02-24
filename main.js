var button = document.querySelector(".btn");

button.onclick = () =>{
    var questions = [
        {
            promt: "What colors are Apples?\n (a) Red/Green\n\ (b) Purple\n (c) Ornage",
            answer: "a"
        },
        {
            promt: "What Programming Language used to style the website?\n (a) asp.net mvc5\n\ (b) html\n (c) css",
            answer: "c"
        },
        {
            promt: "When does Microsoft was started?\n (a) 2020\n\ (b) 1975\n (c) 2010",
            answer: "b"
        },
        {
            promt: "Who owns Microsoft?\n (a) Bill and Melinda Gate\n\ (b)Donald Trump\n (c) ScottCate",
            answer: "a"
        },
        {
            promt: "What css stand for?\n (a) css\n\ (b) Dont know\n (c) Cascading Style Sheet",
            answer: "c"
        },
        {
            promt: "What is html?\n (a) Hyperarkup Language text\n\ (b) Hypertext Markup language \n (c) don`t know",
            answer: "b"
        },
        {
            promt: "How many states are there in United States of America?\n (a) 12\n\ (b) 50 \n (c) 64",
            answer: "b"
        }
    ]
    
    var score = 0
    for(i = 0; i < questions.length;  i++)
    {
    var response = window.prompt(questions[i].promt)
    if(response == questions[i].answer){
      score ++;
      alert(" Good! You Got It !!")
    
    }else if(response == ""){
        alert("Please give the answer to the question provided");
        score = 0
    }else{
        alert("Opps! Wrong Answer :( ")
    }
    
    }
    alert ("You got"  +  score  +  "/"  +  questions.length)
}

