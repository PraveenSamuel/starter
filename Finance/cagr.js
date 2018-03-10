var beg_val;
var end_val;
var period_val;
var diff;
var grow_rate;
var total_rate;
var ans;
function initialise()
{
	beg_val=parseInt($("[purpose=beg_val]").val());
 	end_val=parseInt($("[purpose=end_val]").val());
	period_val=parseInt($("[purpose=period_val]").val());
	if(isNaN(beg_val))
	{
		$("[purpose=beg_val]").closest("div.form-group").addClass("has-error");
	}
	else 
	{
		$("[purpose=beg_val]").closest("div.form-group").removeClass("has-error");
	}
	if(isNaN(end_val))
	{
		$("[purpose=end_val]").closest("div.form-group").addClass("has-error");
	}
	else 
	{
		$("[purpose=end_val]").closest("div.form-group").removeClass("has-error");
	}
	if(isNaN(period_val))
	{
		$("[purpose=period_val]").closest("div.form-group").addClass("has-error");
	}
	else 
	{
		$("[purpose=period_val]").closest("div.form-group").removeClass("has-error");
	}
}
$("[purpose=beg_val]").on("change paste keyup", function() {
	initialise();
	calc();
});
$("[purpose=end_val]").on("change paste keyup", function() {
	initialise();
	calc();
});
$("[purpose=period_val]").on("change paste keyup", function() {
	initialise();
	calc();
});
function calc()
{
	if(!isNaN(beg_val) && !isNaN(end_val) && !isNaN(period_val))
	{
		var diff=(end_val-beg_val);
		var total_rate=(diff/beg_val)*100;
		ans=Math.pow((end_val/beg_val),(1/period_val))-1;
		ans=ans*100;
		$("[purpose=grow_rate]").val(ans);
		if(diff!="" && !isNaN(diff))
		{
			$("[purpose=diff]").val(diff);
			$("[purpose=total_rate]").val(total_rate);
		}
	}
}
