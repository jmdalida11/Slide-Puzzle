function PlayState(gsm, canvas){

    this.gsm = gsm;
    this.canvas = canvas;
    this.slots = [];

    const tileNums = 9;
    const widthSize = Math.floor(canvas.width / 3);
    const heightSize = Math.floor(canvas.height / 3);
    const offset = 5;

    this.init = function(){
        var row = 0;
        var col = 0;

        var numbers = [1, 2, 3, 4, 5, 6, 7, 0];

        for(var i=0; i<tileNums; i++){
            var x = widthSize * col + offset;
            var y = heightSize * row + offset;
            this.slots[i] = new Slot(x, y, widthSize - offset, heightSize - offset);
            if(i != tileNums-1){
                var inx = Math.floor(Math.random() * numbers.length);
                var rand = numbers[inx];
                var tile = new Tile(x, y, widthSize - offset, heightSize - offset, rand);
                numbers.splice(inx, 1);
                this.slots[i].tile = tile;
            }
            col++;
            if(col == 3){
                col = 0;
                row++;
            } 
            if(i == tileNums - 1){
                this.slots[i].empty = true;
            }
        }
    }

    this.update = function(){
        
    }

    this.render = function(context){
        for(var i=0; i<this.slots.length; i++){
            if(this.slots[i].tile){
                this.slots[i].tile.render(context);
            }
        }
    }

    this.mouseMove = function(pos){
        for(var i=0; i<tileNums; i++){
            if(this.slots[i].collides(pos) && !this.slots[i].empty){
                var movable = false;
                if(i != 0 && i != 3 && i != 6){
                    if(this.slots[i-1].empty){
                        this.moveTile(this.slots[i], this.slots[i-1]);
                        movable = true;
                    }
                }
                if((i != 2 && i != 5 && i != 8) && !movable){
                    if(this.slots[i+1].empty){
                        this.moveTile(this.slots[i], this.slots[i+1]);
                        movable = true;
                    }
                }
                if((i != 0 && i != 1 && i != 2) && !movable){
                    if(this.slots[i-3].empty){
                        this.moveTile(this.slots[i], this.slots[i-3]);
                        movable = true;
                    }
                }
                if((i != 6 && i != 7 && i != 8) && !movable){
                    if(this.slots[i+3].empty){
                        this.moveTile(this.slots[i], this.slots[i+3]);
                    }
                }
            }
        }
    }

    this.moveTile = function(slotSrc, slotDes){
        slotDes.tile = slotSrc.tile;
        slotSrc.tile = null;
        slotDes.tile.x = slotDes.x;
        slotDes.tile.y = slotDes.y;
        slotSrc.empty = true;
        slotDes.empty = false;
    }

    this.moveArrow = function(key){
        // up
        if(key == 38){

        }
        // down
        if(key == 40){

        }
        // right
        if(key == 39){

        }
        // left
        if(key == 37){

        }
    }

}