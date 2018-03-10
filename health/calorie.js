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