function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

// The luckyDraw function returns a promise. Create a promise chain where the function is called for
// for each of the players: Joe, Caroline and Sabrina
// Log out the resolved value for each promise and handle any promise rejections in the chain.

function promiseChain(){
    luckyDraw('Joe').then(
        (resolved) => {console.log(resolved)},
        (rejected) => {console.log(rejected)}

    )
    luckyDraw('Caroline').then(
        (resolved) => {console.log(resolved)},
        (rejected) => {console.log(rejected)}

    )
    luckyDraw('Sabrina').then(
        (resolved) => {console.log(resolved)},
        (rejected) => {console.log(rejected)}

    )
}

promiseChain()