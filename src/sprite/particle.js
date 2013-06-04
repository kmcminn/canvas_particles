/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 7:04 PM
 * To change this template use File | Settings | File Templates.
 */


var Particle = function(x,y,c,s){
    x = x || 0;
    y = y || 0;
    var color = c || "#000000";
    var size = s || 2;

    var draw = function(){
        M.$context.fillStyle = color;
        M.$context.fillRect(x, y, size, size);
    };

    return {
        draw: draw
    }
};
