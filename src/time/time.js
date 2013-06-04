
// core function, critical to performance of the engine
// designed to maintain the current time delta from the last time a animation frame was drawn
// as well get the total

var Time = function(){
    // todo detect the most performance time source from a head objects
    // jsperf calling Date directly versus using a localized copy
    // dont call date.now() zillions of times. possible to update time objects once and use them lots of places
    var c = Date, createdTime = c.now(), elapsedTime = 0,
        deltaTime = 0, prevTime = 0, nowTime = 0;

    var getElapsedTime = function(){
        return elapsedTime;
    };

    var getDelta = function(){
        return deltaTime;
    };

    var getCreatedTime = function(){
        return createdTime;
    };

    //  todo raf() will send an argument of the delta from the last frame
    // i've tested this ands a little faster then calling date.now to get detlas
    var update = function(d){
        nowTime = c.now();
        deltaTime = d ? d / 1000 | 0 : nowTime - prevTime;
        prevTime = nowTime;
        elapsedTime = nowTime - createdTime;

    };

    return {
        getElapsedTime: getElapsedTime,
        getDelta: getDelta,
        getCreatedTime: getCreatedTime,
        update: update
    }
};