
let userPlace = prompt("Dream Vacation Place:");
let userTransport = prompt("Mode of Transportation");
let userFood = prompt("Favorite Food");
let userCandy = prompt("Favorite Candy");
let userStole = prompt("Something that is Valuable (Jewelry, Money, Diamonds, etc)");
let userEnemy = prompt("Your Enemy");

let userWeapon = prompt("Weapon (Banana, Freeze Ray, Lazer Gun, etc.)");
let userAdjective = prompt("Adjective");
let userName = prompt("Name");
let userTime = prompt("Time");



let story = `Today when I woke up Kevin and Bob told me I was going to
${/* userPlace: Dream Vacation Place */ ''}${userPlace} for our next heist we took the ${/* userTransport: Mode of Transportation */ ''}${userTransport} to meet up with Gru. When we arrived we used ${/* userFood: Favorite Food */ ''}${userFood} to attack the guards, and used ${/* userCandy: Favorite Candy */ ''}${userCandy} to cover the cameras. After we broke into the room to steal the ${/* userStole: Valuable item */ ''}${userStole}. But while we tried to steal ${userStole} ${/* userEnemy: Your Enemy */ ''}${userEnemy} was also trying to steal ${userStole}. But we were able to escape using ${/* userWeapon: Weapon */ ''}${userWeapon} to fight ${userEnemy} off. We ran to our next escape vehicle which is the ${/* userAdjective: Adjective */ ''}${userAdjective} ${/* userName: Name */ ''}${userName} mobile. Luckily we made it home safe at ${/* userTime: Time */ ''}${userTime} with ${userStole}! `
;


document.getElementById("madlib-output").innerHTML = story ;
