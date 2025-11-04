let userPlace = prompt("Dream Vacation Place:");
let userTransport = prompt("Mode of Transportation");
let userFood = prompt("Favorite Food");
let userCandy = prompt("Favorite Candy");
let userStole = prompt("Something that is Valuable (Jewelry, Money, Diamonds, etc)");
let userEnemy = prompt("Your Enemy");
let userWeapon = prompt("Weapon (Banana, Freeze Ray, Lazer Gun, etc.");
let userAdjective = prompt("Adjective");
let userName = prompt("Name");
let userTime = prompt("Time");










/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

let story = `Today when I woke up Kevin and Bob told me I was going to ${userPlace} for our next heist we took the ${userTransport} to meet up with Gru. When we arrived we used ${userFood} to attack the guards, and used ${userCandy} to cover the cameras. After we broke into the room to steal the ${userStole}. But while we tried to steal ${userStole} ${userEnemy} was also trying to steal ${userStole}. But we were able to escape using ${userWeapon} to fight ${userEnemy} off. We ran to our next escape vehicle which is the ${userAdjective} ${userName} mobile. Lucklally we made it home safe at ${userTime} with ${userStole}! `
;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/



document.getElementById("madlib-output").innerHTML = story ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/
