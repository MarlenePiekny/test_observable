import {Observable} from "./test";
import {Observer} from "./test";

//Créer un observable
const observable = new Observable();

// Crée un observateur qui s'abonne à l'observable

observable.addObservableFromHTML(document.getElementById('myinput'), 'keyup')
observable.registerObserver( inputValue => console.log(inputValue))

observable.registerObserver(inputValue => {
    document.getElementsByTagName('h1')[0].innerHTML = inputValue;
})


// Enlever l'abonnement d'un observable
observable.unregisterObserver(concreteObserver1);
console.log(observable);



