const monParagraphe = document.querySelector(".restaurant");
const bouton = document.querySelector(".plats")

getAllItems();

function getAllItems(){
                let maRequete = new XMLHttpRequest();
            maRequete.open('GET', 'http://localhost/hb/baseFramework/index.php?controller=restaurant&task=indexApi')
            maRequete.onload = ()=>{
               
                                // on récupère les données qu'on transforme
                    data = JSON.parse(maRequete.responseText);
                    
                                //on passe le tableau à une fonction qui va générer le html inséré dans le DOM
                    faireDesCardsItems(data);
                    console.log(data);
        
                }
             maRequete.send();
        }

function faireCardsRestos(tableRestaurant) {
    let cards = "";

        tableRestaurant.forEach(( restaurant) => {
            card = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
										<h3  class="card-title">${restaurant.name}</h3>
                    <p class="card-text">${restaurant.address}</p>
                <button class="show btn btn-info" value="${restaurant.id}" >Voir cet item</button>
                    
                </div>
            </div>`;


        cards += card;
        divRestaurant.innerHTML = cards;
        divPlats.innerHTML = "";
        });

    document.querySelectorAll(".showRestaurant").forEach((bouton) => {
        bouton.addEventListener("click", (event) => {
            afficheUnRestaurant(bouton.value);
        });
    });
}