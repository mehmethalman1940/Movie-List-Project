function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    
    let films = this.getFilmsFormStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
    
}

Storage.prototype.getFilmsFormStorage = function(){
     let films ;

    if (localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films")); //JSON.PARSE İLE ARRAY HALE GETİRME
    }
    return films;
}
Storage.prototype.deleteFilmFormStorage = function(filmTitle){
    let films = this.getFilmsFormStorage();
    films.forEach(function(film, index){
            if(film.title === film.title){
                films.splice(index, 1);

                ui.displayMessages("Local Storageden silme işlemi başarılı...", "success");

            }
    });

    localStorage.setItem("films", JSON.stringify(films));
        
   
}

Storage.clearAllFilmsFormStorage = function(){

    localStorage.removeItem(films);

}