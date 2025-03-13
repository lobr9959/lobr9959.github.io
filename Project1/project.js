// looping through all the nav bar elements and then adding an event listener 
// that will hide all other elements except the one clicked

document.addEventListener('DOMContentLoaded', function() {
    for(let j = 2; j<=10; j++) {
        document.getElementById("concert"+j).style.display = "none";
    }


    for(let i = 1; i<=10; i++)
    {
        document.getElementById("nav-btn"+i).addEventListener("click", function() {
            let concert = document.getElementById("concert"+i);

            for(let j = 1; j<=10; j++) {
                document.getElementById("concert"+j).style.display = "none";
            }

            concert.style.display = "block";
        });
    }
});