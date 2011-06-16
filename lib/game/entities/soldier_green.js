ig.module(
	'game.entities.soldier_green'
)
.requires(
	'impact.entity'
)
.defines(function(){
  EntitySoldier_green = ig.Entity.extend({
    size: {x:16, y:16},
    animSheet: new ig.AnimationSheet( 'media/soldier_sprite_green.png', 16, 16 ),
    
    type: ig.Entity.TYPE.A, // Player friendly group
  	checkAgainst: ig.Entity.TYPE.NONE,
  	collides: ig.Entity.COLLIDES.PASSIVE,
  	bounciness: 0,
  	friction: {x: 1, y:1},
  	m_pos: {x: 0, y: 0},
  	
  	init: function( x, y, settings ) {
        // Add animations for the animation sheet
        this.addAnim( 'idle', 10, [0] );
        this.addAnim( 'left', 10, [1] );
        this.addAnim( 'right', 10, [1], true );
        this.addAnim( 'up', 10, [2] );
        this.maxVel.x = this.speed;
        this.maxVel.y = this.speed;
        this.currentAnim = this.anims.idle.rewind();
        // check we are not on top of anyone else

        // Call the parent constructor
        this.parent( x, y, settings );

    },
    
    update: function(){
      this.dragAndDrop(false, true);
      this.parent(); 
    }
    
  });

});