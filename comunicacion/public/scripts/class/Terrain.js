var Terrain = function( params , world ){


	var defaults = {

		/*Objeto que contiene el sprite de THREE.JS*/
		"sprite":null,


		/*Angulo del Terrain*/
		"rotation":{
			"x":0,
			"y":0
		},

		/*Propiedad que define si el objeto puede Terrain atravesado*/
		"solid":true,

		// no lo estamos usando, lo dejamos por si las moscas
		"world":null,

		"type":Terrain,

		/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
		/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
		/*
			PROPIEDADES DE COMUNICACION: Las propiedades con el prefijo _
			utilizan setters y getters para clonar el valor asignado a cada
			propiedad en una lista de valores modificados.
			Luego sera enviad apor socket.
		*/
		/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

		/*Posicion del Terrain*/
		"position":{
			"x":0,
			"y":0
		},

	}

	/*Mezcla de los defaults con los parametros pasados al objeto*/
	merge( defaults , params , this );

	//this.world = world;
	this.setWorld = function( params ){
		this.world = params;
	}

	this.setWorld( world );

}
