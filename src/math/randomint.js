/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 6:52 PM
 * To change this template use File | Settings | File Templates.
 */



M.randomInt = function(min, max) {
    min = min || 0;
    max = max || 1000000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};