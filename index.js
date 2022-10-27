class usuario {
    constructor (name , surname , mascotas ,libros  ){
        this.name = name  
        this.surname = surname
        this.mascotas = mascotas = []
        this.libros = libros 
    }

    
     
     getFullName( name , surname ) {
        this.name = name 
        this.surname = surname 
        return name + " " + surname 
     }    

     addMascotas(mascotas){
        this.mascotas = mascotas 
        return this.mascotas.push(mascotas)
        
     }

     countMascotas(){
        this.mascotas.length(mascotas)
     }
    }

 const lucas = new usuario();
 console.log(lucas.getFullName("Lucas","Valdez"))   
 console.log(lucas.addMascotas("tuti")) 
 console.log(lucas.countMascotas)
