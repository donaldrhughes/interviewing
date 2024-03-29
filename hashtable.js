//Hashtable Example -- usage: node hashtable

let hash = new HashTable({one: 1, two: 2, three: 3, "i'm no 4": 4, five: null});

console.log(hash);
console.log(hash.items);
console.log('original length: ' + hash.length);
console.log('getItem - value of key "one": ' + hash.getItem('one'));
console.log('hasItem - has key "seven"? ' + hash.hasItem('seven'));
console.log('hasItem - has key "three"? ' + hash.hasItem('three'));
//foo value 
console.log('hasItem - has key "foo"? ' + hash.hasItem('foo'));
console.log('setItem - previous value of key "foo": ' + hash.setItem('foo', 'bar'));
console.log(hash.items);
console.log('hash.length - length after setItem: ' + hash.length);
console.log('getItem - value of key "foo": ' + hash.getItem('foo'));
console.log('getItem - value of key "im no 4": ' + hash.getItem("i'm no 4"));
hash.clear();
console.log('hash.length after clear: ' + hash.length);

//HashTable Constructor /w methods
function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        let previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        let keys = [];
        for (let k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        let values = [];
        for (let k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (let k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}

