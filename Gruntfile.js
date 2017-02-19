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
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify'],
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
