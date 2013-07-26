/**
 * Created with JetBrains WebStorm.
 * User: karsten
 * Date: 6/1/13
 * Time: 6:19 PM
 * To change this template use File | Settings | File Templates.
 */


// the update object
M.objects = [];

// fetch instances of our core objects
M.time = new Time();
M.color = new Color();
M.particle1 = new SimpleParticleGenerator(10, M.color.randomHexColor);
M.particle1.setGenerator('dynamic');
M.metrics = new Metrics();

// setup what will get update method calls, commented out to use direct calls in update()

// setup and configure our environment
M.setup(window.innerWidth, window.innerHeight);

// initialize our metrics
M.metrics.init();

// begin the game
M.animate(0);
