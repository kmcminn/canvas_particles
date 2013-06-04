/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 7:04 PM
 * To change this template use File | Settings | File Templates.
 */



var ParticleGenerator = function(){
    var particles = [];
    var commands = [];

    var getRandomParticle = function(color, size){
        color = color || "#000000";
        size = size || 10;
        return { x: M.randomInt(0, M.$canvas.width),
            y: M.randomInt(0, M.$canvas.height),
            color: color,
            size: size
        }
    };

    var generate = function(num, color, size){
        num = num || 50;

        if (typeof(color) === "function"){
            for (var i = 0; i < num; i += 1){
                particles.push(getRandomParticle(color(), size));

            }
        } else {
            for (var i = 0; i < num; i += 1){
                particles.push(getRandomParticle(color, size));

            }
        }
    };

    var getParticles = function(){
        return particles;
    };

    var update = function(){
        M.$context.fillStyle = color;
        M.$context.fillRect(x, y, size, size);
    };

    return {
        update: update,
        getParticles: getParticles
    }
};
