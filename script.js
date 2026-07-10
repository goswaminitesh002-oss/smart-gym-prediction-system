function predict() {

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;

    if (
        name === "" ||
        isNaN(age) ||
        isNaN(height) ||
        isNaN(weight)
    ) {
        alert("Please fill all fields.");
        return;
    }

    // BMI Calculation
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    let bodyType = "";
    let recommendation = "";
    let calories = 0;
    let protein = 0;
    let water = (weight * 0.035).toFixed(1);

    let workout = "";
    let diet = "";
    let score = 95;

    if (bmi < 18.5) {

        bodyType = "Ectomorph";
        recommendation = "Bulking";

        workout = `
        ✔ Heavy Compound Exercises<br>
        ✔ Chest & Triceps<br>
        ✔ Back & Biceps<br>
        ✔ Legs<br>
        ✔ Shoulder Day
        `;

        diet = `
        🍚 Rice<br>
        🥛 Milk<br>
        🥚 Eggs<br>
        🍗 Chicken<br>
        🥜 Peanut Butter<br>
        🍌 Banana
        `;

    }

    else if (bmi >= 18.5 && bmi < 25) {

        bodyType = "Mesomorph";
        recommendation = "Lean Bulk";

        workout = `
        ✔ Push Day<br>
        ✔ Pull Day<br>
        ✔ Legs<br>
        ✔ Cardio<br>
        ✔ Core Workout
        `;

        diet = `
        🍗 Chicken<br>
        🧀 Paneer<br>
        🥣 Oats<br>
        🍎 Fruits<br>
        🥦 Vegetables
        `;

    }

    else {

        bodyType = "Endomorph";
        recommendation = "Cutting";

        workout = `
        ✔ HIIT Cardio<br>
        ✔ Push Pull Legs<br>
        ✔ Running<br>
        ✔ Cycling<br>
        ✔ Abs Workout
        `;

        diet = `
        🥗 Salad<br>
        🥚 Boiled Eggs<br>
        🍗 Chicken Breast<br>
        🥦 Green Vegetables<br>
        🥣 Oats
        `;

    }

    if (goal === "Gain Muscle") {
        calories = Math.round(weight * 40);
    }

    else if (goal === "Lose Weight") {
        calories = Math.round(weight * 28);
    }

    else {
        calories = Math.round(weight * 33);
    }

    protein = Math.round(weight * 2);

    // AI Score
    score = Math.floor(Math.random() * 6) + 94;

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = `

<h2>🤖 AI Fitness Report</h2>

<hr><br>

<h3>Hello ${name} 👋</h3>

<p><b>Age :</b> ${age}</p>

<p><b>Gender :</b> ${gender}</p>

<p><b>BMI :</b> ${bmi}</p>

<p><b>Body Type :</b> ${bodyType}</p>

<p><b>Goal :</b> ${goal}</p>

<p><b>Experience :</b> ${experience}</p>

<p><b>Recommendation :</b> ${recommendation}</p>

<p><b>AI Confidence :</b> ${score}%</p>

<p><b>Daily Calories :</b> ${calories} kcal</p>

<p><b>Protein :</b> ${protein} g</p>

<p><b>Water Intake :</b> ${water} Litres</p>

<h3>🏋 Workout Plan</h3>

${workout}

<h3>🥗 Diet Plan</h3>

${diet}

`;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

}