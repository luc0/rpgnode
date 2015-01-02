function World( params ){

	var defaults = {

		"tiles" : null,
		"createdObjects": {}

	}

	merge( defaults , params , this );


	// Borra objeto del mapa
	this.removeObject = function( params ){
		this.createdObjects[ params.object.name ] = null;
	}

	// Carga los tiles desde un array en donde se le define el terrain de cada uno.
	this.loadTiles = function( params ){
		for( var tx in params ){
			for( var ty in params[tx] ){
				this.tiles[tx][ty].terrain = new params[ty][tx].terrain({"position":{"x":+tx,"y":+ty},"world":this});
			}
		}

	}

	// Devuelve tile en base a una posicion dada.
	this.getTile = function( position ){
		if( this.tiles[ position.x ] && this.tiles[ position.x ][ position.y ] ){
			return this.tiles[ position.x ][ position.y ];
		}else{
			return false;
		}

	}

	// refresca posicion de un elemento ( being , terrain u object)
	this.refresh = function( params ){

		// Verifica en que capa esta el objeto
		var element_type;
		switch( params.element.type ){
			case Being:
				element_type = 'being';
				break;
			default:
				break;
		}

		// borra de la posicion anterior.
		this.getTile( params.lastPosition )[element_type] = null;
		// lo crea en la nueva posicion.
		this.getTile( params.element.position )[element_type] = params.element;
	}

	this.tiles = createArray( 30 , 30 , Tile );

	this.loadTiles( [
		[ {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} , {terrain:Agua} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ],
		[ {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Agua} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} , {terrain:Tierra} ]
	] );

}
