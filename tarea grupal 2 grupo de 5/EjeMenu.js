const read = require('prompt-sync')();
const write = console.log

function menu(){
    write("       Menú Ejercicios      ")
    write("1) Ejercicio No. 1. ")
    write("2) Ejercicio No. 2. ")
    write("3) Ejercicio No. 3. ")
    write("4) Ejercicio No. 4. ")
    write("5) Ejercicio No. 5. ")
    write("6) Ejercicio No. 6. ")
    write("7) Ejercicio No. 7. ")
    write("8) Ejercicio No. 8. ")
    write("9) Ejercicio No. 9. ")
    write("10) Ejercicio No. 10.")
    write("11) Ejercicio No. 11.")
    write("12) Ejercicio No. 12.")
    write("13) Ejercicio No. 13.")
    write("14) Ejercicio No. 14.")
    write("15) Ejercicio No. 15.")
    write("16) Ejercicio No. 16.")
    write("17) Ejercicio No. 17.")
    write("18) Ejercicio No. 18.")
    write("19) Ejercicio No. 19.")
    write("20) Ejercicio No. 20.")
    write("21) Ejercicio No. 21.")
    write("22) Ejercicio No. 22.")
    write("23) Ejercicio No. 23.")
    write("24) Ejercicio No. 24.")
    write("                     25. Salir")
    let opcion = read("Elija opción [1…24]: ")
    switch(opcion) {
        case '1':
            //1. Algoritmo que transforme de grados Celsius a Fahrenheit
            // bosquejo:
            //Ent: celsius=0(leer), fahrenheit=0(calcular)
            //Pro: fahrenheit = (celsius * 9/5) + 32
            //Sal: Escribir (`Ingresó ${celsius} grados Celsius que transformado son ${fahrenheit} grados Fahrenheit.`)
            let celsius=0, fahrenheit=0
            celsius = parseFloat(read("Ingrese la temperatura en grados Celsius:"))
            fahrenheit = (celsius * 9/5) + 32
            write(`Ingresó ${celsius} grados Celsius que transformado son ${fahrenheit} grados Fahrenheit.`)
            menu()
            break
        case '2':
            // 2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del 
            // número.
            // Bosquejo
            // Entrada: numero=0(ingresar), doble=0(calcular), triple=0(calcular)
            // Proceso: doble = numero * 2 ; triple = numero * 3
            // Salida: doble, triple
            let numero=0, doble=0, triple=0
            numero=parseFloat(read("Ingrese un numero: "))
            doble = numero * 2
            triple = numero * 3
            write(`El doble de ${numero} es ${doble} y el triple es ${triple}.`)
            menu()
            break
        case '3':
            //3.Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
            //ANALISIS DE REQUERIMIENTO
            //ENT: 4 variables, calcular , suma & resta
            //PRO: ingrese el primer valor(leer)""Ingrese el segundo valor(leer)""Ingrese el tercer valor(leer)""Ingrese el cuarto valor(leer)
            //SAL: mostrar el resultado de la suma y media 
            let numero1 = parseFloat(read("ingrese el primer valor: "));
            let numero2 = parseFloat(read("Ingrese el segundo valor: "));
            let numero3 = parseFloat(read("Ingrese el tercer valor: "));
            let numero4 = parseFloat(read("Ingrese el cuarto valor: "));
            let producto = numero1 * numero2 * numero3 * numero4;
            let suma = numero1 + numero2 + numero3 + numero4;
            let media = suma / 4;
            write("El producto es:" + producto ); 
            write ("El resultado de la suma es " + suma) ;
            write("La media es " + media);
            menu()
            break
        case '4':
            //4. Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)
            //bosquejo
            //ent: libras=0(leer), kilogramos=0(calcular), gramos=0(calcular)
            //Pro:  kilogramos=libras*0.453593
            //      gramos=libras*453.592
            //Sal: Mostrar kilogramos y gramos
            let libras=0, kilogramos=0, gramos=0
            libras=parseFloat(read("Ingrese su peso en libras: "))
            kilogramos=libras*0.453593
            gramos=libras*453.592
            write("Su peso ingresado es de",libras, "libras, su peso en kilogramos es de",kilogramos,"kg y su peso en gramos es de",gramos,"gr.")
            menu()
            break
        case '5': 
            // 5. Diseñar un algoritmo que resuelva la siguiente expresión matemática:
            // x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
            // Bosquejo
            // Entrada: a=0(ingresar), b=0(ingresar), c=0(ingresar), x=(calcular) 
            // Proceso: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
            // Salida: x
            let a=0, b=0, c=0, x=0
            a  = parseFloat(read("Ingrese un valor para a: "))
            b  = parseFloat(read("Ingrese un valor para b: "))
            c  = parseFloat(read("Ingrese un valor para c: "))
            x = (Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2) + Math.sqrt(Math.pow(a, 3)) / (a * b + c)
            write(`El resultado de la expresión es: ${x.toFixed(7)}`)
            menu()
            break
        case '6': 
            //6.Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas,
            //estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. 
            //El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir
            //analisis de requerimiento
            //ENT  tarifaNormal, tarifaExtra , sueldoNormal, horasExtra , seguroSocial, netoRecibir
            //PRO  Sueldo por jornada normal + sueldoNormal,"" Horas extra trabajadas: " + horasExtra,"" Sueldo por horas extra:+ sueldoExtra,"" Ingreso total + ingresoTotal
            //SAL mostar el total de horas trabajada
            let horasTrabajadas=0, tarifaNormal =0, tarifaExtra =0, sueldoNormal =0, horasExtra = 0, sueldoExtra = 0, seguroSocial = 0, netoRecibir = 0, ingresoTotal=0
            horasTrabajadas=parseInt(read("Ingrese sus horas trabajadas: "))
            tarifaNormal = 5;
            tarifaExtra = 10;   
            sueldoNormal = 40 * tarifaNormal;  
            if (horasTrabajadas > 40) {      
                horasExtra = horasTrabajadas - 40;       
                sueldoExtra = horasExtra * tarifaExtra;    
            }    
            ingresoTotal = sueldoNormal + sueldoExtra;
            seguroSocial = 0.10 * ingresoTotal;
            netoRecibir = ingresoTotal - seguroSocial;
            write("Sueldo por jornada normal: $" + sueldoNormal);
            write("Horas extra trabajadas: " + horasExtra);
            write("Sueldo por horas extra: $" + sueldoExtra);
            write("Ingreso total: $" + ingresoTotal);
            write("Seguro Social (IESS): $" + seguroSocial);
            write("Neto a recibir: $" + netoRecibir);
            menu()
            break
        case '7':
            //7. Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar
            //bosquejo:
            //Ent: num1=0(leer), num2=0(leer)
            //Pro: Si (num1 % 2 === 0 && num2 % 2 !== 0) 
            //         Si (num1 > num2) 
            //             write(`El número mayor es el ${num1}`) 
            //         Sino
            //             Escribir(`El número mayor es el ${num2}`)   
            //         finFi
            //     Sino
            //         Escribir(`El número ${num1} y el numero ${num2} no cumplen con lo solicitado.`)
            //      finFi
            //Sal:Mostrar mensaje
            let num1=0, num2=0
            num1 = parseInt(read("Ingrese un número: "))
            num2 = parseInt(read("Ingrese el segundo número: "))
            if (num1 % 2 === 0 && num2 % 2 !== 0) {
                if (num1 > num2) {
                    write(`El número mayor es el ${num1}`) 
                } else {
                    write(`El número mayor es el ${num2}`)
                }
            } else {
                write(`El número ${num1} y el numero ${num2} no cumplen con lo solicitado.`)
            }
            menu()
            break
        case '8':
            //8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
            //y si no presentar solo el carácter.
            //Bosquejo:
            //Ent: caracter=""(leer)
            //Pro: si ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
            //        Escribir (`El carácter "${caracter}" es una letra.`)
            //     sino
            //        Escribir (`El carácter "${caracter}" es un signo de puntuación.`)
            //     finSi
            //Sal: Mostrar mensaje.
            let caracter=""
            caracter=read("Ingrese un carácar: ")
            if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
                write(`El carácter "${caracter}" es una letra.`)
            } else {
                write(`El carácter "${caracter}" es un signo de puntuación.`)
            }
            menu()
            break
        case '9':
            // 9. Determinar cuánto se debe pagar por x cantidad de colas, considerando que si son menos
            // de 12 colas, el costo por unidad es de $0,25 caso contrario el precio será 10% menos.
            // Bosquejo
            // Entrada: cantidad=0.0(ingresar), precioUnidad=0.25, costoTotal=0.0(calcular), precioDescuento=0.0(calcular)
            // Proceso: Si cantidad < 12 Entonces
            // costoTotal = cantidad * precioUnidad;
            // SiNo
            //     precioDescuento = precioUnidad * 0.9;
            //     costoTotal = cantidad * precioDescuento;
            // Fin Si
            // Salida: costoTotal
            const precioUnidad = 0.25;
            let costoTotal;
            let cantidad = parseFloat(read("Ingrese la cantidad de colas: "));
            if (cantidad < 12) {
                costoTotal = cantidad * precioUnidad;
            } else {
                const precioConDescuento = precioUnidad * 0.9;
                costoTotal = cantidad * precioConDescuento;
            }
            console.log(`El costo total por ${cantidad} colas es: $${costoTotal.toFixed(2)}.`);
            menu()
            break
        case '10':
            //10.El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, 
            //se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor 
            //de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
            //ANALISIS de requerimiento
            //ENT descuento, nuevo precio, impuesto, precio final
            //PRO nuevoPrecio = precioOriginal - descuento,"" impuesto = nuevoPrecio * 0.15
            //SAL MUESTRA el calculo delprecio final
            let precioOriginal=parseFloat(read("Ingrese el precio Original: "))
            let descuento=0;
            let nuevoPrecio=0;
            let impuesto=0;
            let precioFinal=0;
            if (precioOriginal > 200) {
                descuento = precioOriginal * 0.10;
            } else {
                descuento = 10;
            }
            nuevoPrecio = precioOriginal - descuento;
            impuesto = nuevoPrecio * 0.15;
            precioFinal = nuevoPrecio + impuesto;
            console.log("Precio Original: $" + precioOriginal);
            console.log("Descuento Aplicado: $" + descuento);
            console.log("Nuevo Precio: $" + nuevoPrecio);
            console.log("Precio Final con Impuesto: $" + precioFinal);
            menu()
            break
        case '12':
            // 12. Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.
            //  BOSQUEJO  //
            // ENTRADA: numero=0
            // PROCESO: numero == 0 || numero > 12
            // SALIDA: El nombre del mes número es incorrecto, intentalo de nuevo. O El nombre del mes número " + numero + " es: " + MesesNumeros[numero]
            // LENGUAJE JAVASCRIPT //
            let MesesNumeros = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
            let numerro = parseInt(read("Ingrese el número del mes (0-11):"))
            if (numerro >= 0 && numerro <= 11) {
                write("El nombre del mes número " + numerro + " es: " + MesesNumeros[numerro])  
            }
            menu()
            break
        case '13':
            //13.Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
            //ANALISIS DE REQUERIMIENTO
            //ENT 5 nombres
            //PRO imprimirNombresAlReves (leer)""nombres = "Carlos", "Laura", "Andrés", "Sofía", "Miguel(leer)
            //SAL muestra los nombres de atras hacia adelante
            function imprimirNombresAlReves(nombres, i) {
                if (i >= 0) {
                    console.log(nombres[i]);
                    imprimirNombresAlReves(nombres, i - 1)
                }
            }
            let nombres = []
            nombres.push(read("Ingrese el primer nombre: "))
            nombres.push(read("Ingrese el segundo nombre: "))
            nombres.push(read("Ingrese el tercer nombre: "))
            nombres.push(read("Ingrese el cuarto nombre: "))
            nombres.push(read("Ingrese el quinto nombre: "))
            imprimirNombresAlReves(nombres, nombres.length - 1)
            menu()
            break
        case '14':
            //14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.
            //Bosquejo: 
            //Ent: direccion=""(leer), largo=0(calcular), caracterNoUno=""(calcular), caracterDeEnMedio=""(calcular), caracterFinal=""(calcular)
            //Pro: largo=direccion.length(Indica la longitud o cantidad de elementos en el objeto al que se aplica.)
            //     caracterNoUno = direccion[0];
            //     si (largo % 2 === 0) {
            //         caracterDeEnMedio = direccion[largo / 2 - 1];
            //     sino
            //         caracterDeEnMedio = direccion[Math.floor(largo / 2)];
            //     finSi
            //     caracterFinal = direccion[largo - 1]
            //Sal: Escribir(`El primer caracter es ${caracterNoUno}, el segundo es la ${caracterDeEnMedio} y el ultimo es ${caracterFinal}.`)
            function caracterDireccion() {
                let direccion="", largo=0, caracterNoUno="", caracterDeEnMedio="", caracterFinal=""
                direccion=read("Ingrese su dirección: ")
                largo=direccion.length
                caracterNoUno = direccion[0];
                if (largo % 2 === 0) {
                    caracterDeEnMedio = direccion[largo / 2 - 1];
                } else {
                    caracterDeEnMedio = direccion[Math.floor(largo / 2)];
                }
                caracterFinal = direccion[largo - 1]
                write(`El primer caracter es "${caracterNoUno}", el segundo es la "${caracterDeEnMedio}" y el ultimo es "${caracterFinal}".`)
            }
            caracterDireccion()
            menu()
            break
        case '15':
            // 15. Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
            //  BOSQUEJO  //
            // ENTRADA:
            // PROCESO: arreglo[0] > 0 && arreglo[0] % 2 == 0 , arreglo[4] < 0 && arreglo[0] % 3 == 0
            // SALIDA:  El valores aleatorios "+ arreglo[0] +" Es par positivo. O El valores aleatorios no es par positivo. 
            //          y 
            //          El valores aleatorios "+ arreglo[4] +" es impar negativo. O El valores aleatorios no es impar negativo.
            // LENGUAJE JAVASCRIPT //
            let arreglo = []; 
            arreglo.push
            (Math.floor(Math.random() * 201) - 100);
            arreglo.push(Math.floor(Math.random() * 201) - 100);
            arreglo.push(Math.floor(Math.random() * 201) - 100);
            arreglo.push(Math.floor(Math.random() * 201) - 100);
            arreglo.push(Math.floor(Math.random() * 201) - 100);
            console.log(arreglo);
            if (arreglo[0] > 0 && arreglo[0] % 2 == 0) {
                console.log("El primer valor aleatorio "+ arreglo[0] +" es par positivo.")  
            } else {
                console.log("El primer valor aleatorio no es par positivo.") 
            }if (arreglo[4] < 0 && arreglo[0] % 3 == 0) {
                console.log("El ultimo valor aleatorio "+ arreglo[4] +" es impar negativo.")  
            } else {
                console.log("El ultimo valor aleatorio no es impar negativo.")
            } 
            menu()
            break
        case '16':
            //16.Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
            //ANALISIS DE REQUERIMIENTO
            //ENT nombre=[](leer), i=0(calcular), nom=""(calcular), primerCaracter=""calcular y el ultimoCaracter=""calcular
            //PRO mientras (i < nombre.length) //while:ejecutar en bucle un conjunto de instrucciones hasta que se cumpla una condición determinada.
            //    nom = nombre[i++]
            //    si (nom.length > 0) 
            //        primerCaracter = nom[0];
            //        ultimoCaracter = nom[nombre.length - 1];
            //        Escribir ("Nombre:", nom);
            //        Escribir ("Primer carácter:", primerCaracter);
            //        Escribir ("Último carácter:", ultimoCaracter);
            //    finSi
            //SAL imprime los nombres junto al primer y ultimo caracter 
            let nombre = []
            nombre.push(read("Añade el primer nombre: "))
            nombre.push(read("Añade el segundo nombre: "))
            nombre.push(read("Añade el tercer nombre: "))
            let i = 0
            while (i < nombre.length) {
                let nom = nombre[i++]
                if (nom.length > 0) {
                    let primerCaracter = nom[0];
                    let ultimoCaracter = nom[nombre.length - 1];
                    console.log("Nombre:", nom);
                    console.log("Primer carácter:", primerCaracter);
                    console.log("Último carácter:", ultimoCaracter);
                }
            }
            menu()
            break
        case '17':
            // 17. Dada una cadena presentar el primer carácter siempre y cuando sea un digito.
            //  BOSQUEJO  //
            // ENTRADA: cadena = (cualquier numeros y letras)
            // PROCESO: isNaN(parseInt(primerCaracter))
            // SALIDA:  El primer carácter no es un digito. O El primer carácter es un digito.
            // LENGUAJE JAVASCRIPT //
            let cadena = read("Ingrese una cadena caracteres (puede incluir numeros y letras): ");
            let primerCaracter = cadena.charAt(0);
            if (isNaN(primerCaracter)) {
                console.log("El primer carácter no es un digito.")    
            } else {
                console.log("El primer carácter es un digito.")    
            }
            menu()
            break
        case '18':
            // 18. Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra.
            //  BOSQUEJO  //
            // ENTRADA: cadena = (cualquier numeros y letras)
            // PROCESO: /[a-zA-Z]/.test(ultimoCaracter)// /[a-zA-Z]/: Esto es una expresión regular que especifica un rango de caracteres permitidos. En este caso, [a-zA-Z] significa cualquier letra del alfabeto inglés, tanto minúscula como mayúscula.
            // SALIDA:  El último carácter es una letra. O El último carácter no es una letra.
            // LENGUAJE JAVASCRIPT //
            let cadenas = read("Ingrese una cadena caracteres (puede incluir numeros y letras): ");
            let ultimoCaracter = cadenas.charAt(cadenas.length - 1)
            if (/[a-zA-Z]/.test(ultimoCaracter)) {
                console.log("El último carácter es una letra.")
            } else {
                console.log("El último carácter no es una letra.")
            }
            menu()
            break
        case '19':
            //19.Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.
            //ANALISIS DE RQUERIMIENTO 
            //ENT:  caracter 
            //PRO: vocales =a, e, i, o, u(leer)""El primer carácter es una vocal(leer)""El primer carácter no es una vocal(leer)
            //SAL: imprime el primer caracter 
            let caden = read("Ingrese una cadena: ");
            let vocales = ['a', 'e', 'i', 'o', 'u'];
            let esVocal = vocales.includes(caden[0]) //Utilicé includes() para verificar si el primer carácter ingresado está en la estructura de datos  de vocales.
            if (esVocal) {
                write("El primer carácter es una vocal: ", caden[0]);
            } else {
                write("El primer carácter no es una vocal.");
            }
            menu()
            break
        case '20':
            // 20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracter de puntuación: “;” | “:” | “.” | “,”
            //  BOSQUEJO  //
            // ENTRADA: cadena = (cualquier numeros y letras) longitud=0(calcular)
            // PROCESO: if (longitud % 2 !== 0 && longitud > 0) {
            //          indiceCentral = Math.floor(longitud / 2);
            //          caracterCentral = cadena.charAt(indiceCentral); //La Cadena Java charAt() El método devuelve el carácter en el índice definido de una cadena.
            //          (caracterCentral === ';' || caracterCentral === ':' || caracterCentral === '.' || caracterCentral === ',') {
            // SALIDA:  El carácter de puntuación en el medio es:", caracterCentral O El carácter de en medio no es un carácter de puntuación. O La cadena no tiene un carácter de en medio.
            // LENGUAJE JAVASCRIPT //
            let cade = read("Ingrese una cadena caracteres separada de un caracter de puntuación: ");
            let longitud = cade.length;
            if (longitud % 2 !== 0 && longitud > 0) {
                let indiceCentral = Math.floor(longitud / 2);
                let caracterCentral = cade.charAt(indiceCentral);
                if (caracterCentral === ';' || caracterCentral === ':' || caracterCentral === '.' || caracterCentral === ',') {
                    console.log("El carácter de puntuación en el medio es:", caracterCentral);
                } else {
                    console.log("El carácter de en medio no es un carácter de puntuación.");
                }
            } else {
                console.log("La cadena no tiene un carácter de en medio.");
            }
            menu()
            break
        case '21':
            // 21. Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
            //  BOSQUEJO  //
            // ENTRADA: caracter1 = (cualquier numeros y letras) Y caracter2 = (cualquier numeros y letras)
            // PROCESO: caracter1 === caracter2 Y caracter1 < caracter2
            // SALIDA:  Los caracteres son iguales. O El primer caracter es menor que el segundo. O El primer caracter es mayor que el segundo.
            // LENGUAJE JAVASCRIPT //
            let caracter1 = read("Ingrese el primer caracter: ");
            let caracter2 = read("Ingrese el segundo caracter: ");
            if (caracter1 === caracter2) {
                console.log("Los caracteres son iguales.");
            } else if (caracter1 < caracter2) {
                console.log("El primer caracter es menor que el segundo.");
            } else {
                console.log("El primer caracter es mayor que el segundo.");
            }
            menu()
            break
        case '22':
            //22.Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
            //ANALISIS DE REQUERIMIENTO
            //ENT nombre1, nommbre2 
            //PRO  nombre1 es mayor que  nombre2(leer)""nombre1 es menor que  nombre2(leer)""nombre1 es igual que  nombre2(leer)
            //SAL mostrar resultado de la comparacion 
            let nombre1=read("ingrese el primer nombre: ")
            let nombre2=read("ingrese el segundo nombre: ")
            if (nombre1>nombre2) {
                console.log( nombre1, " es mayor que :", nombre2)
            } else if (nombre1<nombre2) {
                console.log( nombre2, " es menor que :", nombre1)
            } else { 
                console.log( nombre1, "es igual que:", nombre2)
            }
            menu()
            break
        case '23':
            // 23. Dado una cadena indicar cuantos elementos tiene, sin usar ciclos.
            //  BOSQUEJO  //
            // ENTRADA: cadena = (cualquier numeros y letras)
            // PROCESO: cantidadElementos = cadena.length
            // SALIDA:  La cadena tiene " + cantidadElementos + " elementos.
            // LENGUAJE JAVASCRIPT //
            let cadenass = read("Por favor, ingrese una cadena: ");
            let longitudElementos = cadenass.length;
            console.log("La cadena tiene " + longitudElementos + " elementos.");
            menu()
            break
        case '24':
            //24.Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos.
            //ANALISIS DE REQUERIMIENTO
            //ENT: elementos=""(leer) arregloso=""(calcular), ccantidadElementos=0(calcular)
            //PRO: arregloso  = elementos.split(','); //Utilizamos el método split(',') para dividir la cadena ingresada
            //     cantidadElementos = arregloso.length;
            //SAL: mostrar el resultado que tiene cierta cantidad de elementos
            const elementos = read("Ingresa los elementos separados por comas (,) para que se puedan separar los arreglos: ");
            const arregloso = elementos.split(',');
            const cantidadElementos = arregloso.length;
            console.log("El arreglo tiene dentro " + cantidadElementos + " elementos.");
            menu()
            break
        case '25':
            write("¡Hasta luego!");
            break
        default:
            write("Opción no válida. Por favor, seleccione una opción válida.")
            menu()
            break
        
    }
}
    menu()