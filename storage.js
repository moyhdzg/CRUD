class Storage {
    constructor(key, taskComp) {
    this.key = key;
    this.taskComp = taskComp;
    this.createStorage();
    }
    
    createStorage(){
        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify([]));
        }
    }
    parseStorage() {
        return JSON.parse(localStorage.getItem(this.key)).map((i) =>
        this.taskComp(i),
        );
    }
    saveStorage(storage) {
        localStorage.setItem(this.key, JSON.stringify(storage));
    }
    // CRUD
    createItem(item) {
        const current = this.parseStorage();
        current.push(item);
        this.saveStorage(current);
    }
    readItems() {
        return this.parseStorage();
      }

} 