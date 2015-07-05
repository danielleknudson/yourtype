module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: 'client',
        src: [ '**' ],
        dest: 'public',
        expand: true
      },
    },
    jshint: {
      files: ['Gruntfile.js', 'client/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      sources: {
        files: [
          'client/**/*.js'
        ],
        tasks: ['browserify']
      }
    },
    browserify: {
      vendor: {
        src: [
          'client/**/*.js'
        ],
        dest: 'public/app.js',
        options: {
          require: ['jquery']
        }
      },
      client: {
        src: ['client/**/*.js'],
        dest: 'public/app.js',
        options: {
          external: ['br-jquery'],
        }
      }
    }
  });
  // Load plugins needed
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');


  // Default tasks
  grunt.registerTask('dev', ['watch']);
};
