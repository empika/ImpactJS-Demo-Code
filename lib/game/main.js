ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'plugins.debug_display',
	'plugins.html_button',
	'plugins.game_utilities',
	'plugins.entity_utilities',
	'game.levels.01_soldier_walk',
	'game.entities.soldier',
	'game.entities.soldier_green',
	'game.entities.interface'
)
.defines(function(){

  MyGame = ig.Game.extend({
	
  	// Load a font
  	font: new ig.Font( 'media/04b03.font.png' ),
	
  	init: function() {
  		// Initialize your game here; bind keys etc.
  		this.debugDisplay = new DebugDisplay( this.font );		
  		this.loadLevel( Level01_soldier_walk );
  		
  		ig.input.initMouse();
      ig.input.bind( ig.KEY.MOUSE1, 'lbtn' );
  		ig.input.bindTouch( '#buttonSoldier', false, false, 'createSoldier' );
  		this.spawnEntity( EntityInterface, 0, 0 );
  		for(var i = 0; i < this.backgroundMaps.length; i++){
          this.backgroundMaps[i].preRender = true;
      }
  	},
	
  	update: function() {
  		// Update all entities and backgroundMaps
  		this.parent();
		
  		// Add your own, additional update code here
  	},
	
  	draw: function() {
  		// Draw all entities and backgroundMaps
  		this.parent();

  		// Add your own drawing code here
  		var x = ig.system.width/2, y = ig.system.height/2;

  		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
  		this.debugDisplay.draw([], true, true, 1000);
  	}
  });


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 512, 384, 2 );

});