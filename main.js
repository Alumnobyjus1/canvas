canvas = document.getElementById("myCanvas");//Creación del canvas
ctx= canvas.getContext("2d");//Tipos de gráficos=2d

color = "red";//color por default

ctx.beginPath();//Iniciar el lienzo
ctx.strokeStyle = color;//Color para empezar los trazos
ctx.lineWidth = 2;//Ancho de la línea
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);//Formúla para dibujar el círculo
ctx.stroke();//Dibuja el beginPath definido

canvas.addEventListener("mousedown", my_mousedown);//Apretar el mouse y dibujar

function my_mousedown(e)//Se define la función my_mousedown y recibe el evento con el que va a trabajar
{
    //obtener color del cuadro de entrada
    //inicio de la actividad adicional
    color = document.getElementById("color").value;
    console.log(color);
    //final de la actividad adicional
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//actividad adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
