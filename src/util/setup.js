/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 5:50 PM
 * To change this template use File | Settings | File Templates.
 */


// called before building enythin, setup basic stuff, dom anchor points
// $ convention used to indictae stuff built on the window
M.setup = function(w,h){
    var width = w || 800;
    var height = h || 600;
    M.$dom = document || window.document;

    M.$canvas = M.$dom.createElement("canvas");
    M.$canvas.width = width;
    M.$canvas.height = height;

    M.$dom.body.appendChild(M.$canvas);
    M.$context = M.$canvas.getContext('2d');
};