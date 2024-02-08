
        var b = null; // Random number variable
        var numberGenerated = false; // Flag to check if the number has been generated
        var chances = 0;
        
        function myfunction() {
            if (!numberGenerated) {
                b = Math.floor(Math.random() * 100); // Generate random number only once
                numberGenerated = true; // Set flag to true so the number is not generated again
                console.log(b);
            }
            
            var numInput = document.getElementById("num");
            var a = numInput.value.trim();
            if(a==null){
                console.log("please write a num");
                
                    document.getElementById("demo").innerHTML = "please write a numbr";
                    document.getElementById("demo").style.color = "white";
            }
            if (!a){
                
                console.log("please write a num");

               numInput.reportValidity()

                return;
            }
            else{
           
            if (a > 100) {
                document.getElementById("demo").innerHTML = "Write a number less than 100.";
                document.getElementById("demo").style.color = "red";
                document.getElementById("or").innerHTML = "OR";
                var buttonContainer = document.getElementById("win");
                buttonContainer.innerHTML = "<div id='button-container'><button onclick=\"window.location.reload();\" style=\"background-color: black; color: white; height:40px\">Play Again</button></div>";
            } else if (a < 0) {
                document.getElementById("demo").innerHTML = "Write a number greater than 0.";
                document.getElementById("demo").style.color = "red";
                document.getElementById("or").innerHTML = "OR";
                var buttonContainer = document.getElementById("win");
                buttonContainer.innerHTML = "<div id='button-container'><button onclick=\"window.location.reload();\" style=\"background-color: black; color: white; height:40px\">Play Again</button></div>";
            } else {
                while (a != b) {
                    if (a > b) {
                        document.getElementById("demo").innerHTML = "The number is too BIG <h4> 😧</h4> <br><h2><b style=color:lightgreen>Try writing a smaller number than" +" "+ a + " </b></h2>";
                        document.getElementById("demo").style.color = "blue";
                        chances++;
                        break;
                    } else if (b > a) {
                        document.getElementById("demo").innerHTML = "The number is too SMALL <h4>😯</h4><br><h2><b style=color:lightgreen>Try writing a greater number than" +" "+ a + " </b></h2>";
                        document.getElementById("demo").style.color = "blue";
                        chances++;
                        break;
                    }
                }
            }
                if (a == b) {
                    document.getElementById("demo").innerHTML = " CONGRATULATIONS !! You have guessed the right number<h2> 🥳</h2><br> Your score is " + "<h4>"+(100 - chances)+"</h4>";
                    document.getElementById("demo").style.color = "aqua";
                    b = null;
                    numberGenerated = false;
                    var buttonContainer = document.getElementById("win");
                    buttonContainer.innerHTML = "<div id='button-container'><button onclick=\"window.location.reload();\" style=\"background-color: black; color: white; height:40px\">Play Again</button></div>";
                    
                }
            }
            event.preventDefault();
        }
       
    