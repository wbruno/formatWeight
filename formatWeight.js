function id(el){
    return document.getElementById(el);
}
function zeroFill(amount) {
	var fill = '';
	while(amount--) {
		fill += '0';
	}
	return fill;
}
function formatWeight(v){
	var integer = 0,
		c = '';

	v = v + '';
	integer = v.split(',')[0];

	v = v.replace(/\D/g, "");
	v = v.replace(/^[0]+/, "");

	if(v.length <= 4 || !integer)
	{
		c = zeroFill(4 - v.length);
		v = '0,' + c + v;
	} else {
		v = v.replace(/^(\d{1,})(\d{4})$/, "$1,$2");
	}

	return v;
}