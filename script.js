console.log("Program ajillaj ehellee");

try {
    console.log("Program ajillaj ehellee")
    let x = prompt ("1-100" + "hoorond too oruulna uu!");
} catch (error) {
   if (error.message === "prompt is not defined") {
       console.log ("Uuchlaarai, ene kodig brwoser der ajilluulna");
   } else if (error.message === 'aaaaaa'){
   }
}