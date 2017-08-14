const fs = require('fs');

const printFiles = (err, files) => {
  if(err) {
    return;
  }
  files.forEach((f) => {
    if (f!=='song') {
      console.log(f);
    }
  });
}

fs.readdir('/home', printFiles);
fs.readdir('/Users', printFiles);
