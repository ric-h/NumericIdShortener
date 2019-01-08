class IDShortener {
  constructor() {
    this.ID = null;
    this.Code = null;
    this.__word = " aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTwWuUxXyYzZ123456789";
  }
  
  shortID(id) {
    this.ID = id;
    return this.__encodeShort(this.ID);
  }
  
  unshortID(shortCode) {
    this.Code = shortCode;
    this.ID = this.__decodeShort();
    return this.ID;
  }
  
  //-- internal methods --
  
  __len() {
    return this.__word.length - 1;
  }
  
  __getChar(pos) {
    return this.__word[pos];
  }
  
  __encodeShort(token) {
    //Step 1
    //token in range
    let aux1 = token;
    if (aux1 <= this.__len())
        return this.__getChar(aux1);
    
    //Step 2
    //get remainder
    let aux2 = aux1 % this.__len();
    
    //Step 3
    let aux3 = aux1 / this.__len();
    aux1 = Math.floor(aux3);
    
    //Step 4
    if (aux2 === 0)
        aux1--;
    
    //Step 5
    //generate
    return this.__encodeShort(aux1) + this.__getChar(aux2);
  }
  
  __getIndex(char) {
    return this.__word.indexOf(char);
  }
  
  __calc(initial, next) {
    return initial * this.__len() + next;
  }
  
  __decodeShort() {
    if (this.Code.length === 0)
        return 0;
    
    if (this.Code.length === 1)
        return this.__getIndex(this.Code[0]);
    
    let aux = this.__calc(this.__getIndex(this.Code[0]), this.__getIndex(this.Code[1]));
    for(let x=2; x < this.Code.length; x++)
        aux = this.__calc(aux, this.__getIndex(this.Code[x]));

    return aux;    
  }
}
