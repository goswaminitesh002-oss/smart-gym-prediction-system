const result=document.getElementById("result");
const report=document.getElementById("report");
const scoreValue=document.getElementById("scoreValue");

result.style.display="block";

let progress=0;

const interval=setInterval(()=>{

progress++;

scoreValue.innerHTML=progress+"%";

document.querySelector(".score-circle").style.background=
`conic-gradient(#00e5ff ${progress*3.6}deg,#333 0deg)`;

if(progress>=score){

clearInterval(interval);

}

},20);

report.innerHTML=`

<div class="report-title">

AI FITNESS REPORT

</div>

<b>👤 Name:</b> ${name}<br>

<b>⚖ BMI:</b> ${bmi}<br>

<div class="progress">
<span style="width:${score}%"></span>
</div>

<b>💪 Body Type:</b> ${bodyType}<br>

<b>🎯 Goal:</b> ${goal}<br>

<b>🔥 Recommendation:</b> ${recommendation}<br>

<b>🍛 Calories:</b> ${calories} kcal<br>

<b>💧 Water Intake:</b> ${water} Litre<br>

<div class="badge">

${experience}

</div>

<h3>🏋 Workout</h3>

${workout}

<h3>🥗 Diet</h3>

${diet}

`;