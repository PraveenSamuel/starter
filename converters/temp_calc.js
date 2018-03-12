var fah;
var cel;
var kel;
var ran;
var cen;
var val;
var val1;
var val2;
$("[purpose=speed_conv]").on("click", function() {
   window.location.href="speed_conv.html";
});
$("[purpose=pressure_weight]").on("click", function() {
   window.location.href="weight_calc.html";
});
$('[purpose="length_conv"]').click(function(){
	window.location.href="length_conv.html";
});
$('[purpose="power_conv"]').click(function(){
	window.location.href="power_conv.html";
});
$("[purpose=pressure_conv]").on("click", function() {
   window.location.href="pressure_conv.html";
});
$("[purpose=temp_conv]").on("click",function(){
	window.location.href="temp_conv.html";
});
$("[purpose=dec_bin]").on("click",function(){
	window.location.href="dec_bin.html";
});
$("[purpose=area_conver]").on("click",function(){
	window.location.href="area_conv.html";
});
$("[purpose=force_conv]").on("click", function() {
   window.location.href="force_conv.html";
});
$("[purpose=force_newton]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("new");
});
$("[purpose=force_dyne]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("dyne");
});
$("[purpose=force_kilopond]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("kilopond");
});
$("[purpose=force_Ounce]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("ounce");
});
$("[purpose=force_pound]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("pound");
});
$("[purpose=force_kgf]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("force_kgf");
});
$("[purpose=force_kip]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("force_kip");
});
$("[purpose=force_kN]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("force_kN");
});
$("[purpose=force_pdl]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("force_pdl");
});
$("[purpose=force_tnf]").on("change paste keyup", function() {
   val=$(this).val(); 
   forceconversion("force_tnf");
});
function forceconversion(fal)
{
	if(fal=="force_tnf")
	{
		var force_newton=val/0.00011240447446243;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="force_pdl")
	{
		var force_newton=val/7.2330114643232;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="force_kN")
	{
		var force_newton=val/0.001;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="force_kip")
	{
		var force_newton=val/0.00022480892365534;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="force_kgf")
	{
		var force_newton=val/0.10197162129779;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="pound")
	{
		var force_newton=val/0.22480892365534;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="ounce")
	{
		var force_newton=val/3.5969424550355;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_kilopond]").val(force_kilopond);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="kilopond")
	{
		var force_newton=val/0.10197162129779;
		var force_dyne=force_newton*100000;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_dyne]").val(force_dyne);
	}
	else if(fal=="dyne")
	{
		var force_newton=val/100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_newton]").val(force_newton);
		$("[purpose=force_kilopond]").val(force_kilopond);
	}
	else if(fal=="new")
	{
		var force_newton=val;
		var force_dyne=force_newton*100000;
		var force_kilopond=force_newton*0.10197162129779;
		var force_Ounce=force_newton*3.5969424550355;
		var force_pound=force_newton*0.22480892365534;
		var force_kgf=force_newton*0.10197162129779;
		var force_kip=force_newton*0.00022480892365534;
		var force_kN=force_newton*0.001;
		var force_pdl=force_newton*7.2330114643232;
		var force_tnf=force_newton*0.00011240447446243;
		$("[purpose=force_tnf]").val(force_tnf);
		$("[purpose=force_pdl]").val(force_pdl);
		$("[purpose=force_kN]").val(force_kN);
		$("[purpose=force_kip]").val(force_kip);
		$("[purpose=force_kgf]").val(force_kgf);
		$("[purpose=force_pound]").val(force_pound);
		$("[purpose=force_Ounce]").val(force_Ounce);
		$("[purpose=force_dyne]").val(force_dyne);
		$("[purpose=force_kilopond]").val(force_kilopond);
	}
}

$("[purpose=fahren]").on("change paste keyup", function() {
   fah=$(this).val(); 
   convert("f");
});

$("[purpose=cel]").on("change paste keyup", function() {
   cel=$(this).val(); 
   convert("cel");
});
$("[purpose=ran]").on("change paste keyup", function() {
   ran=$(this).val(); 
   convert("ran");
});
$("[purpose=kel]").on("change paste keyup", function() {
   kel=$(this).val(); 
   convert("kel");
});
$("[purpose=cen]").on("change paste keyup", function() {
   cen=$(this).val(); 
   convert("cen");
});
$("[purpose=decimal_num]").on("change paste keyup", function() {
   val=$(this).val(); 
   decimaltobinary();
});
$("[purpose=binary_num]").on("change paste keyup", function() {
   val=$(this).val(); 
   binarytodecimal();
});
$("[purpose=speed_kmh]").on("change paste keyup", function() {
   val=$(this).val(); 
   speedconversions("kmh");
});
$("[purpose=speed_mph]").on("change paste keyup", function() {
   val=$(this).val(); 
   speedconversions("mph");
});
$("[purpose=speed_mps]").on("change paste keyup", function() {
   val=$(this).val(); 
   speedconversions("mps");
});
$("[purpose=speed_knots]").on("change paste keyup", function() {
   val=$(this).val(); 
   speedconversions("knots");
});
$("[purpose=speed_footspers]").on("change paste keyup", function() {
   val=$(this).val(); 
   speedconversions("footspers");
});
$("[purpose=pressure_bar]").on("change paste keyup", function() {
   val=$(this).val(); 
   pressureconversions("bar");
});
$("[purpose=pressure_psi]").on("change paste keyup", function() {
   val=$(this).val(); 
   pressureconversions("psi");
});
$("[purpose=pressure_atm]").on("change paste keyup", function() {
   val=$(this).val(); 
   pressureconversions("atm");
});
$("[purpose=pressure_pa]").on("change paste keyup", function() {
   val=$(this).val(); 
   pressureconversions("pa");
});
$("[purpose=pressure_tor]").on("change paste keyup", function() {
   val=$(this).val(); 
   pressureconversions("tor");
});
$("[purpose=weight_kg]").on("change paste keyup", function() {
   val=$(this).val(); 
   weightconversions("kg");
});
$("[purpose=weight_lb]").on("change paste keyup", function() {
   val=$(this).val(); 
   weightconversions("lb");
});
$("[purpose=weight_oz]").on("change paste keyup", function() {
   val=$(this).val(); 
   weightconversions("oz");
});
$("[purpose=weight_g]").on("change paste keyup", function() {
   val=$(this).val(); 
   weightconversions("g");
});
$("[purpose=weight_ton]").on("change paste keyup", function() {
   val=$(this).val(); 
   weightconversions("ton");
});
$("[purpose=meter_sq]").on("change paste keyup", function() {
   val=$(this).val(); 
   areaconversions("meter");
});
$("[purpose=feet_sq]").on("change paste keyup", function() {
   val=$(this).val(); 
   areaconversions("feet");
});
$("[purpose=area_hec]").on("change paste keyup", function() {
   val=$(this).val(); 
   areaconversions("hec");
});
$("[purpose=area_acre]").on("change paste keyup", function() {
   val=$(this).val(); 
   areaconversions("acre");
});
function areaconversions(fal)
{
	if(fal=="acre")
	{
		var m_sq=val/0.0002471054;
		var feet_sq=m_sq*10.7639;
		var area_hec=m_sq*0.0001;
		$("[purpose=meter_sq]").val(m_sq);
		$("[purpose=feet_sq]").val(feet_sq);
		$("[purpose=area_hec]").val(area_hec);
	}
	else if(fal=="hec")
	{
		var m_sq=val/0.0001;
		var feet_sq=m_sq*10.7639;
		var area_acre=m_sq*0.0002471054;
		$("[purpose=meter_sq]").val(m_sq);
		$("[purpose=feet_sq]").val(feet_sq);
		$("[purpose=area_acre]").val(area_acre);
	}
	else if(fal=="feet")
	{
		var feet_sq=val;
		var m_sq=val/10.7639;
		var area_hec=m_sq*0.0001;
		var area_acre=m_sq*0.0002471054;
		$("[purpose=meter_sq]").val(m_sq);
		$("[purpose=area_hec]").val(area_hec);
		$("[purpose=area_acre]").val(area_acre);
	}
	else if(fal=="meter")
	{
		var m_sq=val;
		var feet_sq=m_sq*10.7639;
		var area_hec=m_sq*0.0001;
		var area_acre=m_sq*0.0002471054;
		$("[purpose=feet_sq]").val(feet_sq);
		$("[purpose=area_hec]").val(area_hec);
		$("[purpose=area_acre]").val(area_acre);
	}
}
function weightconversions(fal)
{
	if(fal=="ton")
	{
		var kg=val*1000;
		var g=kg*1000;
		var lb=kg*2.20462;
		var oz=kg*35.2739199982575;
		$("[purpose=weight_g]").val(g);
		$("[purpose=weight_kg]").val(kg);
		$("[purpose=weight_lb]").val(lb);
		$("[purpose=weight_oz]").val(oz);
	}
	else if(fal=="g")
	{
		var kg=val/1000;
		var ton=kg*0.001;
		var lb=kg*2.20462;
		var oz=kg*35.2739199982575;
		$("[purpose=weight_ton]").val(ton);
		$("[purpose=weight_kg]").val(kg);
		$("[purpose=weight_lb]").val(lb);
		$("[purpose=weight_oz]").val(oz);
	}
	else if(fal=="oz")
	{
		var kg=val/35.2739199982575;
		var g=kg*1000;
		var ton=kg*0.001;
		var lb=kg*2.20462;
		$("[purpose=weight_ton]").val(ton);
		$("[purpose=weight_kg]").val(kg);
		$("[purpose=weight_lb]").val(lb);
		$("[purpose=weight_g]").val(g);
	}
	else if(fal=="lb")
	{
		var lb=val;
		var kg=lb/2.20462;
		var oz=kg*35.2739199982575;
		var g=kg*1000;
		var ton=kg*0.001;
		$("[purpose=weight_ton]").val(ton);
		$("[purpose=weight_kg]").val(kg);
		$("[purpose=weight_oz]").val(oz);
		$("[purpose=weight_g]").val(g);
	}
	else if(fal=="kg")
	{
		var kg=val;
		var lb=kg*2.20462;
		var oz=kg*35.2739199982575;
		var g=kg*1000;
		var ton=kg*0.001;
		$("[purpose=weight_ton]").val(ton);
		$("[purpose=weight_lb]").val(lb);
		$("[purpose=weight_oz]").val(oz);
		$("[purpose=weight_g]").val(g);
	}
}
function pressureconversions(fal)
{
	if(fal=="tor")
	{
		var bar=val/750.062;
		var psi=bar*14.5038;
		var atm=bar*0.986923;
		var pa=bar*100000;
		$("[purpose=pressure_bar]").val(bar);
		$("[purpose=pressure_psi]").val(psi);
		$("[purpose=pressure_atm]").val(atm);
		$("[purpose=pressure_pa]").val(atm);
	}
	else if(fal=="pa")
	{
		var bar=val/100000;
		var psi=bar*14.5038;
		var atm=bar*0.986923;
		var tor=bar*750.062;
		$("[purpose=pressure_tor]").val(tor);
		$("[purpose=pressure_bar]").val(bar);
		$("[purpose=pressure_psi]").val(psi);
		$("[purpose=pressure_atm]").val(atm);
	}
	else if(fal=="atm")
	{
		var bar=val/0.986923;
		var psi=bar*14.5038;
		var pa=bar*100000;
		var tor=bar*750.062;
		$("[purpose=pressure_tor]").val(tor);
		$("[purpose=pressure_bar]").val(bar);
		$("[purpose=pressure_psi]").val(psi);
		$("[purpose=pressure_pa]").val(pa);
	}
	else if(fal=="psi")
	{
		var bar=val/14.5038;
		var atm=bar*0.986923;
		var pa=bar*100000;
		var tor=bar*750.062;
		$("[purpose=pressure_tor]").val(tor);
		$("[purpose=pressure_bar]").val(bar);
		$("[purpose=pressure_atm]").val(atm);
		$("[purpose=pressure_pa]").val(pa);
	}
	else if(fal=="bar")
	{
		var bar=val;
		var psi=bar*14.5038;
		var atm=bar*0.986923;
		var pa=bar*100000;
		var tor=bar*750.062;
		$("[purpose=pressure_tor]").val(tor);
		$("[purpose=pressure_psi]").val(psi);
		$("[purpose=pressure_atm]").val(atm);
		$("[purpose=pressure_pa]").val(pa);
	}
}
function speedconversions(fal)
{
	if(fal=="footspers")
	{
		var kmh=val/0.911344;
		var mps=kmh*0.277778;
		var knots=kmh*0.539957;
		var mph=kmh/1.609344;
		$("[purpose=speed_knots]").val(knots);
		$("[purpose=speed_kmh]").val(kmh);
		$("[purpose=speed_mph]").val(mph);
		$("[purpose=speed_mps]").val(mps);
	}
	else if(fal=="knots")
	{
		var kmh=val/0.539957;
		var mps=kmh*0.277778;
		var foot=kmh*0.911344;
		var mph=kmh/1.609344;
		$("[purpose=speed_footspers]").val(foot);
		$("[purpose=speed_kmh]").val(kmh);
		$("[purpose=speed_mph]").val(mph);
		$("[purpose=speed_mps]").val(mps);
	}
	else if(fal=="mps")
	{
		var kmh=val/0.277778;
		var mph=kmh/1.609344;
		var knots=kmh*0.539957;
		var foot=kmh*0.911344;
		$("[purpose=speed_footspers]").val(foot);
		$("[purpose=speed_kmh]").val(kmh);
		$("[purpose=speed_mph]").val(mph);
		$("[purpose=speed_knots]").val(knots);
	}
	else if(fal=="mph")
	{
		var kmh=val*1.609344;
		var mps=kmh*0.277778;
		var knots=kmh*0.539957;
		var foot=kmh*0.911344;
		$("[purpose=speed_footspers]").val(foot);
		$("[purpose=speed_kmh]").val(kmh);
		$("[purpose=speed_mps]").val(mps);
		$("[purpose=speed_knots]").val(knots);
	}
	else if(fal=="kmh")
	{
		var kmh=val;
		var mph=kmh/1.609344;
		var mps=kmh*0.277778;
		var knots=kmh*0.539957;
		var foot=kmh*0.911344;
		$("[purpose=speed_footspers]").val(foot);
		$("[purpose=speed_mph]").val(mph);
		$("[purpose=speed_mps]").val(mps);
		$("[purpose=speed_knots]").val(knots);	
	}
}
function decimaltobinary()
{
	$("[purpose=binary_num]").val((val >>> 0).toString(2));
}
function binarytodecimal()
{
	$("[purpose=decimal_num]").val(parseInt(val, 2));
}
function convert(fig)
{
	if(fig=="ran")
	{
		var val=parseInt(ran);
		cel=((val - 491.67) * (5/9)).toFixed(2);
		kel=(val*(5/9)).toFixed(2);
		fah=(val-459.67).toFixed(2);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="kel")
	{
		var val=parseInt(kel);
		cel=(val-273.15).toFixed(2);
		fah=((val*(9/5)) - 459.67).toFixed(2);
		ran=(cal*(9/5)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=fahren]").val(fah);
	}
	if(fig=="f")
	{
		var val=parseInt(fah);
		ran=(val+459.67).toFixed(2);
		cel=((val-32)*(5/9)).toFixed(2);
		kel=((val+459.67)*(5/9)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="cel")
	{
		var val=parseInt(cel);
		ran=((val+273.15) * (9/5)).toFixed(2);
		fah=((val*(9/5))+32).toFixed(2);
		kel=((val+273.15)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="cen")
	{
		var val=parseInt(cen);
		ran=((val+273.15) * (9/5)).toFixed(2);
		fah=((val*(9/5))+32).toFixed(2);
		kel=((val+273.15)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cel]").val(val);
		$("[purpose=kel]").val(kel);
	}
	
}