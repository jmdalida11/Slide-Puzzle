function Slot(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.tile = null;
    this.empty = false;

    this.collides = function(pos){
        return pos.x > this.x && pos.x < this.w + this.x &&
               pos.y > this.y && pos.y < this.h + this.y;
    }

}