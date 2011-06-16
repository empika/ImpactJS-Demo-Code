ig.module(
  'game.entities.interface'
)
.requires(
  'impact.entity'
)
.defines(function() {
  EntityInterface = ig.Entity.extend({
  	init: function( x, y, settings ) {
        // Call the parent constructor
        this.parent( x, y, settings );
    },
    
    update: function(){
      if( ig.input.pressed('createSoldier')){
       //console.log("spawning"); 
       ig.game.spawnEntity( EntitySoldier, 32, 32 );
      }
    }
  });
});