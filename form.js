class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("name");
        this.greeting = createElement("h2");
        this.button = createButton("play");
    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
    }

    display()
    {
        this.title.html("The Brave Knight");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayHeight/2-40,displayHeight/2-80);
        this.button.position(displayWIdth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            player.name(this.input.value());
            playerCount+=1;
            this.greeting.html("Welcome"+player.name);
            this.greeting.position((displayWidth/2-70,displayHeight/4));
            
        })
    }
}