class usuario {
    constructor (name , surname , mascotas ,libros  ){
        this.name = name  
        this.surname = surname
        this.mascotas = mascotas  
        this.libros = libros 
    }

    
     
     getFullName( name , surname ) {
        this.name = name 
        this.surname = surname 
        return name + " " + surname 
     }    

     addMascotas(primera,segunda,tercera){
            this.mascotas = []
            this.mascotas.push(primera)
            this.mascotas.push(segunda)
            this.mascotas.push(tercera)
            return this.mascotas
     }
     

     countMascotas(){
               this.mascotas = mascotas 
              return mascotas.lench
     }
    }

 const lucas = new usuario();
 console.log(lucas.getFullName("Lucas","Valdez"))   
 console.log(lucas.addMascotas('toby','duki','terry'))
 console.log(lucas.countMascotas)
 console.log(lucas)



