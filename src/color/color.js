/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 6:09 PM
 * To change this template use File | Settings | File Templates.
 */


// start of a color library only needed to generate a random hex color string
// but could be extended to create an object that could return a color in any representatoin
// such as rgb, hex, hsl, etc -- three.js' color library is good
// but wrapping colors in objects might have performance hits
var Color = function(){

    var randomHexColor = function(){
        var color = Math.floor(Math.random()*16777215);
        return '#'+color.toString(16);
    };

    return {
        randomHexColor: randomHexColor
    }


};