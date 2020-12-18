var gulp = require('gulp');
var sftp = require('gulp-sftp');

const sftpOption = {
    host: '39.107.248.255', // FTP主机地址
    user: 'root',
    pass: 'zhihao39751101#',
    remotePath: '/usr/share/nginx/html/'
};

gulp.task('upload', function () {
    return gulp.src('build/**')
        .pipe(sftp(sftpOption));
});
