var mW;
var kW;
var W;
var MW;
var GW;
var dBm;
var dBW;
var hpI;
var hpM;
var hpE;
var BTU;

$("[purpose=mW]").on("change paste keyup", function() {
   mW=$(this).val(); 
   convert("mW");
});
$("[purpose=kW]").on("change paste keyup", function() {
   kW=$(this).val(); 
   convert("kW");
});
$("[purpose=W]").on("change paste keyup", function() {
   W=$(this).val(); 
   convert("W");
});
$("[purpose=MW]").on("change paste keyup", function() {
   MW=$(this).val(); 
   convert("MW");
});
$("[purpose=GW]").on("change paste keyup", function() {
   GW=$(this).val(); 
   convert("GW");
});
$("[purpose=dBm]").on("change paste keyup", function() {
   dBm=$(this).val(); 
   convert("dBm");
});
$("[purpose=dBW]").on("change paste keyup", function() {
   dBW=$(this).val(); 
   convert("dBW");
});
$("[purpose=hpI]").on("change paste keyup", function() {
   hpI=$(this).val(); 
   convert("hpI");
});
$("[purpose=hpE]").on("change paste keyup", function() {
   hpE=$(this).val(); 
   convert("hpE");
});
$("[purpose=hpM]").on("change paste keyup", function() {
   hpM=$(this).val(); 
   convert("hpM");
});
$("[purpose=BTU]").on("change paste keyup", function() {
   BTU=$(this).val(); 
   convert("BTU");
});
function convert(fig) {
	if(fig == "W"){
		var val=parseInt(W);
		mW = (1000*val).toFixed(4);
		kW = (val/1000).toFixed(4);
		MW = (val/1000000).toFixed(4);
		GW = (val/1000000000).toFixed(4);
		dBm = (10*(Math.log10(1000*val/1))).toFixed(4);
		dBW = (10*(Math.log10(val/1))).toFixed(4);
		hpI = (val/745.699872).toFixed(4);
		hpE = (val/746).toFixed(4);
		hpM = (val/735.49875).toFixed(4);
		BTU = (3.412141633*val).toFixed(4);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
	}
	if(fig == "dBm"){
		var val=parseInt(dBm);
		W = (1*Math.pow(10,(val/10))/1000).toFixed(4);
		dBW = (val-30).toFixed(4);
		$("[purpose=W]").val(W);
		$("[purpose=dBW]").val(dBW);
	}
}















