const source = [
    ['¿Cómo maldice un pollo a otro pollo? ¡Caldito seas!'],
    [
        'Cariño, pronto sera nuestro aniversario. ¿Que me vas a regalar?',
        '¿Ves ese coche aparcado? Pues una liquadora del mismo color'
    ],
    [
        'La noche de bodas, el novio encuentra a la novia en la cama con un enano',
        '¿Y ese quién es?',
        '¡El aperitivo!'
    ],
    [
        'Un hombre llega a casa y se encuentra a su mujer en la cama con otro',
        '¿Y ese quién es?',
        'Ése es quien paga el piso, la luz, la comida, el colegio de las niñas, ...',
        '¡Tápalo, tápalo! ¡Que no se resfrie!'
    ],
    [
        'Oye, ¿tu mujer a que se dedica?',
        'Mi mujer es jinete de aves de corral',
        'Hostia, ¿y eso que es?',
        'Que cada dos por tres me monta un pollo'
    ],
    [
        '¿Tienes hijos?',
        'Sí, una niña. Está en esa edad que se lo mete todo en la boca',
        '¿6 meses?',
        '¡Qué va! 16 años'
    ],
    ['¿Cómo se declara el acusado?', 'Con flores. Soy bastante tradicional'],
    [
        '¡Paco quita el futbol y baja la basura!',
        '¡Cualquier día de estos cojo la puerta y...!',
        '¡¿Y!?',
        'Y la lijo y la barnizo, que falta le hace...'
    ],
    [
        'Solo cuando se posa un mosquito en tus testículos te das cuenta que no todo se soluciona con violencia'
    ],
    [
        '¿Lobezno?',
        '¿Que zi veo el qué?',
        '¡CORTEN!... ¡Por decimotercera vez, deja de hacer la broma ya y cíñete al guión joder!'
    ],
    [
        'Que fea es esa tía',
        'Es mi madre',
        'No, digo la de al lado',
        'Esa es mi hermana',
        'Pues pégame dos hostias que esto ya no hay quien lo arregle'
    ],
    ['Nunca me escuchas', 'Y yo a ti'],
    [
        'Cari, di a mis padres lo que me dijiste anoche',
        'Ehhh... ¿Que me pones la polla como el pescuezo de un cantaor?',
        'No, lo de la boda, gilipollas'
    ],
    [
        'En boca es plano, le falta pasión, textura, apenas notó el bacalao...',
        'Manolo, cómeme el coño y deja de jugar a master chef'
    ],
    [
        '¿Y tu desde cuando llevas pendiente, Paco?',
        'Desde que mi mujer se lo encontró en el coche y le dije que era mío...'
    ],
    [
        '¿Quieres que te mire a los ojos cuando me lo meta en la boca?',
        'Señorita, compórtese y sople el alcoholímetro por favor'
    ],
    [
        'Hija, deja de ligar con el panadero, podría ser tu padre',
        'Me da igual que sea mayor que yo',
        'Creo que no me has entendido'
    ],
    [
        'Cariño, hoy que vamos con el tiempo justo, lo mejor va a ser una comida rápida',
        '¿Qué te apetece, Paco? ¿Pizza?',
        'Creo que no me has entendido'
    ],
    [
        'Estás más delgada, ¿no?',
        'Es que el negro me adelgaza...',
        '¡Pero si vas de rojo!',
        'Creo que no me has entendido'
    ],
    [
        'A mi se me conquista con una buena comida',
        'Te he hecho macarrones',
        'Creo que no me has entendido'
    ],
    [
        'He denunciado al dentista por ponerme el aparato en la boca',
        'Si te lo ha puesto es porque lo necesitas',
        'Creo que no me has entendido'
    ],
    [
        'Tu mujer me pidió que le ayudara con una estantería y acabe montándola',
        'Es que no se le da nada bien el bricolaje',
        'Creo que no me has entendido'
    ],
    [
        'Necesito tu ayuda me quieren matar en Sevilla por joderles a la virgen de la Rocío',
        'Normal allí son muy religiosos',
        'Creo que no me has entendido'
    ],
    [
        'Siempre que quiero follar con mi mujer dice que le duele la cabeza',
        'A mi nunca me lo dice',
        'Pero tú no estás casado',
        'Creo que no me has entendido'
    ],
    [
        'Mi mujer se metió ayer una piña y hemos pasado la noche en urgencias',
        '¿Con el coche? ¿Pero está bien?',
        'Creo que no me has entendido'
    ],
    [
        '¡O te quitas esa falda tan corta o no sales!',
        '¿Por qué, mamá?',
        'Porque es muy corta',
        '¿Y quéeee?',
        '¡Que se te ven los huevos, José Miguel!'
    ],
    ['Por el culo no, Pepe', 'Pues ya me dirás, Paco'],
    [
        'Cariño, está lloviendo y sigues siendo una puta',
        '¿Y qué?',
        'Me dijiste que con el tiempo cambiarias'
    ],
    ['Papá, ¿soy adoptado?', 'Te elegimos negro para no tener esta conversación'],
    ['Cariño, ¿me engañas con otra?', 'Vale'],
    ['Cariño, tengo un retraso', 'Tranquila, tontita, que te quiero igual'],
    [
        'Soy un noble caballero y sé cuando he de manchar con sangre mi espada',
        'Manolo, déjate de gilipolleces, que con la regla no follo'
    ],
    [
        'Qué cabrón mi vecino. ¿Pues no se pone a llamar a mi puerta como un loco a las 4 de la mañana? Casi se me cae el taladro del susto'
    ],
    ['¿Te parece bonito?', 'Sí', 'Pues es rodaballo'],
    [
        'Entonces, doctor, ¿con este condón de lana se curará mi impotencia?',
        'No, pero le sudará la polla'
    ],
    [
        'Mamá, ¿cómo es que tú eres blanca, papá es negro y yo soy amarillo?',
        'Hijo mío, si supieras la orgía que hubo aquel día... Agradece que no ladras'
    ],
    ['Qué estrés', 'Dos más uno'],
    ['Se te dan fatal las rimas', '¡Una mierda como una olla!'],
    ['¿Sabías que las cajas negras de los aviones en realidad son naranjas?', '¿¡No son cajas!?'],
    ['¿Puedo fumar?', 'Claro', 'Vale. Uno maf uno, dof. Dof maf dof, cuatro. Tref maf tref, feif'],
    [
        'Mi marido es vidente',
        '¿Tiene dos dientes?',
        '¿Tú eres tonto? ¡Que echa las cartas!',
        'Tú sí que eres tonta, ¡entonces será cartero!'
    ],
    [
        'Jolín con los mosquitos',
        'Ponte repelente',
        'Madre mía, qué ingente cantidad de dípteros nematóceros'
    ],
    ['Cariño... ¿y si tuviéramos un hijo?', 'No creo, cielo, me acordaría'],
    ['¡Papá, papá, Jaimito la tiene com un cacahuete!', '¿De pequeña?', 'No, de salada'],
    ['El humor negro es como las piernas; hay quién tiene y quién no'],
    ['¿Qué es peor que encontrarse una cucaracha en el plato?', 'Encontrarse media'],
    [
        'Cariño, ¿me pasas el bebé?',
        'Ahora, cuando llore',
        '¿Cuando llore? ¿Porque?',
        'Porque no me acuerdo de donde lo he dejado'
    ],
    [
        'Siento decirle que mi gato ha matado a su perro',
        '¿Mi perro? ¡Pero si es un doberman!',
        'Ya, y mi gato hidráulico'
    ],
    [
        'Bienvenidos a su primera sesión matrimonial. Paco, empezemos por usted, ¿qué hace después de alcanzar el orgasmo?',
        'Borrar el historial'
    ],
    [
        'Ojo a cómo puede cambiar una frase con poner la coma o no ponerla:',
        'Quiero que me ayude, señorita',
        'Quiero que me la coma, señorita'
    ],
    [
        'Cuando voy a donar sangre, no me la extraigo yo. Lo hace una enfermera',
        'Ya pero esto es un banco de sémen',
        '¿Y?',
        '¡No le vamos a hacer ninguna paja!'
    ],
    ['Le pedí que me hiciera guarradas en la cama...', 'Se tiró un pedo y me tapo con la sábana'],
    [
        'Escoja una carta sin que yo la vea, caballero',
        'Ya',
        'Enséñesela al público',
        'Voy',
        '¡LA CARTA, ENSEÑE LA CARTA!',
        'A ver si somos más específicos'
    ],
    ['Hija, ¿tú te drogas?', 'No, ¿por?', 'Porque estás picando la cebolla con la VISA'],
    [
        '¿Cuál es su destino?',
        'No esta escrito aún, lo voy forjando con ánimo y perseverancia',
        '¿Quiere un billete de tren o no?'
    ],
    [
        'Cariño, ¿has visto a Gasol coger el rebote?',
        '¿Qué rebote?',
        'El de mis huevos en tu cogote Jajajaja Hoy no follo, ¿verdad?',
        'Ni mañana'
    ],
    ['No eres tú, soy yo', 'Eso es que has activado la cámara frontal del móvil', 'Ah, pues sí'],
    [
        'Merche, te ha llamado Almodóvar',
        '¡No jodas! ¿Para qué?',
        'Para comprar el guión de la película que te montaste ayer',
        '¡Imbécil!',
        '¡Puta loca!'
    ],
    ['Chun Li, ¿verdad o prenda?', 'Verdad', '¿Dónde está el perro de María?', 'Prenda'],
    ['Llega tarde a un bukake y se lo echan en cara'],
    [
        'Tenemos que dejar de vernos antes de que se entere mi mujer',
        'Ponte las gafas, Paco',
        'Hóstia qué movida...'
    ],
    [
        '¿Cuál es la postura que más has usado para practicar sexo?',
        'De rodillas y pidiéndolo por favor'
    ],
    [
        'Hola. Soy el vecino de arriba',
        'Hola. ¿Qué querías?',
        'Entiendo que estéis follando, pero ¿puedes decirle a tu mujer que no chille tanto?',
        'Pero si yo estoy trabajando...',
        'Ups'
    ],
    [
        'Ya estan los ordenadores actualizados',
        '¿Los has revisado todos?',
        'Sí, jefe',
        '¿Uno por uno?',
        'Uno'
    ],
    [
        'Dicen que el chocolate es un sustituivo del sexo. He metido la polla en una taza de Paladin y estoy camino de urgencias...'
    ],
    [
        '¿Cómo dejáis que vuestra madre os siga vestiendo iguales? ¡Que tenéis bigote y pelos en los huevos, joder! ¡Que ya tenéis una edad!',
        'Caballero, baje del coche y sople aquí por favor'
    ],
    ['¿Cómo te reconoceré?', 'Mirarás a uno y pensarás "Ay no, que no sea ése". Pues, ése'],
    [
        'Vengo del urólogo',
        '¿Y qué te ha dicho?',
        'Que soy gilipollas. Que los hurones se llevan al veterinario'
    ],
    [
        'Quiero despertar contigo el resto de mi vida',
        'Me levanto a las 5 de la mañana',
        'Pues va a ser que no'
    ],
    ['¿Tú crees que soy feo?', 'Hombre, fuiste al puticlub y a todas les dolía la cabeza. Raro es'],
    [
        'Alcánzame el eso que dejé allá adentro de aquello',
        '¿El qué?',
        'Madre mía Paco, pareces tonto'
    ],
    ['En una escala del 1 al 10, ¿cómo valoraria su capacidad de comprensión?', 'Muy buena'],
    ['¡No hay ni un pelo en tu camisa!', '¿Y...?', '¿Quien es esa puta calva?'],
    ['Mi coche hace un ruido espantoso', '¿Ha probado usted a quitar el CD de Pablo Alborán?'],
    [
        '¿Tiene tarjetas de San Valentín que digan: "Para mi único y verdadero amor"?',
        '¡Claro que tenemos!',
        'Pués deme ocho por favor'
    ],
    [
        '¿A partir de cuántas cervezas se puede considerar que tienes un problema?',
        'Cuando no queda ninguna más'
    ],
    ['Mi hijo es un sol; sale y se pone'],
    [
        'El problema de la sociedad de hoy es la falta de empatía, de respeto, de sentido del humor. La intolerancia',
        '¿A la lactosa?',
        'A tu puta madre'
    ],
    ['Si fuera joyero,', 'te regalaria una joya.', 'Como soy pollero,', 'no te cobro las patatas'],
    [
        'Cada vez que mi madre viene a casa y pregunta "¿Esto para qué es?" desde otra habitación, me da un microinfarto'
    ],
    [
        'Para continuar con la ceremonia, leed vuestros votos',
        'Yo pensaba que era secreto',
        'Es tu boda',
        'Bueno... vale. Que bochorno. Voto no'
    ],
    [
        'Hoy he dejado el trabajo. No podia seguir trabajando para ese hombre despues de lo que me dijo',
        '¿Que te dijo?',
        'Estas despedido'
    ],
    ['Yo una Cruzcampo', 'Yo una Heineken', 'Bueno, pues un agua para mí también'],
    ['Yo quiero un Bitter Kas', 'Yo una cerveza sin alcohol', '¿Y usted?', 'Amigos normales'],
    [
        'La morsa brama de placer mojándose en las gélidas aguas árticas',
        '¡Pepe, que le abras el agua caliente a mi madre!',
        'Su cría se rebela'
    ],
    ['Un pájaro enjaulado no es un pájaro feliz...', 'Que te lo guardes, Paco'],
    [
        'Según un estudio, dejaremos de tener sexo en 2030. Yo he dejado de follar ya para que no me pille el toro'
    ],
    ['Otro día más sin utilizar el mínimo común múltiplo ni el máximo común divisor'],
    ['La mejor viagra es cambiar de cabra'],
    ['ÚLTIMA HORA: Pide una pizza familiar y la devuelve porque no la conoce de nada'],
    [
        '¿Sabes el porcentaje de españoles que son bebedores empedernidos de cerveza?',
        'No se, ¿un tercio?',
        'Venga va, uno fresquito'
    ],
    [
        'El día menos pensado dices "pues yo prefiero salir a mediodía y tomar unos vinitos por el centro". PUM, eres más viejo que una montaña.'
    ],
    ['El límite es el cielo', 'No, el límite es 0,25. Baje del coche por favor'],
    ['¿Qué hacen esos condones rotos en el jardín?', '¡QUE DEJES DE LLAMAR ASÍ A LOS NIÑOS, JOSÉ!'],
    ['He visto El Silencio de los Corderos y no se oye ni uno en toda la película. Buen trabajo'],
    [
        'Estoy flipando. Han detenido al mecánico de mi barrio por tráfico de drogas. Soy cliente suyo de toda la vida y nunca me había dicho que fuera mecánico'
    ],
    [
        'Me he tirado un pedo en el autobús y se han girado 4 personas. Ha sido como participar en La Voz'
    ],
    [
        'Papá',
        'Dime, hijo',
        '¿Qué es dudar?',
        'A ver, tú a quién quieres más ¿a papá o a mamá?',
        'A mamá',
        'Pues que te lo explique ella, gilipollas'
    ],
    [
        'Pero ¿qué le ha hecho a su suegra?',
        'Lo que me dijo, doctor',
        'Le dije dar dos tranquilizantes, DAR-DOS, separado'
    ],
    [
        'Llevo un mes sin sexo por tener la muñeca rota',
        '¿La izquierda o la derecha?',
        'La hinchable'
    ],
    [
        'Doctor, ¿qué me recomienda contra el dolor menstrual?',
        'Sexo anal',
        'Usted ha hablado con mi marido ¿verdad?',
        '¿Qué Paco ni que Paco?'
    ],
    ['¿Cuánto tiempo hace que no follas?', '¿Que hora es?', 'Las 11:46', 'Nueve años'],
    [
        'Señor, no queda viagra de 50mg. Le vamos a dar de 100mg para que la parta en dos',
        '¡¿A mi esposa?!',
        '¡No, coño! ¡La pastilla!'
    ],
    [
        'Vengo a matricularme a Ciencias Políticas',
        'Muy bien. Coja este sobre...',
        '¡Ostias! ¿Ya?',
        'Es la matricula inútil'
    ],
    ['Mi mujer siempre anda por casa como vino al mundo', '¿Desnuda?', 'No, gritando'],
    [
        'Fui a poner una denuncia. Primero me dan un boli que no escribe y luego uno que si. Que cabrones. El viejo truco boli malo boli bueno'
    ],
    [
        'Cómo conquistar a un hombre en diez pasos:',
        'Desnúdate, da diez pasos hacia donde él esté y chúpasela como si no hubiera un mañana'
    ],
    [
        'Y tú ¿a qué te dedicas?',
        'Soy bromista',
        '¿Te dedicas al humor?',
        'No, produzco bromo elemental a partir de bromuro potásico',
        'Ah, perdón',
        'Es broma'
    ],
    ['¿Te has cagado en el ascensor?', 'He escuchado "Planta uno" y me he liado'],
    [
        'Tranquilo Santi, solo es un pequeño corte con el bisturí, no estés nervioso',
        'Oiga doctor, yo me llamo Jorge',
        'Ya lo sé, Santi soy yo'
    ],
    [
        'Paco, ¿te estás follando a la vecina del 5º?',
        'Es la del 2º',
        '¿Que más da?',
        'Pues que no te fijas en los detalles Puri, y esas cosas duelen'
    ],
    ['Lo que en realidad buscan todos los hombres es una felación estable'],
    [
        'Tengo que hacer una redacción de diez páginas sobre mi vida sexual',
        '¿Como lo llevas?',
        'Mal... Voy a tener que meter mucha paja'
    ],
    ['Soy super saludable', '¿Comes sano y haces ejercicio?', 'No, mucha gente me saluda'],
    [
        '¿Cómo prepara el brocoli?',
        'Lo tiro, y preparo un par de huevos fritos con chorizo',
        '¡Contratado!'
    ],
    ['Eres un poco corto', '¿Un poco qué? Cambio'],
    [
        '¡Ayer casi hago un trío! Se acercó una chica y me dijo: "Yo y mi amiga queremos follar contigo"',
        '¿Y tú que dijiste?',
        'Será "Mi amiga y yo"'
    ],
    [
        '¿Qué haces para estar tan delgada?',
        'Follar mucho',
        'Pues tu marido está bien gordo',
        'Dicen que va a llover'
    ],
    [
        '"Si después de besarla no tienes que acomodarte el rabo, no es la indicada"<br /><br />José de Espronceda'
    ],
    [
        'Mi mayor rebeldía es colocar la compra en la cinta de la caja de tal forma que cuando me preguntan hasta dónde pueda responder: "Hasta los huevos"'
    ],
    [
        'Me encanta su reloj espía, señor Bond',
        'En su pantalla puedo ver usted no lleva bragas',
        '¡No es cierto! Si que llevo',
        'Es que va una hora adelantado'
    ],
    [
        'Control de alcoholemia. Sople',
        'Eso es una polla',
        'Ya. Pero así no dará positivo',
        'Pues también es verdad'
    ],
    [
        'He probado lo de usar el chocolate como sustitutivo del sexo, pero los Toblerones se me parten al metermelos por el culo'
    ],
    ['Que metal mas raro', 'Es estaño', '¿A que si?'],
    ['Explota una fábrica de pelucas en Murcia. La policia está peinando la zona'],
    ['Muere un hombre al estrellarse con un espejo. Se veía venir'],
    ['Una mujer cae al vacío mientras tendía la ropa. Se le fue la pinza'],
    ['Encontrar a tu media naranja es lo de menos. Lo importante es encontrar quien te la pele'],
    ['Tu follas poco, ¿no?', 'Ojalá'],
    [
        'Ayer me enganché con un libro bueno, pero bueno BUENO, de los que marcan. Absorto estuve hasta las 4 de la madrugada, ahí, coloreando'
    ],
    [
        'Yo a veces le devuelvo a mi madre tuppers de mi suegra, para que vea que tiene competencia y no se relaje'
    ],
    ['Camarero, un risotto', 'JOJOJO', 'Muchas gracias'],
    [
        'Mañana tengo un examen de próstata y no he estudiado nada',
        'Échale un ojo al índice aunque sea, es lo que suele entrar'
    ],
    ['Tengo menos ganas de currar que el que le puso el nombre a "Panrico"'],
    ['Te quiero mucho Soplaculo', '¡Abuelaaaa! ¡Me llamo Silvano!'],
    ['Lo más jodido de trabajar en equipo es convencer al resto de que no tienen ni puta idea'],
    [
        'Mi novia ya no quiere hablar conmigo ni por teléfono',
        '¿Y te cuelga?',
        'Hasta la rodilla, pero no es momento de presumir'
    ],
    [
        'Gracias a la bascula en el baño puedo saber cuanto pesa lo que cago',
        'Claro, te pesas antes y despues',
        '¡Ah! De esa forma es mejor'
    ],
    [
        '¿Cómo se dice, fuera o fuese?',
        'Da igual',
        'Pues ponte bien el bañador que tienes un huevo fuese'
    ],
    [
        'Le he implantado un diente postizo',
        '¿Me lo puedo cepillar, doctor?',
        'Por supuesto. Salgo a las ocho'
    ],
    ['Cago cada mañana a las 8, doctor', '¿Y cual es el problema?', 'Que me despierto a las 9'],
    ['Papa, papa, tengo paperas', 'Pues cuando tengas pa putas me avisas'],
    ['¿Que son tres burros debajo del mar? Un triburrón'],
    [
        '¡Ayúdeme! He perdido a mi hija',
        '¿Como se llama?',
        'Esperanza',
        '¡Eso es imposible! La esperanza es lo último que se pierde'
    ],
    ['Soy rockero', '¿Y tienes una banda?', 'No, junto piedras y las vendo'],
    ['Que boca mas grande tienes abuelita', '¡Cinco pollas me caben!'],
    [
        '¿Tu no eras alérgico a los frutos secos?',
        'Si, ¿porque?',
        'Porque la tia con la que te liaste anoche tenia nuez',
        '¡Ahora entiendo porque me pica el culo!'
    ],
    ["Una cereza se mira al espejo y se pregunta '¿Seré esa?'"],
    [
        "Me dice el otro dia un tipo por la calle '¡Quiero un hijo tuyo!' Le traje al mayor, que es el que come más"
    ],
    [
        '¿Sabe cómo se dice memoria en inglés?',
        'Por supuesto. Memory',
        '¿Podria usarlo en una frase?',
        '¡Claro! Ayer caí por la ventana y memory'
    ],
    [
        '¿Qué es un tomate vestido con capa y antifaz?',
        'Ni idea',
        'El capitán tomate. Ahora, ¿qué es un cocodrilo vestido con capa y antifaz?',
        'El capitán cocodrilo',
        'No, es un cocodrilo disfrazado de capitán tomate'
    ],
    [
        'Cariño, cuéntale a mi madre lo que te hice ayer',
        '¿Lo de la espectacular mamada sin manos?',
        '¡No! El arroz con leche, gilipollas'
    ],
    [
        'Dice que sabe de historia del arte',
        'Soy un experto',
        '¿Qué opina del Renacimiento?',
        'Que es imposible. Si te mueres, te mueres'
    ],
    ['Estas obsesionado con las especias', 'No digas tonterías, Romero', 'Ramiro', 'Eso'],
    [
        'No sé si es buena idea hacerlo en la cama de tus padres',
        '¿Por qué?',
        'Porque los vamos a despertar'
    ],
    ['Empezemos con la entrevista. ¿Tiene usted experiencia?', 'Por supuesto. Con esta ya van 20'],
    [
        '¿Sabe cómo se dice fiesta en inglés?',
        'Por supuesto. Party',
        '¿Podria usarlo en una frase?',
        '¡Claro! Ayer me party los dientes con la bicicleta'
    ],
    [
        'Mama, ¿porqué me llamo Claudio?',
        'Por qué yo me llamo Claudia',
        'Pues menos mal que no te llamas Ana'
    ],
    ['¿Tienes WiFi?', 'Si', 'Y ¿cuál es la clave?', 'Tener dinero y pagarlo'],
    ['Papá, ¿qué es depilar?', 'No sé, hace tiempo que no la veo'],
    [
        'Madre mía, como tienes las vacas en el establo, mezcladas de cualquier manera',
        'Sí, están un poco desordeñadas'
    ],
    ['Bienvenidos al curso de relajación', '¡Empezad ya, hostias!'],
    [
        '¿Hay algún doctor en la sala?',
        '¡Presente! Especializado en matemáticas',
        '¡Rápido doctor, mi amigo se muere!',
        'Entonces uno menos'
    ],
    ['¿Cómo se dice Un zapato en inglés?', 'A shoe', 'Salud Jajaja'],
    ['¿Bailas, guapo?', 'No', 'Perfecto. Sujétame el cubata que esto es un temazo'],
    [
        'La rencarnación tiene que existir, porque ciertos niveles de retraso no se acumulan en una sola vida ni de coña'
    ],
    [
        'Mi mujer insiste en que use la escobilla del vater, pero voy a volver al papel, tengo el culo en carne viva'
    ],
    [
        'Después del divorcio hemos dividido la casa en dos partes',
        '¿Y qué parte te ha tocado?',
        'La de fuera'
    ],
    ['Dice mamá que estas obsesionado con el móvil', 'Cállate Alfonsiete'],
    [
        'Cuando alguien me dice un cumplido, me apetece follarmelo. ¿Que cree que tengo, doctor?',
        'Creo que tiene usted unos ojos preciosos'
    ],
    [
        'Hijo, la cigüeña te va a traer un hermanito',
        '¿La cigüeña? Joder papá, si es que te follas todo lo que pillas'
    ],
    [
        'Cariño, te detienes mucho en los detalles y así pierdes la visión de conjunto',
        'Pero es que el niño es negro',
        'Y dale...'
    ],
    [
        'Las mujeres que os quejáis de los dolores del parto deberíais probar lo que es ser hombre y tener 37 de fiebre'
    ],
    [
        'Mi esposa se ha caido al río y la estan buscando río arriba',
        'La corriente va para abajo',
        'Es que la maldita siempre lleva la contraria'
    ],
    [
        '¿Nivel de ortografia?',
        'Excelente',
        'Mencione dos palabras con tilde',
        'Matilde y Clotilde',
        '¡Contratado!'
    ],
    ['Si la raja del culo fuera horizontal daríamos palmadas al subir las escaleras'],
    ['¿Cómo te llamas?', 'No soy ni el ayer ni el mañana', '¿Qué coño dices?', 'Soy Eloy'],
    ['No eres tú, es tu ortografía', 'Entonces, ¿ya no nos vamos haber?'],
    ['No se puede discutir con un DJ. Siempre te cambian de tema'],
    ['Menuda mierda de fiesta. En cuanto encuentre las bragas me voy'],
    ['Cariño, ¿a ti cómo te gustan los huevos?', '¿A mi? Que me reboten en la barbilla'],
    [
        'Abra las piernas',
        'Es que me cuesta vencer mi timidez, doctor',
        'Pues con las piernas cerradas no puedo sacar al niño'
    ],
    [
        'Papá, ¿que es ser bipolar?',
        'Es cambiar de la noche al día sin razón alguna',
        '¿Cómo el tio Jorge?',
        'No, el tio Jorge es Drag Queen'
    ],
    [
        'Si crees que estás mal recuerda que puede haber alguien conociendo a tu ex y pensando que ha triunfado'
    ],
    [
        'No sé porqué dices que soy infantil',
        'Porque me tienes desnuda en la cama y me estás coloreando el tatuaje',
        'Calla, que me salgo'
    ],
    ['Mi hijo está practicando natación', '¿Y qué tal le va?', 'Nada mal'],
    [
        '¿Cuáles son los requisitos para la extracción de sangre, doctor?',
        'Solamente ayuno',
        '¿Y cuál es?'
    ],
    [
        '¿Le corto la pizza en cuatro trozos o en ocho, señora?',
        'En cuatro, no creo que me vaya a comer los ocho',
        'Entiendo'
    ],
    ['Me siento solo', '¡Yo también! Sentarse es fácil'],
    ['Entonces, ¿vendes el piso?', 'Alquilo', '¿Cuánto pesa?'],
    ['El mes pasado contraí matrimonio', 'Contraje', 'Claro, tenía que ser formal'],
    ['Hola, ¿es usted Clara?', 'Claro', 'Disculpe, señor'],
    ['Hazte para allá que no cabo', 'Se dice "quepo"', 'Da igual, al fin y al quepo me entendiste'],
    ['Es usted asmática', '¿Es grave?', 'No, señora, es esdrújula'],
    ['Mi novia me ha pedido tiempo y distancia. Creo que quiere calcular la velocidad'],
    ['Quisiera comprar los libros sobre la fatiga y el cansancio', 'Lo siento, están agotados'],
    [
        '¿Sabes qué pasaría si la tierra fuera un cubo en lugar de una esfera?',
        'Ni idea',
        'Que todos seríamos cubanos'
    ],
    [
        '¿Sabes en qué se convierte un país cuando se prohiben los tacos?',
        'Ni idea',
        'En un país destacado'
    ],
    [
        '¿Sabes qué pasa cuando se va la luz en una escuela privada?',
        'Ni idea',
        'Que no se ve un pijo'
    ],
    ['¿Sabes qué es un pelo en una cama?', 'Ni idea', 'El bello durmiente'],
    [
        '¿Sabes qué le dice una impresora a otra cuando imprime algo increible?',
        'Ni idea',
        'Me has impresionado'
    ],
    ['¿Sabes en qué se convierte un pájaro cuando lo aplastas?', 'Ni idea', 'En una avellana'],
    ['Oye ¿te das cuenta de que solo piensas en comer?', '¿A qué te refieres croquetamente?'],
    [
        'Vivimos en una sociedad demasiado competitiva. Lo importante es ser feliz',
        '¿Tú eres feliz?',
        'Sí',
        'Pues yo más'
    ],
    [
        '¿Qué vas a hacer en San Valentín?',
        'Ir a un restaurante romántico. Con los niños, a dar por culo a los enamorados'
    ],
    [
        'Si te duele la barriga, té con limón',
        'Si te duele la garganta, té con miel',
        'Si te duele el culo, te con vencieron'
    ],
    ['A ver si me muero un día de estos', 'Tienes que ser más optimista', 'A ver si me muero hoy'],
    ['Los resultados de su examen visual son muy malos', 'Puedo verlos', 'No creo'],
    ['"Si no te gusta mi entrecejo, no esperes ver mi conejo"<br /><br />Frida Kahlo'],
    ['Yo me masturbo desnudo, y a quién no le guste, que se vaya a otro Mercadona'],
    ['Me sorprende que hayamos cabido todos en la foto, Asterix', 'Es que la sacó Panoramix'],
    [
        'Me dijiste que ibas a ser amable con mi novio, papá',
        'Bueno. ¡A VER SI EN ESTA CASA NO SE VA A PODER LIMPIAR UNA ESCOPETA DURANTE LA CENA!'
    ],
    [
        'Me compré unos preservativos ultrasensibles',
        '¿Qué tal son?',
        'Ahí están, en el cajón, llorando porque no los uso'
    ],
    ['Hijo, creo que va siendo hora que hablemos de sexo', 'Claro papá. ¿Qué quieres saber?'],
    [
        'He ahorrado 1000€ para irme a Londres',
        'Allí sólo aceptan libras',
        'Entonces no podré ir. Yo soy Géminis'
    ],
    ['Cariño, estás obsesionado con el sexo anal', '¡Ojete con lo que dices!'],
    [
        '¿El club de los indecisos?',
        'Tercera planta. Por cualquiera de los dos ascensores',
        'No me haga esto, por favor'
    ],
    ['Vengo del homeópata. Me ha quitado lo que tenía', '¿Qué tenías?', '150€'],
    ['Me gusta estar solo', 'Cómo te entiendo', 'Pero aquí sigues'],
    [
        '¿Sabes que tanto en sueco como en finlandés, calzoncillos se dice igual? ',
        '¿Ah si? ¿Cómo?',
        'Escondinabo'
    ],
    ['¿Sabes porqué en el mar hay tanta espuma?', '¿Por qué?', 'Porque la Sirenita es Ariel'],
    ['Los médicos aconsejan abanicarse con un serrucho porque el aire de la sierra es mas fresco'],
    ['Los astronautas han reconocido que nunca van a tener novia. Claro, necesitan su espacio'],
    [
        'El gobierno ha aconsejado abrir la nevera muy despacio y sin hacer ruido',
        '¿Por qué?',
        'Porque que el zumo está concentrado'
    ],
    [
        'Me ha parado un policia y me ha dicho "papeles". Yo le he dicho "tijeras", con lo que he ganado y me he ido. Ahora lleva 45 minutos detrás mio y creo que quiere la revancha'
    ],
    ['Cariño, ya te encontré el punto G', '¿Ah si?', 'Si. Lo tenía tu hermana'],
    [
        '¿Por que lloras cariño?',
        'Porque me han quitado la nocilla de los niños',
        'Querrás decir la tutela'
    ],
    ['Paco, la lavadora se ha calcificado', '¿Para la final?'],
    ['Paco, la cisterna pierde', 'Pues dile que lo importante es participar'],
    [
        'Confundo los números con los colores, doctor',
        'Pues esto es un buen marrón',
        '¡Por el culo te la hinco!'
    ],
    [
        '¿Los bomberos? ¡Mi casa se está quemando! ¿Vienen ustedes o voy yo para allá?',
        '¡¿Pero como a venir usted!?',
        'Es que vivo en una autocaravana'
    ],
    ['Si tengo una gallina y la meto en una sauna, ¿se puede decir que me suda la polla?'],
    ['¿Alguna vez has entrado en un laberinto?', 'No', 'Pues no sabes lo que te pierdes'],
    [
        'Sara, ¿tu cómo llevas que tu novio tenga la polla tan gorda?',
        'Por un lado bien, pero por el otro...'
    ],
    ['¿Capital de España?', 'La mayor parte en Suiza'],
    ['¿De qué signo es tu mujer?', 'Debe ser de  exclamación, porque se pasa el día gritándome...'],
    ['¿Me pone un zumo de piña?', '¿Natural?', 'De Pontevedra, pero no creo que eso importe'],
    [
        'Camarero, ponga una de calamares a la rumana',
        'Perdón señor, será a la romana',
        'Irina, cariño, dile al gilipollas éste de dónde eres'
    ],
    [
        '¿La aceptas como esposa en la salud, en la enfermedad, en la riqueza y en la pobreza hasta que la muerte os separe?',
        'Si, no, si, no, no'
    ],
    ['Siempre que mis padres me decían "estudia" yo entendía "es tu día", y salía de copas'],
    ['Tengo 3 llamadas perdidas de mi oftalmólogo. El de ver me llama'],
    ['Shhhhh', 'Shhhhht', 'Shhhhh', 'Shhhhht', '(Discusión entre una cobra y una bibliotecaria.)'],
    [
        '¿Es grave Doctor?',
        '¿Ha oído ese refrán que dice que lo que no mata engorda?',
        'Sí',
        'Pues ha debido comer alguna cosa que no engorda'
    ],
    [
        'Hola, ¿es aquí el club de imbéciles?',
        'Sí, pero... ¿qué hace con todo ese estiércol?',
        'Vengo a abonarme',
        'Dios santo, pase, será el líder'
    ],
    [
        'Dame una rebanadita de pastel, pero chiquitita, que estoy a dieta',
        '¿Así, como las otras siete?',
        'Sí, porfa'
    ],
    [
        'No te das cuenta pero ¡TE TENGO EN EL BOTE!',
        '¡Deja de decir gilipolleces y REMA! ¡Subnormal!'
    ],
    ['Yo soy ateo', 'Yo anolo, ucho gusto', 'El gusto es ío'],
    ['Perdone, ¿es este el ascensor de subida?', 'No, he montado en otros mejores'],
    ['Perdone, pero vamos a proceder al derribo del edificio contiguo', '¿Conmiguo?'],
    [
        '¿Te gustan más los Beatles o los Stones?',
        'A mí me gustan los Doors',
        'Tienes que elegir uno'
    ],
    [
        'Doctor, estoy fatal... veo elefantes azules por todos los rincones',
        '¿Ya ha visto usted a algún psiquiatra?',
        'No, de momento sólo elefantes'
    ],
    [
        'Hola, quería estos zapatos',
        'Dígame su número',
        'Oh! 651862...',
        'No! Número de zapatos!',
        'Ah! Quiero 2',
        'Por favor, atiende tú a la rubia'
    ],
    [
        'Ha dicho el doctor que lo mejor para curarme el dolor de garganta es un striptease',
        'Un Strepsils',
        'Joder, Paqui, le quitas la ilusión a cualquiera...'
    ],
    [
        'Houston, aquí Apolo, ¿me recibe?',
        '¿Apolo qué?',
        '¡Coño, el Apolo 13!',
        'Agárramela que me crece jajaja',
        'No, si al final nos va a pasar algo'
    ],
    [
        '¡Qué maravilla el cuadro que tienes colgado en esa pared!',
        'Es un Murillo',
        'Pues en ese murillo'
    ],
    [
        'Papá, ¿qué es la droga?',
        'Algo que te hace la vida imposible y una vez que empiezas no puedes dejarlo',
        '¿Como mamá?',
        '¡Ven que te abrace, hijo!'
    ],
    [
        'Cari, baja al súper y compra tampones, que se me han acabado',
        '¿Con o sin alas?',
        'Ya bajo yo'
    ],
    [
        '¿Qué tal lo de tu adicción al sexo?',
        'Te hice caso, me puse en manos de profesionales',
        'Claro, hay psicólogos muy buenos',
        'Creo que no me has entendido'
    ],
    [
        'Carmen, no te quiero presionar pero necesito una respuesta AHORA, ¿él o yo?',
        'Él',
        '¡Te doy 2 días más!'
    ],
    ['Un placer venir a su mutua', 'Es mutuo', 'Un placer venir a su mutuo'],
    [
        'Papá, ¿me ayudas con el examen de filosofia?',
        'Claro',
        '¿De dónde venimos?',
        'Del Carrefú',
        '¿Es muy caro un profesor particular?'
    ],
    ['¿Te gusta la música clásica?', 'Me encanta', '¿De Verdi?', '¡Te lo juri!'],
    ['¿Cuántas horas dura tu jornada laboral?', 'Ocho', '¿Computadas?', 'Con putadas, onze'],
    [
        'Oiga, ¿el otorrino va por número?',
        'Van nombrando',
        'Qué gran actor, pero no me cambie de tema'
    ],
    ['¡Qué gordas y feas son tus hijas!', '¡¿Cómo osas?!', 'Exacto'],
    [
        'Tengo unos informes que dicen que puede volver un grupo terrorista de hace años',
        '¿Los GRAPO?',
        'No, déjalos así, ya lo hará la secretaria'
    ],
    [
        'Papá, ¿qué es el bullying?',
        'Era el restaurante de Ferran Adrià',
        'Pues en el cole hay carteles de "NO AL BULLYING"',
        'Pues igual por eso ha cerrado'
    ],
    [
        'Mi Paco aprendió a conducir autobuses por sí solo',
        '¿Ah! Es autodidacta?',
        'No, no, es autobusero'
    ],
    [
        '¿Se quedará a dormir?',
        'Sí',
        'Quizá debería saber que la casa está encantada',
        'Ah, pues dígale que a mí también me hace ilusión quedarme'
    ],
    [
        '¡Qué bien nadas! ¿Puedes imitar a una sirena?',
        '¡PIRUBÍ, PIRUBÍ, NINO, NINO, NINO, PIRUBÍ, PIRUBÍ!',
        'Menos mal que eres guapa'
    ],
    [
        'Mi sargento, ya están colocados los pivotes para el control',
        'Conos',
        'Mo sorgonto, yo ostón colocodos los povotos poro ol control'
    ],
    [
        'Mi papá hizo la escuela primaria y la secundaria',
        '¿Y la universidad?',
        'No, ahí contrataron a otro albañil'
    ],
    [
        'Mi mujer quiso salir a la cubierta del yate y se golpeó con la ventana',
        'Escotilla',
        'Muchísimo y además torpe que te cagas'
    ],
    [
        'Tú traes las birras, tú ginebra, tú Fanta, tú algo de papeo...',
        '¿Y yo?',
        'Tú ron',
        '¿De Suchard?',
        'Mejor no vengas'
    ],
    ['Dime algo con amor', 'Amortiguador']
];

const jokes = source.map((text, index) => ({
    id: index,
    text
}));

const parseSearchText = text =>
    text
        .toLowerCase()
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');

const count = () => jokes.length;

const getAll = filter => {
    const parsedFilter = parseSearchText(filter);
    return jokes.filter(joke =>
        joke.text.find(paragraph => parseSearchText(paragraph).indexOf(parsedFilter) > -1)
    );
};

const getByIndex = index => jokes[index];

module.exports = {
    count,
    getByIndex,
    getAll
};
