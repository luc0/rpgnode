var Casco = function( params , world ){

	// Props del hijo (con mas valor que las del Padre)
	var defaults = {

		/*Nombre de la daga*/
		"name":"Casco",

		"solid":false,

		"specie":"Casco",

		// lugar donde se equipa
		"equipable":[
			"head",
		],

		"modificators" : {
			"shields" : { "min" : 1 , "max" : 2 }
		}

	}

	// Hereda del padre y le agrega defaults.
	extend( this , Artifact , defaults );

	// Sobreescribe las propiedades con los valores pasados en params cuando se instancia.
	merge( this , params , this );

	// Se agrega en el mapa
	this.world = world;
	this.world.getTile( this.position ).append({ 'artifact' : this });
}
