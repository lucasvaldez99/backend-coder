class usuario {
    constructor (name , surname , mascotas ,libros  ){
        this.name = name  
        this.surname = surname
        this.mascotas = String  
        this.libros = Object
    }

    
     
     getFullName( name , surname ) {
        this.name = name 
        this.surname = surname 
        return name + " " + surname 
     }    

     addMascotas(mascotas){
            this.mascotas = []
            this.mascotas.push(mascotas)
            return this.mascotas
     }

    addBook(nombre, autor){
       const libros = {
        nombre : nombre ,
        autor:autor
    }
       this.libros = libros 
       return this.libros 
    }

    getBookNames(){
        
        }
     
    }

 const lucas = new usuario();
 console.log(lucas.getFullName("Lucas","Valdez"))   
 console.log(lucas.addMascotas('toby'))
 console.log(lucas.addBook("principito"," luis"))   
 console.log(lucas)



