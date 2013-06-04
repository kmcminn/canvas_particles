/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 7:58 PM
 * To change this template use File | Settings | File Templates.
 */


// animation method
// always queue the callback immediately
M.animate = function(delta){

    window.requestAnimationFrame(M.animate.bind(M));
    M.update();

};
