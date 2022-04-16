let spinItems = ['\r|','\r/','\r-','\r\\','\r| \n'];

for(let i = 0; i < spinItems.length; i++) {

  setTimeout(() => {

    process.stdout.write(`${spinItems[i]} `);


  }, (i*100)+200);

}

 

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  \n');
// }, 900);

