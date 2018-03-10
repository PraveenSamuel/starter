$('select').on('change', function() {
	console.log(this.value);
  sessionStorage.setItem("activity",this.value);
  calCallBack();
});
$("[purpose=cal_age]").on("change paste keyup", function() {
	val=$(this).val();
	calCallBack();
});
$("[purpose=cal_height]").on("change paste keyup", function() {
	val=$(this).val();
	calCallBack();
});
$("[purpose=cal_weight]").on("change paste keyup", function() {
	val=$(this).val();
	calCallBack();
});



function setGender(val)
{
	if(val=='f')
	{
		sessionStorage.setItem("gender","f");
	}
	else if(val=='m')
	{
		sessionStorage.setItem("gender","m");
	}
	calCallBack();
}
function calImpunitChange(event,id)
{
	var oldunit=$("#"+id).html().split('<')[0];
	var hOrW;
	if(id=="cal_imp_hei_drp")
	{
		hOrW='h';
	}
	else
	{
		hOrW='w';
	}
	var current_unit=event.target.innerHTML;//li clicked element value 
	var value=inputValueCorresToDrpDwn(id);//input box value
	$("#"+id).html(currentUnitWithoutBraces(current_unit));
	var newvalue=OldUnitToCurrentUnit(hOrW,oldunit,$("#"+id).html(),value);
	if(id=="cal_imp_hei_drp")
	{
		$("[purpose=cal_height]").val(newvalue);
	}
	else
	{
		$("[purpose=cal_weight]").val(newvalue);
	}
	calCallBack();
}
function calCallBack()
{
	var gender=sessionStorage.getItem("gender");
	var activity=parseFloat(sessionStorage.getItem("activity"));
	var height=parseInt($("[purpose=cal_height]").val());
	var weight=parseInt($("[purpose=cal_weight]").val());
	var age=$("[purpose=cal_age]").val();
	

	var height_unit=$("#cal_imp_hei_drp").html();
	var weight_unit=$("#cal_imp_wei_drp").html();
	height_unit=height_unit.split('<')[0].trim();
	weight_unit=weight_unit.split('<')[0].trim();


	var cal_height=convertTostandardHeight(height_unit,height);
	var cal_weight=convertTostandardWeight(weight_unit,weight)/1000;


	var ans;
	if(gender=="m")
	{
		ans=((10*cal_weight)+(6.25*cal_height)-(5*age)+5)*activity;
	}
	else if(gender=="f")
	{
		ans=((10*cal_weight)+(6.25*cal_height)-(5*age)-161)*activity;
	}
	$("[purpose=cal_imp]").val(ans);
}
function OldUnitToCurrentUnit(hOrW,old_unit,new_unit,value)
{
	old_unit=old_unit.trim();
	new_unit=new_unit.trim();
	var cm;
	var ans;

	if(hOrW=='h')
	{
		ans=heightConversion(old_unit,new_unit,value);
	}
	if(hOrW=='w')
	{
		ans=weightConversion(old_unit,new_unit,value);
	}
	return ans;
}