document.getElementById("bmiForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    try {
        const response = await fetch("http://localhost:3000/calculate-bmi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weight, height }),
        });

        // Check if the response is okay (status code 200-299)
        if (response.ok) {
            const data = await response.json();
            // Check if the data object contains bmi
            if (data && data.bmi) {
                document.getElementById("result").textContent = `Your BMI is ${data.bmi}. ${data.message}`;
            } else {
                document.getElementById("result").textContent = "Error: BMI data not found in response.";
            }
        } else {
            document.getElementById("result").textContent = "Error calculating BMI.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").textContent = "Error fetching data.";
    }
});
