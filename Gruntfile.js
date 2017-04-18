module.exports=(grunt)=>{
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "bower-install-simple": {
      options: {
        directory: "public/bower_components"
      },
      "prod":{
        src:['./public/index.html'],
        dependencies:true,
        devDependencies:true,
        exclude:[]
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-install-simple');

  grunt.registerTask('default',['bower-install-simple']);
};
