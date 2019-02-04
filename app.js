//Inputs
let totalSuma = document.getElementById('total_suma'),
clientesCon = document.getElementById('clientescon'),
clientesSin = document.getElementById('clientessin'),
total_one = document.getElementById('total_one'),
total_two = document.getElementById('total_two'),
total_three = document.getElementById('total_three'),
total_four = document.getElementById("total_four"),
total_five = document.getElementById("total_five"),
total_seven = document.getElementById('total_seven'),
total_eight = document.getElementById('total_eight'),
total_p = document.getElementById('total_p'),
total_c = document.getElementById('total_C'),
numero_noche = document.getElementById('numeronoches'),
numero_almuerzo = document.getElementById('numeroalmuerzos'),
numero_desayuno = document.getElementById('numerodesayunos'),
numero_cena = document.getElementById('numerocenas'),
total_cena = document.getElementById('total_cena'),
personas_pasadia = document.getElementById('personaspasadia'),
personas_camping = document.getElementById('personacamping');


var numero_con = 0, 
numero_sin = 0,
precio_clientesCon = 35,
precio_clientesSin = 30,
precio_almuerzos = 12,
precio_desayunos = 7,
precio_cena = 12,
precio_camping = 10,
precio_pasadia = 5,
numero_noches = 0,
numero_almuerzos = 0,
numero_desayunos = 0,
numero_cenas = 0,
numero_pasadia = 0,
numero_camping = 0;

//Buttons 
let button_one = document.getElementById('button_one'),
button_two = document.getElementById('button_two'),
button_three = document.getElementById('button_three'),
button_four = document.getElementById('button_four'),
button_five = document.getElementById('button_five'),
button_six = document.getElementById('button_six'),
button_noche = document.getElementById("button_noche"),
button_cena = document.getElementById('button_cena'),
button_seven = document.getElementById('button_seven'),
button_eight = document.getElementById('button_eight'),
button_totalp = document.getElementById('button_totalp'),
button_totalc = document.getElementById('button_totalc');
//botones para restar

let rest_one = document.getElementById('rest_one'),
rest_two = document.getElementById('rest_two'),
rest_three = document.getElementById('rest_three'),
rest_cena = document.getElementById('rest_cena'),
rest_four = document.getElementById('rest_four'),
rest_five = document.getElementById('rest_five'),
rest_seven = document.getElementById('rest_seven'),
rest_eight = document.getElementById('rest_eight');


// funciones click

//botones numero clientes con desayuno 
button_one.addEventListener("click", function(){
    clientesCon.value = ++numero_con;
    total_one.value = numero_con * precio_clientesCon;
});
rest_one.addEventListener('click', function(){
    clientesCon.value = --numero_con;
    total_one.value = numero_con * precio_clientesCon;
});

//Botones numero clientes sin desayuno
button_two.addEventListener("click", function(){
    clientesSin.value = ++numero_sin;
        total_two.value = numero_sin * precio_clientesSin;
});
rest_two.addEventListener('click', function(){
    clientesSin.value = --numero_sin;
    total_two.value = numero_sin * precio_clientesSin;
});

//Botones numero noches
button_three.addEventListener("click", function() {
    numero_noche.value = ++numero_noches;
});
rest_three.addEventListener('click', function(){
    numero_noche.value = --numero_noches;
});

 button_noche.addEventListener('click', function(){
     if(total_one.value >= 1){
    total_three.value = total_one.value * numero_noches;
     } else if(total_two.value >= 1){
         total_three.value = total_two.value * numero_noches;
     }
 });

 //Botones Numero almuerzos
button_four.addEventListener('click', function(){
    numero_almuerzo.value = ++numero_almuerzos;
    total_four.value = numero_almuerzos * precio_almuerzos;
});
rest_four.addEventListener('click', function(){
    numero_almuerzo.value = --numero_almuerzos;
    total_four.value = numero_almuerzos * precio_almuerzos;
});

// botones numero cenas 
button_cena.addEventListener('click', function(){
    numero_cena.value = ++numero_cenas;
    total_cena.value = numero_cenas * precio_cena;
});
rest_cena.addEventListener('click', function(){
    numero_cena.value = --numero_cenas;
    total_cena.value = numero_cenas * precio_cena;
});

//Botones Numero Desayunos
button_five.addEventListener('click', function(){
    numero_desayuno.value = ++numero_desayunos;
    total_five.value = numero_desayunos * precio_desayunos;
});
rest_five.addEventListener('click', function(){
    numero_desayuno.value = --numero_desayunos;
    total_five.value = numero_desayunos * precio_desayunos;
});

//Botones numero personas pasadia 
button_seven.addEventListener('click', function(){
    personas_pasadia.value = ++numero_pasadia;
    total_seven.value = numero_pasadia * precio_pasadia;
});
rest_seven.addEventListener('click', function(){
    personas_pasadia.value = --numero_pasadia;
    total_seven.value = numero_pasadia * precio_pasadia;
});


//Botones camping x persona
button_eight.addEventListener('click', function(){
    personas_camping.value = ++numero_camping;
    total_eight.value = numero_camping * precio_camping;
});
rest_eight.addEventListener('click', function(){
    personas_camping.value = --numero_camping;
    total_eight.value = numero_camping * precio_camping;
});

//suma posada x persona
button_six.addEventListener('click', function(){
    if(total_cena.value == 0){
        totalSuma.value = parseInt(total_three.value) + parseInt(total_four.value);

    }else if(total_four.value == 0) {
        totalSuma.value = parseInt(total_three.value) + parseInt(total_cena.value);

    }else{
        totalSuma.value = parseInt(total_three.value) + parseInt(total_four.value) + 
        parseInt(total_cena.value);
    }
});

//suma pasadia x persona
button_totalp.addEventListener('click', function(){
    if(total_five.value == 0){
        total_p.value = parseInt(total_seven.value) + parseInt(total_four.value);
    }else if(total_four.value == 0) {
        total_p.value = parseInt(total_seven.value) + parseInt(total_five.value);
    }else {
        total_p.value = parseInt(total_seven.value) + parseInt(total_four.value) + parseInt(total_five.value);
    }
});

// suma camping x persona
button_totalc.addEventListener('click', function(){
    if(total_four.value == 0){
        total_c.value =  parseInt(total_eight.value) + parseInt(total_five.value);

    }else  if(total_five.value == 0){ 
        total_c.value = parseInt(total_eight.value) + parseInt(total_four.value);
        
    }else if (total_four.value == 0 && total_five.value == 0) {
        total_c.value = parseInt(total_eight.value) + parseInt(total_cena.value);

    }else{
        total_c.value = parseInt(total_eight.value) + parseInt(total_cena.value) + parseInt(total_five.value) +
        parseInt(total_four.value);
    }
})