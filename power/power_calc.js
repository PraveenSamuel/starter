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
		mW = (1000*val).toFixed(6);
		kW = (val/1000).toFixed(6);
		MW = (val/1000000).toFixed(6);
		GW = (val/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*val/1))).toFixed(6);
		dBW = (10*(Math.log10(val/1))).toFixed(6);
		hpI = (val/745.699872).toFixed(6);
		hpE = (val/746).toFixed(6);
		hpM = (val/735.49875).toFixed(6);
		BTU = (3.412141633*val).toFixed(6);
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
		W = (1*Math.pow(10,(val/10))/1000).toFixed(6);
		dBW = (val-30).toFixed(6);
		mW = (1*Math.pow(10,(val/10))).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=W]").val(W);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
	}
    if (fig == "kW") {
    	var val = parseInt(kW);
    	BTU = (3412.141633*val).toFixed(6);
    	mW = (1000000*val).toFixed(6);
    	W = (1000*val).toFixed(6);
    	MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
    	$("[purpose=BTU]").val(BTU);
    	$("[purpose=mW]").val(mW);
    	$("[purpose=W]").val(W);
    	$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
    }
    if(fig == "BTU"){
    	var val = parseInt(BTU);
    	W = (val/3.412141633).toFixed(6);
    	mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=W]").val(W);
    }
    if(fig == "GW"){
    	var val = parseInt(GW);
    	W = (Math.pow(10,9)*val).toFixed(6);
    	mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
    	$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=BTU]").val(BTU);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=W]").val(W);
    }
    if(fig == "dBW"){
    	var val = parseInt(dBW);
    	W = (1*Math.pow(10,(val/10))).toFixed(6);
    	mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
    	$("[purpose=W]").val(W);
    	$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
    }
    if(fig == "mW"){
    	var val = parseInt(mW);
    	W = (val/1000).toFixed(6);
    	kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=W]").val(W);
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
    if(fig == "MW"){
    	var val = parseInt(MW);
    	W = (1000000*val).toFixed(6);
    	mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=W]").val(W);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
	}
	if(fig == "hpI"){
		var val = parseInt(hpI);
		W = (745.699872*val).toFixed(6);
		mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpE = (W/746).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=W]").val(W);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
	}
    if(fig == "hpE"){
		var val = parseInt(hpE);
		W = (746*val).toFixed(6);
		mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpM = (W/735.49875).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=W]").val(W);
		$("[purpose=hpM]").val(hpM);
		$("[purpose=BTU]").val(BTU);
	}
	if(fig == "hpM"){
		var val = parseInt(hpM);
		W = (735.49875*val).toFixed(6);
		mW = (1000*W).toFixed(6);
		kW = (W/1000).toFixed(6);
		MW = (W/1000000).toFixed(6);
		GW = (W/1000000000).toFixed(6);
		dBm = (10*(Math.log10(1000*W/1))).toFixed(6);
		dBW = (10*(Math.log10(W/1))).toFixed(6);
		hpI = (W/745.699872).toFixed(6);
		hpE = (W/746).toFixed(6);
		BTU = (3.412141633*W).toFixed(6);
		$("[purpose=mW]").val(mW);
		$("[purpose=kW]").val(kW);
		$("[purpose=MW]").val(MW);
		$("[purpose=GW]").val(GW);
		$("[purpose=dBm]").val(dBm);
		$("[purpose=dBW]").val(dBW);
		$("[purpose=hpI]").val(hpI);
		$("[purpose=hpE]").val(hpE);
		$("[purpose=W]").val(W);
		$("[purpose=BTU]").val(BTU);
	}
}















