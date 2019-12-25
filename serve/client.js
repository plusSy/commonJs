'use strict';
const socketClient = require('socket.io-client');
const ss = require('socket.io-stream');
const fs = require('fs');

module.exports = function deliverFile(socketServer, storeDir, fileName) {
    return new Promise((resolve, reject) => {
        const socket = socketClient(socketServer);

        socket.on('connect', function () {
            console.log('connected');

            socket.emit('send_file_info', {
                dir: storeDir,
                fileName: fileName
            });

            socket.on('upload_a_file', function () {
                let stream = ss.createStream();

                stream.on('error', error => {
                    if (stream.truncated) {
                        // delete the truncated file
                        fs.unlinkSync(fileName);
                    }
                    reject(error);
                });

                stream.on('end', function () {
                    socket.disconnect();
                    fs.unlinkSync(fileName);
                    resolve();
                });

                ss(socket).emit('uploading', stream);

                let raw = fs.createReadStream(fileName);
                raw.on('error', function (err) {
                    reject(err);
                });
                raw.pipe(stream);
            });
        });
    });
};
