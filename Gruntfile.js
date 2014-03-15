module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-http-server');


    grunt.initConfig({
        'http-server': {
            dev: {
                root: '.',

                port: 8282,
                host: '127.0.0.1',

                // cache: <sec>,
                showDir : true,
                autoIndex: true,
                defaultExt: 'html',

                //wait or not for the process to finish
                runInBackground: false
            }
        },
    });

    grunt.registerTask('default', [
        'http-server'
    ]);
};
