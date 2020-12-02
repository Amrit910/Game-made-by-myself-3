class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(){
        database.ref('/').update({
            gameState : State

        })
    }

    async start(){
        if (gameState === 0)
        {
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        
    }
}