/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 7:50 PM
 * To change this template use File | Settings | File Templates.
 */


// the update loop
// crucial to the games stability
// metrics to capture how long we spend in the update loop
// could also statically invoke the update methods of all the things without needing the loop
// but this removes some of the dynamic bits
M.update = function(delta){

    M.metrics.start();

    M.time.update(delta);
    M.particle1.update();
    M.metrics.update();
    // for (var i = 0, j= M.objects.length; i < j; i += 1){
    //     M.objects[i].update();
    // }
    M.metrics.stop();

};