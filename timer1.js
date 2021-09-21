const args = process.argv.splice(2);
console.log(args);
if (args.length) {
  
  for (const num of args) {
    if (!isNaN(num) && num >= 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
}

