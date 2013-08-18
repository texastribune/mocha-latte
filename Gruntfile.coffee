module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        nodeunit:
            all: ['lib/*.test.js']

        mocha:
            all: ['test/mocha.html']
            options:
                reporter: 'Nyan'
                run: true

        browserify2:
            main:
                entry: './lib/jquery.aura.js'
                compile: 'build/jquery.aura.js'

    # for simple utility functions
    grunt.loadNpmTasks 'grunt-contrib-nodeunit'
    grunt.loadNpmTasks 'grunt-mocha'
    grunt.loadNpmTasks 'grunt-browserify2'

    grunt.registerTask 'test', ['nodeunit', 'mocha']
    grunt.registerTask 'default', ['test', 'browserify2']
