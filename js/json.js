fruteria = {
    frutas: [{
            tipo: "naranja",
            cantidad: 10
        },
        {
            tipo: "platanos",
            cantidad: 25
        },
        {
            tipo: "peras",
            cantidad: 5
        }
    ],
    verduras: [{
            tipo: "alcachofa",
            cantidad: 10,
            propiedades: ["vitamina B", "agua"]
        },
        {
            tipo: "tomates",
            cantidad: 25,
            precioUnidad: 0.25
        }
    ]
};


/**
 *  Hacer uso de objeto json para guardar las preguntas en un cookie
 */

JSON.stringify(); // Pasa el objeto en un objeto string JSON
JSON.parse(); // Coge el objeto transformado en JSON y lo pasa a su estado natural

/**------------------------------------- */

let cuestionario = [{
    persona: [{
        preguntas: [{
            name: "uno",
            contestacion: true,
            puntos: 2
        }],
        correo: "otros@gamil.com",
        fecha: "12-12-2020"
    }],

    persona2: [{
        preguntas: [{
            name: "uno",
            contestacion: true,
            puntos: 2
        }],
        correo: "otros@gamil.com",
        fecha: "12-12-2020"
    }]
}]