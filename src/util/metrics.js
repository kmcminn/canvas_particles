/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */


// simple metrics class, builds a box on the dom that we can call innerHTML on stuff
// uses start() and stop() called from the update loop to get measurements for utime
// calculates fps and pps from the update method
var Metrics = function(){

    var frames = 0, fps = 0, utime = 0, startTime, stopTime, updateUtimeInterval = 200,
        lastUpdatedUtime = Date.now(), now = Date.now(), prevTimeA = Date.now(), particlesPerSecond = 0,
        prevTimeB = Date.now(), prevTimeC = Date.now(), deltaRaf = 0;

    var init = function(){
        M.$metrics = M.$dom.createElement('div');
        M.$metrics.id = 'metrics';
        M.$metrics.style.cssText = 'opacity:0.9;cursor:pointer';
        M.$dom.body.appendChild(M.$metrics);
        M.$metrics.style.position = 'absolute';
        M.$metrics.style.top = "0px";
        M.$metrics.style.right = "0px";
        M.$metrics.style.height = "167px";
        M.$metrics.style.width = "140px";
        M.$metrics.style.border = 'thin solid #000000';
        M.$metrics.style.zIndex = 10;
        M.$metrics.innerHTML = '<h4>metrics</h4>';

        M.$fps = M.$dom.createElement( 'div' );
        M.$fps.id = 'fps';
        M.$fps.style.zIndex = 10;
        M.$fps.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#ccc';
        M.$metrics.appendChild( M.$fps );
        M.$fps.innerHTML = "fps";

        M.$utime = M.$dom.createElement( 'div' );
        M.$utime.id = 'utime';
        M.$utime.style.zIndex = 10;
        M.$utime.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#ccc';
        M.$metrics.appendChild( M.$utime );
        M.$utime.innerHTML = "utime";

        M.$pps = M.$dom.createElement( 'div' );
        M.$pps.id = 'pps';
        M.$pps.style.zIndex = 10;
        M.$pps.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#ccc';
        M.$metrics.appendChild( M.$pps );
        M.$pps.innerHTML = "pps";

        M.$delta = M.$dom.createElement( 'div' );
        M.$delta.id = 'delta';
        M.$delta.style.zIndex = 10;
        M.$delta.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#ccc';
        M.$metrics.appendChild( M.$delta );
        M.$delta.innerHTML = "delta";

    };

    var start = function(){
        startTime = Date.now();

    };

    var stop = function(){
        stopTime = Date.now();
        updateUtime();
    };

    var getUtime = function(){
        return utime;
    };

    var getFps = function(){
        return fps;
    };

    var updateParticles = function(){
        if (now > prevTimeB + 1000){
            particlesPerSecond = Math.floor( (M.particle1.getParticleCounter() * 1000) / (now - prevTimeB) );
            M.$pps.innerHTML = 'pps: ' + particlesPerSecond;
            M.particle1.setParticleCounter(0);
            prevTimeB = now;
        }

    };

    var updateDelta = function(){
        if (now > prevTimeC + 1000){
            deltaRaf = Math.floor( M.time.getDelta() );
            M.$delta.innerHTML = 'fdelta:' + deltaRaf;
            prevTimeC = now;
        }

    };

    var updateUtime = function(){
        if (stopTime - lastUpdatedUtime > updateUtimeInterval){
            utime = stopTime - startTime;
            M.$utime.innerHTML = 'utime: ' + utime;
            lastUpdatedUtime = stopTime;
        }
    };

    var updateFps = function(){
        frames += 1;
        if ( now > prevTimeA + 1000 ) {
            fps = Math.floor( (frames * 1000) / (now - prevTimeA) );
            M.$fps.innerHTML = 'fps: ' + fps;
            frames = 0;
            prevTimeA = now;
        }
    };

    var update = function(){
        now = Date.now();

        updateFps();
        updateParticles();
        updateDelta();

    };

    return {
        update: update,
        init: init,
        start: start,
        stop: stop,
        fps: getFps,
        utime: getUtime
    }

};