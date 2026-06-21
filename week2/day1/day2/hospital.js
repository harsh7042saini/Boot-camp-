const form =
document.getElementById(
"doctorForm"
);

const tbody =
document.querySelector(
"tbody"
);

form.addEventListener(
"submit",

function(e){

e.preventDefault();

const name =
document.getElementById(
"name"
).value;

const id =
document.getElementById(
"docID"
).value;

const dept =
document.getElementById(
"dept"
).value;

const exp =
Number(
document.getElementById(
"exp"
).value
);

const email =
document.getElementById(
"email"
).value;

const mobile =
document.getElementById(
"mbl"
).value;

let role="";
let roleClass="";

if(exp>5){

role="Senior";

roleClass=
"role-senior";

}

else if(exp>=2){

role="Junior";

roleClass=
"role-junior";

}

else{

role="Trainee";

roleClass=
"role-trainee";

}

const row =
document.createElement(
"tr"
);

row.innerHTML = `

<td>${name}</td>

<td>${id}</td>

<td>${dept}</td>

<td>${exp}</td>

<td>${email}</td>

<td>${mobile}</td>

<td>
<span class="role-badge ${roleClass}">
${role}
</span>
</td>

<td>
<button class="delete-btn">
Delete
</button>
</td>

`;

row
.querySelector(
".delete-btn"
)
.addEventListener(
"click",

function(){

row.remove();

}
);

tbody.append(row);

form.reset();

}
);