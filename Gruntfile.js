const sass = require('node-sass');

module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        concat: {
            js: {
              src: ['js/*.js'],
              dest: 'build/script.js',
            },
            css: {
                src : ['css/reset.css','css/bootstrap.css','css/styles.css'],
                dest: 'build/styles.css',
              }
        },        
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },    
            //buid is a task name
            build: {
                files:[{
                    src : 'css/sass/styles.scss',
                    dest : 'css/styles.css'                    
                }]
            }
        },

        uglify: {
            options: {
              mangle: true
            },
            build: {
              files: {
                src : 'build/script.js',
                dest : 'build/script.js'        
              }
            }
          }        
    });

    //Load Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');    

    //Register Tasks
    //grunt.registerTask('Any Name',['which job you want to run']);
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);      
};

  /*Register Tasks
    grunt.registerTask('run',function(){
        console.log('I am running');
    });

    grunt.registerTask('sleep',function(){
        console.log('I am sleeping');
    });

    grunt.registerTask('all',['sleep','run']);*/