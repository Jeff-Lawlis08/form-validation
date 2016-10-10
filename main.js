var firstName = document.querySelector('.first-name');
var button = document.querySelector('.button');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var bio = document.querySelector('.bio');
var digits = document.querySelector('.phone-number');
var catName = document.querySelector('.cat-name');
var gadget = document.querySelector('.gadget');
var drink = document.querySelector('.drink');
var power = document.querySelector('.power');
var weapon = document.querySelector('.weapon');
var comments = document.querySelector('.comments');
var affiliations = document.querySelector('.affiliations');
var country = document.querySelector('.country');
var occupation = document.querySelector('.occupation');
var talent = document.querySelector('.talent');

button.addEventListener('click', function() {
if (firstName.value === ""){
  alert('you messed up First Name');
}
else if (lastName.value === "") {
  alert('you messed up Last Name');
}
else if (email.value === "") {
  alert('you messed up Email');
}
else if (bio.value === "") {
  alert('you messed up Biograph');
}
else if (digits.value === "") {
  alert('you messed up Phone Number');
}
else if (catName.value === "") {
  alert('you messed up Cat Name');
}
else if (gadget.value === "") {
  alert('you messed up Favorite Gadget');
}
else if (drink.value === "") {
  alert('you messed up Favorite Drink');
}
else if (power.value === "") {
  alert('you messed up Special Power');
}
else if (weapon.value === "") {
  alert('you messed up Weapon of Choice');
}
else if (comments.value === "") {
  alert('you messed up Comments');
}
else if (affiliations.value === "") {
  alert('you messed up Affiliations');
}
else if (country.value === "") {
  alert('you messed up Country');
}
else if (occupation.value === "") {
  alert('you messed up Occupation');
}
else if (talent.value === "") {
  alert('you messed up Type of Talent');
}
var completed = {};
completed.fName = firstName.value;
completed.lName = lastName.value;
completed.mail = email.value;
completed.biography = bio.value;
completed.telephone = digits.value;
completed.cName = catName.value;
completed.gadgets = gadget.value;
completed.favDrink = drink.value;
completed.sPower = power.value;
completed.weapChoice = weapon.value;
completed.comment = comments.value;
completed.aff = affiliations.value;
completed.ctry = country.value;
completed.occ = occupation.value;
completed.talentType = talent.value;

console.log(completed);
});
