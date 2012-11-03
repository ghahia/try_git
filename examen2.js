//crear a un reloj
   
    var reloj = function(HH, MM, SS){
    this.hora = HH;
    this.minuto = MM;
    this.segundo = SS;
    this.alarm = "";
    
    this.time = function(){
    var newhora;
    var newminuto;
    var newsegundo;

    if(this.hora < 10){
    newhora = "0" + this.hora
    } else{
    newhora = this.hora
    }
    if(this.minuto < 10){
    newminuto = "0" + this.minuto
    } else{
    newminuto = this.minuto
    }
    if(this.segundo < 10){
    newsegundo = "0" + this.segundo
    } else{
    newsegundo = this.segundo
    };
    var tiempo = newhora + ":" + newminuto + ":" + newsegundo
    return tiempo;
    }
          
    this.tick = function() {
        if (this.segundo <= 60) {
        this.segundo += 1;
        
        if (this.segundo == 60)
        this.segundo = 0
        this.minuto += 1;
        }
        if(this.minuto == 60) {
        this.minuto = 0
        this.hora += 1;
        }
        if (this.hora == 24) {
        this.hora = 0
        this.minuto = 0
        this.segundo = 0;
        }
        
        if(this.alarm == this.time()) {
        console.log(this.time() + "Alarma");
        }
    }
        this.addAlarm = function(alarm) {
        this.alarm = alarm;
        
    }
        
}
        var r = new reloj(2,19,59);
        console.log(r.time());
        r.addAlarm("02:20:00");
        r.tick()
        
        
        
