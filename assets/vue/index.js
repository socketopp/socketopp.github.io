


var appBackground = new Vue({
    el: '#app',
    data: 
    {   
        increaseOpacity : false,
        counter : 0,

        imageObject : 
        {
            backgroundImage: 'url(img/bg0.jpg)'
            
        },

        backgroundObject : 
        {
            opacity: '1'
        }
    },  

    mounted () {

    this.intervalFunction();

    },

    methods: {
        intervalFunction: function() {
            setInterval(() => { 
            console.log("increaseOpacity: " + this.increaseOpacity);
                if(this.increaseOpacity){
                    if(this.counter == 2){
                    console.log("counter is eequal to 2, resets");
                    this.counter = 0;
                    this.backgroundObject.opacity = 1;
                    this.increaseOpacity = false;
                    }
                    else{
                        console.log("increment this + 1 counter: " + this.counter);
                        this.backgroundObject.opacity = 1;
                        this.increaseOpacity = false;
                        this.counter++;
                    }
                }
                else{
                    console.log('image being used is: img/bg'+ this.counter + '.jpg)');
                    this.imageObject.backgroundImage = 'url(img/bg'+ this.counter + '.jpg)';    
                    this.increaseOpacity = true;
                    this.backgroundObject.opacity = 0.75;

                }
            },5000);
        }
    }
});







    // setInterval(() => {
    //     console.log("increaseOpacity: " + this.increaseOpacity);
    //     if(this.increaseOpacity){
    //          if(this.counter == 2){
    //              console.log("counter is eequal to 2, resets");
    //             this.counter = 0;
    //             this.backgroundObject.opacity = 1;
    //             this.increaseOpacity = false;

    //          }
    //          else{
    //             console.log("increment this + 1 counter: " + this.counter);
    //             this.backgroundObject.opacity = 1;
    //             this.increaseOpacity = false;
    //             this.counter++;

    //          }
    //     }
    //     else{
    //         console.log('image being used is: img/bg'+ this.counter + '.jpg)');

    //         this.imageObject.backgroundImage = 'url(img/bg'+ this.counter + '.jpg)';    
    //         this.backgroundObject.opacity = 0.80;
    //         this.increaseOpacity = true;
    //     }
    // },4000);





                 // this.counter++;

        // console.log(this.backgroundObject.opacity);
        
        // setInterval(() => {
        //             this.backgroundObject.opacity = 1;

            // if(this.counter == 2){

            // }
            // this.backgroundObject.opacity = 1.0;
            // if(this.counter == 3){
            //     this.counter = 0;
                
            // }
            // else{
                
            //     this.counter++;

            // }

        // }, 5000);

        // background.opacity = 0.1;
                // var frontDiv = this.$refs.frontDiv;
        // var background = this.$refs.background.opacity;







        // setInterval(function thisshit(){
        //     // var comp = this.$els.wrapper
        // console.log("hej");
        // // console.log(this.$el.wrapper);
        // console.log(this.$refs.p);

        // }, 3000);
