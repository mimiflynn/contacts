module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: ['watch', 'connect:server'],
        options: {
            logConcurrentOutput: true,
            limit: 5
        }
      }
    },
    react: {
      files: {
        expand: true,
        cwd: 'templates/',
        src: ['**/*.jsx'],
        dest: 'public/scripts/templates',
        ext: '.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/**/*.js', '!public/scripts/lib/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', '<%= react.files.cwd %>'],
      tasks: ['jshint', 'react']
    },
    connect: {
      server: {
        port: 1337,
        base: 'public'
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:target']);

};