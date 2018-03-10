$('select').on('change', function() {
  sessionStorage.setItem("activity",this.value);
})
function setGender(val)
{
	if(val=='f')
	{
		sessionStorage.setItem("gender","female");
	}
	else if(val=='m')
	{
		sessionStorage.setItem("gender","male");
	}
}
function calImpunitChange(event,id)
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
		$("[purpose=cal_imp_height]").val(newvalue);
	}
	else
	{
		$("[purpose=cal_imp_weight]").val(newvalue);
	}
}