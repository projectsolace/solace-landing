module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      target: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: ['*.js'],
          dest: 'dist/js/',
          ext: '.min.js'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png, jpg, gif}'],
          dest: 'dist/images/'
        }]
      }
    },
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify'],
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin']
      },
      images: {
        files: ['images/**/*.png'],
        tasks: ['imagemin']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
};
