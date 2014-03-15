module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-usemin');


    grunt.initConfig({

        jshint: {
            // Use readJSON rather than the .jshintrc option so that the options
            // are available for reference in other tasks
            options: grunt.file.readJSON('.jshintrc'),
            sourceCode: {
                src: [ 'js/*.js' ]
            },
            grunt: {
                src: [ 'Gruntfile.js' ],
                options: {
                    node: true,
                    // Relax the number of max statements for the Gruntfile.
                    maxstatements: 50
                }
            }
        },

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

        concat: {
            '.tmp/main-concat.js' : [
                'js/vendor/bootstrap.js',
                'js/vendor/jquery.scrollTo.js',
                'js/main.js'
            ],

            '.tmp/main-concat.css' : [
                'css/bootstrap.css',
                'css/bootstrap-theme.css',
                '.tmp/main.css'
            ]
        },

        less: {
            '.tmp/main.css' : 'less/main.less'
        },

        uglify: {
            'dist/main.min.js' : '.tmp/main-concat.js'
        },

        csso: {
            'dist/main.min.css' : '.tmp/main-concat.css'
        },

        copy: {
            app: {
                files: [
                    {
                        src: [ 'index.html' ],
                        dest: 'dist/index.html'
                    },
                    {
                        src: [ 'favicon.ico' ],
                        dest: 'dist/favicon.ico'
                    },
                    {
                        src: [ 'img/*.jpg' ],
                        dest: 'dist/'
                    },
                    {
                        src: [ 'fonts/*' ],
                        dest: 'dist/'
                    },
                    {
                        src: [ 'js/vendor/modernizr-2.6.2-respond-1.1.0.min.js' ],
                        dest: 'dist/vendor/modernizr-2.6.2-respond-1.1.0.min.js'
                    }
                ]
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

        clean: [ 'dist', '.tmp' ],
    });

    grunt.registerTask('default', [
        // clean
        'clean',
        // check files
        'jshint',
        // generate files
        'less',
        'concat',
        'copy',
        // optimize
        'usemin',
        'csso',
        'uglify'
    ]);
};
