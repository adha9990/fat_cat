import { ref } from "vue";

export default class {
    constructor(){
        this.time = ref(0);
        this.isStop = ref(false);
        this.delay = 1;

        setInterval(() => {
            if(!this.isStop.value){
                this.plus();
            }
        }, this.delay * 1000);
    }
    start(){
        this.isStop.value = false;
    }
    stop(){
        this.isStop.value = true;
    }
    reset(){
        this.time.value = 0;
        this.isStop.value = false;
    }
    plus(){
        this.time.value = (this.time.value + 1) % 101;
    }
}