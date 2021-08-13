//DECLARATION
export class Observable {

    constructor() {
        this.observerCollection = []
    }

    registerObserver(observer) {
        this.observerCollection.push(observer);
    }

    unregisterObserver(observer) {
        if (this.observerCollection.indexOf(observer) > -1) {
            this.observerCollection.splice(this.observerCollection.indexOf(observer), 1);
        }
    }

    addObservableFromHTML(source, eventType) {
        source.addEventListener(eventType, event => {
            console.log(event.target.value);
            this.observerCollection.forEach( obs => obs(event.target.value));
        })
    }

    notifyObservers(data) {
        this.observerCollection.forEach((observer) => observer.notify(data))
    }

    //GETTERS
    getObserverCollection() {
        return this.observerCollection;
    }

    getObserverInCollection(observer) {
        if (this.observerCollection.indexOf(observer) > -1) {
            return this.getObserverCollection(this.observerCollection.indexOf(observer));
        }
    }

    //SETTERS
    setObserverInCollection(observer) {
        this.observerCollection.push(observer);
    }

}

export class Observer {

    notify(data) {
        console.log(data);
    }
}




