const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'application', 'img');
const targetDir = path.join(__dirname, 'frontend', 'public', 'static', 'img');

function copyImages() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('Created directory:', targetDir);
  }

  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error reading source directory:', err);
      return;
    }

    files.forEach(file => {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, file);

      fs.copyFile(sourceFile, targetFile, err => {
        if (err) {
          console.error('Error copying file:', file, err);
        } else {
          console.log('Copied:', file);
        }
      });
    });
  });
}

copyImages();
