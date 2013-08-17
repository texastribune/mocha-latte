module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        nodeunit:
            all: ['lib/*.test.js']

    # for simple utility functions
    grunt.loadNpmTasks 'grunt-contrib-nodeunit'

    grunt.registerTask 'test', ['nodeunit']
    grunt.registerTask 'default', ['test']
