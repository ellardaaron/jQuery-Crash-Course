$('#btn1').click(function(){
    alert('Button Clicked!');
});

$('#btn1').click(function(){
    $('.para1').hide();
});

//or another way of writing it:

$('#btn1').on('click',function(){
    $('.para1').hide();
})

//--------------------------------------

$('#btn2').on('click',function(){
    $('.para1').show();
})

$('#btn3').on('click',function(){
    $('.para1').toggle();
});

//------------------------------------------

$('#btn4').hover(function(){
    $('.para1').toggle()
});

//------------------------------------------


$('#btn5').on('mouseenter',function(){
    $('.para1').toggle();
});

//-------------------------------------------

$('#btn6').on('mouseenter', function(){
    $('.para1').toggle();
});

$('#btn6').on('mouseleave', function(){
    $('.para1').toggle();
});

//--------------------------------------------

$('#btn7').on('mousemove', function(){
    $('.para1').toggle();
});

//-----------------------------------------------

$('#btn8').on('mouseup', function(){
    $('.para1').toggle();
});

$('#btn9').on('mousedown', function(){
    $('.para1').toggle();
});

//-------------------------------------------------

$('#btn10').on('mousedown',function(){
    $('.para1').toggle();
});

$('#btn10').on('mouseup',function(){
    $('.para1').toggle();
});

//-------------------------------------------------

$('#btn11').on('click',function(e){
    console.log(e);
})

//--------------------------------------------------

$('#btn12').on('mousemove', function(e){
   console.log('Coords: Y: '+e.clientY+ " X: "+e.clientX);
});

//----------------------------------------------------

$(document).on('mousemove', function(e){
   $('#coords').html('Coords: Y: '+e.clientY+ " X: "+e.clientX);
 });

 //----------------------------------------------------

 $('input').focus(function(){
     $(this).css('background', 'pink');
 });

 $('input').blur(function(){
    $(this).css('background', '');
});

//-----------------------------------------------------

$('input').keyup(function(e){
    console.log(e.target.value);
});

//---------------------------------------------------

$('select#gender').change(function(e){
    alert(e.target.value);
});

//----------------------------------------------------

$('#basicInputForm').submit(function(e){
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
});
