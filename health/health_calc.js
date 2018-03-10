$('[purpose="BMI"]').click(function(){
	window.location.href="bmi_calc.html";
});
var val=0;
$("[purpose=bmi_imp_height]").on("change paste keyup", function() {
	val=$(this).val();
	BMIcallBack();
});
$("[purpose=bmi_imp_weight]").on("change paste keyup", function() {
	val=$(this).val();
	BMIcallBack();
});
function BMIunitChange(event,id)
{
	var oldunit=$("#"+id).html().split('<')[0];
	var hOrW;
	if(id=="bmi_imp_hei_drp")
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
	if(id=="bmi_imp_hei_drp")
	{
		$("[purpose=bmi_imp_height]").val(newvalue);
	}
	else
	{
		$("[purpose=bmi_imp_weight]").val(newvalue);
	}
	BMIcallBack();
}
function BMIcallBack()
{
	var weight=$("[purpose=bmi_imp_weight]").val();
	var height=$("[purpose=bmi_imp_height]").val();
	var height_unit=$("#bmi_imp_hei_drp").html();
	var weight_unit=$("#bmi_imp_wei_drp").html();
	height_unit=height_unit.split('<')[0].trim();
	weight_unit=weight_unit.split('<')[0].trim();
	var bmi_height=convertTostandardHeight(height_unit,height)*0.393701;
	var bmi_weight=convertTostandardWeight(weight_unit,weight)*0.00220462;
	var ans=(bmi_weight*703)/(bmi_height*bmi_height);
	$("[purpose=BMI_imp]").val(ans);
}
function OldUnitToCurrentUnit(hOrW,old_unit,new_unit,value)
{
	//Convert to a standard value at first
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