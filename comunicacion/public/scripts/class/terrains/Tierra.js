var Tierra = function( params , world ){

	// Props del hijo (con mas valor que las del Padre)
	var defaults = {
		"name": 'tierra',
		"descripcion": "Tierra común y silvestre",
		"solid": false,
		"specie":"Tierra",
	}

	// Hereda del padre y le agrega defaults.
	extend( this , Terrain , defaults );

	// Sobreescribe las propiedades con los valores pasados en params cuando se instancia.
	merge( this , params , this );


	// Se agrega en el mapa
	this.world = world;
	this.world.getTile( this.position ).append({ 'terrain' : this })
}
