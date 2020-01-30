//Bellow addresses all h1 elements
//$('h1').hide();

//Bellow addresses the h1 element with the id of heading1
//$('h1#heading1').hide();

//Bellow address the h1 element with the class of heading2
//$('.heading2').hide();


//Bellow targets spans that are inside of paragraph elements only
//$('p span').css('color','red');

//Bellow targets all paragraph elements within the body
//$('span').css('color','red');

$('ul#list li:first').css('color','red');
$('ul#list li:last').css('color','green');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', '#cccccc');
$('ul#list li:nth-child(3n)').css('list-style', 'none');

$('[href]').css('color','red');
$('a[href="http://yahoo.com"]').css('color', 'green');
//$('*').hide();



