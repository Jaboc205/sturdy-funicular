function beginnerProjectsDrop(){
    document.getElementById("beginner-dropdown").innerHTML = `
            <div id="beginner-dropdown">
                <li><a href="calc.html" >Calculator</a></li>
            </div>`;
    console.log("beginnerProjectsDrop()");
};

function beginnerProjectsLift(){
    document.getElementById("beginner-projects").innerHTML = `
        <li><button id=\"beginnerProjects\" onclick=\"beginnerProjectsDrop()\">Beginner Projects></button></li>
    console.log("beginnerProjectsLift()")`;
};