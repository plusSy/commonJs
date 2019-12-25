const fs = require('fs');
const path = require('path');
const deliverClient = require('./client');
const archiver = require('archiver'),
  fileName = 'commonJs.zip',
  output = fs.createWriteStream(fileName),
  archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });

output.on('close', function () {
  let deliverPromise = deliverClient('http://10.22.1.30:3004/public', '', fileName);
  deliverPromise.then(
    () => {
      console.log('finish');
    },
    err => {
      console.log(err);
    }
  );

});

output.on('end', function () {
  console.log('Data has been drained');
});

// 抛出压缩警告信息
archive.on('warning', function (err) {
  if (err.code !== 'ENOENT') {
    throw err;
  }
});

archive.on('error', function (err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory('doc/', false);
archive.finalize();
