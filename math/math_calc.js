$("[purpose=math_fact]").click(function(){
	window.location.href="factorial.html";
});
$("[purpose=squareroot]").click(function(){
	window.location.href="squareroot.html";
});
$("[purpose=cuberoot]").click(function(){
	window.location.href="cuberoot.html";
});
$("[purpose=math_division]").click(function(){
	window.location.href="divisioncalc.html";
});
$("[purpose=scinot]").click(function(){
   window.location.href="scientific_notation.html";
});
$("[purpose=logcal]").click(function(){
   window.location.href="logcal.html";
});
var val=0;
var val1=0;
var val2=0;
$("[purpose=fact_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   factorial();
});
$("[purpose=squareroot_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   squareroot();
});
$("[purpose=cuberoot_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   cuberoot();
});
$("[purpose=division_divisor]").on("change paste keyup", function() {
   val1=$(this).val(); 
   val2=$("[purpose=division_dividend]").val();
   if(val1!="" && val2 !="")
   {
   		divisioncalc();
   }
});
$("[purpose=division_dividend]").on("change paste keyup", function() {
   val2=$(this).val(); 
   val1=$("[purpose=division_divisor]").val();
   if(val1!="" && val2 !="")
   {
   		divisioncalc();
   }
});
$("[purpose=sci_num]").on("change paste keyup", function() {
   val=$(this).val(); 
   scinot();
});
$("[purpose=log_num]").on("change paste keyup", function() {
   val1=$(this).val(); 
   logcalc();
});
$("[purpose=log_base]").on("change paste keyup", function() {
   val2=$(this).val(); 
   logcalc();
});
function logcalc()
{
   if(val1!="" && val2!="")
   {
      $("[purpose=log_val]").val((Math.log(val1)/Math.log(val2)));
   }
}

function scinot()
{
   $("[purpose=sci_val]").val(parseInt(val).toExponential());
}
function divisioncalc()
{
	var quo=(val2/val1).toFixed(0);
	var rem=val2%val1;
	$("[purpose=division_rem]").val(rem);
	$("[purpose=division_quo]").val(quo);
}
function cuberoot()
{
	$("[purpose=cuberoot_val]").val(Math.cbrt(val).toFixed(4));
}
function squareroot()
{
	$("[purpose=squareroot_val]").val(Math.sqrt(val).toFixed(4));
}
function factorial()
{
	var fact=1;
	for(var i=1;i<=val;i++)
	{
		fact=fact*i;

	}
	$("[purpose=fact_val]").val(fact);
}

