module.exports = function (grunt) {

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
        cwd: 'source/templates/',
        src: ['*.jsx', '**/*.jsx'],
        dest: 'source/scripts/templates/',
        ext: '.js'
      }
    },
    watchify: {
      options: {
        debug: true
      },
      build: {
        src: ['./source/scripts/**/*.js'],
        dest: 'public/js/bundle.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'source/scripts/**/*.js', '!source/scripts/templates/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'templates/**/*.jsx', 'sass/**/*.scss', 'source/scripts/**/*.js'],
      tasks: ['jshint', 'react', 'compass', 'watchify:build']
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
  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concurrent:target']);

};