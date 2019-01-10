// Listening for SUBMIT
document.getElementById("calc-form").addEventListener('submit', function(e) {
    // Hide results
    document.getElementById("results").style.display = "none";

    // Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    // Preventing Default Behaviour
    e.preventDefault();
});

// Calcualte results
function calculateResults() {
    // UI Vars
    const revenue = document.getElementById("revenue").value;
    const teamValue = Number(document.querySelector("input[name='teamGroup']:checked").value);
    const officeValue = Number(document.querySelector("input[name='officeGroup']:checked").value);
    const displayResult = document.getElementById("calculated-bonus");

    // Clean Bonus Calculation function
    function cleanBonus(revenue) {
        let newRevenue;
        if (revenue < 7000) {
            displayError();
        } else if (revenue >= 7000 && revenue <= 8999) {
            newRevenue = revenue * (0.03 + teamValue + officeValue);
        } else if (revenue >= 9000 && revenue <= 10999) {
            newRevenue = revenue * (0.035 + teamValue + officeValue);
        } else if (revenue >= 11000 && revenue <= 12999) {
            newRevenue = revenue * (0.04 + teamValue + officeValue);
        } else if (revenue >= 13000 && revenue <= 15999) {
            newRevenue = revenue * (0.0425 + teamValue + officeValue);
        } else if (revenue >= 16000 && revenue <= 19999) {
            newRevenue = revenue * (0.0475 + teamValue + officeValue);
        } else if (revenue >= 20000 && revenue <= 22999) {
            newRevenue = revenue * (0.05 + teamValue + officeValue);
        } else if (revenue >= 23000 && revenue <= 30999) {
            newRevenue = revenue * (0.0525 + teamValue + officeValue);
        } else if (revenue >= 31000) {
            newRevenue = revenue * (0.06 + teamValue + officeValue);
        }

        // Displaying result
        if (revenue >= 7000) {
            displayResult.value = `${newRevenue.toFixed(2) + "$"}`;
            document.getElementById("loading").style.display = "none";
            document.getElementById("results").style.display = "block";
        }
    }   
    // Calling the function
    cleanBonus(revenue);

    // Creating Error Massage
    function displayError() {
        // Getting some elements from DOM to display the error
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");

        // Creating error element
        const divErr = document.createElement("div");
        const imgErr = document.createElement("img");

        // Set a class or attribute to the element
        divErr.className = "facepalm";
        imgErr.setAttribute("src", "img/facepalm.gif");

        // Append img to div
        divErr.appendChild(imgErr);

        // Insert heading before the heading
        card.insertBefore(divErr, heading);

        // Clear Error after 3 sec
        setTimeout(clearError, 1800);
        document.getElementById("loading").style.display = "none";
    }

    // Clear Error Function
    function clearError() {
        document.querySelector(".facepalm").remove();
    };
};
