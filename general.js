console.log("Hello");
function inputValueCorresToDrpDwn(id)
{
	return $("#"+id).closest("div").parent().find("input")[0].value;
}
function currentUnitWithoutBraces(val)
{
	return val.replace("(","").replace(")","").split(" ")[1]
}
function convertTostandardWeight(weight_unit,weight)
{
	var value=weight;
	var grams;
	if(weight_unit=="lb")
	{
		grams=value*453.592;
	}
	else if(weight_unit=="stone")
	{
		grams=value*6350.28800006585;
	}
	else if(weight_unit=="kg")
	{
		grams=value*1000;
	}
	else if(weight_unit=="oz")
	{
		grams=value*28.3495;
	}
	return grams;
}
function convertTostandardHeight(height_unit,height)
{
	var cm;
	var value=height;
	if(height_unit=="in")
	{
		cm=value*2.54;
	}
	else if(height_unit=="ft")
	{
		cm=30.48*value;
	}
	else if(height_unit=="m")
	{
		cm=100*value;
	}
	else if(height_unit=='cm')
	{
		cm=value;
	}
	return cm;
}
function weightConversion(old_unit,new_unit,value)
{
	var grams=0;
	var newvalue=0;
	if(old_unit=="lb")
	{
		grams=value*453.592;
	}
	else if(old_unit=="stone")
	{
		grams=value*6350.28800006585;
	}
	else if(old_unit=="kg")
	{
		grams=value*1000;
	}
	else if(old_unit=="oz")
	{
		grams=value*28.3495;
	}


	if(new_unit=="lb")
	{
		newvalue=grams/453.592;
	}
	else if(new_unit=="stone")
	{
		newvalue=grams/6350.28800006585;
	}
	else if(new_unit=="kg")
	{
		newvalue=grams/1000;
	}
	else if(new_unit=="oz")
	{
		newvalue=grams/28.3495;
	}
	return newvalue;

}
function heightConversion(old_unit,new_unit,value)
{
	if(old_unit=="in")
	{
		cm=value*2.54;
	}
	else if(old_unit=="ft")
	{
		cm=30.48*value;
	}
	else if(old_unit=="m")
	{
		cm=100*value;
	}
	else if(old_unit=='cm')
	{
		cm=value;
	}
	//Now convert the standard value to newvalue accordingly 
	if(new_unit=="m")
	{
		newvalue=cm/100;
	}
	else if(new_unit=="in")
	{
		newvalue=cm/2.54;
	}
	else if(new_unit=="ft")
	{
		newvalue=cm/30.48;
	}
	else if(new_unit=="cm")
	{
		return cm;
	}
	return newvalue;
	
}