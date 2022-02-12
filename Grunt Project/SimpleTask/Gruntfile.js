module.exports = (grunt)=> {


    grunt.registerTask("first task",()=>{
        console.log("This is grunt first task");
    });

    grunt.registerTask("second",()=>{
        console.log("This is grunt second task");
    });

    grunt.registerTask("default",["first task","second"]);
    
    // grunt.registerTask("default",()=>{
    //     console.log("This is grunt default task");
    // });


}