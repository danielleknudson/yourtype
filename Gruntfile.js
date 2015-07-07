module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: 'client',
        src: ['**'],
        dest: 'public',
        expand: true
      },
      styles: {
        cwd: 'client/css',
        src: ['**'],
        dest: 'public/css',
        expand: true
      }
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
      styles: {
        files: [
          'client/css/**/*.css'
        ],
        tasks: ['copy:styles']
      },
      javascripts: {
        files: [
          'client/**/*.js',
        ],
        tasks: ['exec']
      }
    },
    browserify: {
      vendor: {
        src: [
          'client/javascripts/app.js'
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
          transform: ['brfs'],
          browserifyOptions: {
            debug: true
          }
        }
      }
    },
    exec: {
      browserify: {
        command: 'browserify -t jstify client/javascripts/app.js > public/app.js'
      }
    }
  });
  // Load plugins needed
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('jstify');
  grunt.loadNpmTasks('grunt-exec');

  // Default tasks
  grunt.registerTask('dev', ['watch']);
};
