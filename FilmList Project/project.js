const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


 const ui = new UI();  // UI OBJESİNİ BAŞLATMA
   
 const storage = new Storage(); //STORAGE OBJESİ ÜRETME

 // TÜM EVENTLERİ YÜKLEME
 eventListeners();

 function eventListeners(){

    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
         let films = storage.getFilmsFormStorage();
         ui.loadALLFilms(films);
    })


    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
 }

 function addFilm(e){
    const url = urlElement.value;
    const title = titleElement.value;
    const director = directorElement.value;
    

    if(title === "" || director === "" || url === ""){

        ui.displayMessages("Lütfen tüm alanları dolduruuz...", "danger");

    } 

    else{

        const newFilm = new Film(url,director,title);

        ui.addFilmToUI(newFilm); //ARA YüZE FİLM EKLEME YOLU

        storage.addFilmToStorage(newFilm); //STOREGEYE FİLM EKLEME

        ui.displayMessages("Film başarı ile eklendi...", "success")

    }

        ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
 }
 function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFormUI(e.target);
        storage.deleteFilmFormStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
    }
 }

 function clearAllFilms(){
    ui.clearAllFilmsFormUI();
    storage.clearAllFilmsFormStorage();

 }

 function clearAllFilms (){
    if(confirm("Silinecek emin misiniz ?")){
        ui.clearAllFilmsFormUI();
        storage.clearAllFilmsFormStorage();
    }
 }

