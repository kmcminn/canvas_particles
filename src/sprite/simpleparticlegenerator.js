/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 7:28 PM
 * To change this template use File | Settings | File Templates.
 */


// simple particle generator, creates a bunch of squares when updated
// generateStatc() does a fixed number of particles
// where generateDynamic() is set to read from the utime and increase the number of particles

var SimpleParticleGenerator = function(size, colorSrc){
    size = size || 10;
    colorSrc = colorSrc || undefined;

    var particles = [];
    var particleCount = 50;
    var generatorType = 'static';
    var particleCounter = 0;

    var truncate = function(){
        particles.length = 0;
    };

    // particle counters are used for measuring pps in Metrics()
    var setParticleCounter = function(v){
        particleCounter = v;
    };

    var getParticleCounter = function(){
        return particleCounter;
    };

    var getParticleCount = function(){
        return particleCount;
    };

    var getRandomParticle = function(size){
        size = size || 10;
        return {
            x: M.randomInt(0, M.$canvas.width),
            y: M.randomInt(0, M.$canvas.height),
            color: getColor(),
            size: size
        }
    };

    var getColor = function(){

        if (typeof(colorSrc) === "function"){
            return colorSrc();
        } else {
            return "#000000";
        }
    };

    var generateStatic = function(){
        for (var i = 0; i < particleCount; i += 1){
            particles.push(getRandomParticle(size));
        }
    };

    var setGenerator = function(e){
        generatorType = e;
    };

    var generateDynamic = function(){

        if (M.time.getDelta() < 20 && M.metrics.utime() < 16 ){
            particleCount += 50;

        } else {
            particleCount -= 50;
        }
        for (var i = 0; i < particleCount; i += 1){
            particles.push(getRandomParticle(size));
            particleCounter += 1;
        }
    };

    var update = function(){
        truncate();

        if (generatorType === "static"){
            generateStatic();
        } else {
            generateDynamic();
        }

        for (var j= 0, len=particles.length; j < len; j += 1){
            M.$context.fillStyle = particles[j].color;
            M.$context.fillRect(particles[j].x, particles[j].y, size, size);
        }

    };

    return {
        update: update,
        getParticleCount: getParticleCount,
        setGenerator: setGenerator,
        getParticleCounter: getParticleCounter,
        setParticleCounter: setParticleCounter
    }
};