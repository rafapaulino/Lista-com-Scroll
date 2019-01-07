/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/dropdown.min.css': [
						'css/dropdown.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/dropdown.min.js': [
                        'js/dropdown.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};
