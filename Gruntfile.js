module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            test: {
                options: {
                    quiet: false,
                    timeout: 10000
                },
                src: ['**/*_test.js']
            }
        }
    });

    grunt.registerTask('default', ['mochaTest']);
};
