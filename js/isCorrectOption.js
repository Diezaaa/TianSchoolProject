let isCorrectP = document.getElementById("isCorrectP");

let buttons =  Array.from(document.getElementsByTagName("button"));

function displayResult(event) {
    if (event.target.id === "correct_answer")
    {
        let correctAnswerStyle = {
            color: "green",
            fontSize: "20px",
            fontWeight: "bold"
        }
        for (let property in correctAnswerStyle) {
            isCorrectP.style[property] = correctAnswerStyle[property];
        }
        isCorrectP.innerHTML = "&#10004; Correct";

    }
    else{
        let wrongAnswerStyle = {
            color: "red",
            fontSize: "20px",
            fontWeight: "bold"
        }
        for (let property in wrongAnswerStyle) {
            isCorrectP.style[property] = wrongAnswerStyle[property];
        }
        isCorrectP.innerHTML = "&#x274c; Wrong";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", displayResult)
})