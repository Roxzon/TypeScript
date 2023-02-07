let mensaje: string = "Hola Mundo"

mensaje = "Nuevo Hola Mundo"

mensaje = "Adios mundo"
console.log(mensaje)
console.log(typeof [])

/*Tipos en JS
    *number
    *string
    *boolean
    *null
    *undefined
    *object
    *function
*/

/*Tipos de TS
    *any no se recomienda usarlo porque pasa cualquier tipo de dato
    *unknown
    *never
    *arrays
    *tuplas
    *Enums
    *Tipos inferidos
*/

/*inicializamos el valor, por ello TS sabe que tipo es*/
let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

/*¿Pero y sino inicializamos?*/
/*¿Por que no any?*/
// let mivariable
// mivariable = ""
// mivariable = 42

function cambio(config: any) {
    return config
}

/*Arrays*/
let animales: string[] = ['cerdito', 'perro', 'gato']
let nums: number[] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato

/*Tuplas*/
//Es una variable que contiene un set de datos ordenados
let tupla: [number, string[]] = [1, ['cerdito1','cerdito2']]

/*Enums*/
//Tipo enumerado, lista de constantes
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla{ Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

/*Forma recomendada de usar enum*/
const enum LoadingState { Idle, Loading, Sucess, Error }

const estado = LoadingState.Sucess

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto:Persona = { 
    id: 1,
    nombre: 'Hola Mundo', 
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Ucrania'
    }
}

const arr: Persona[] = []