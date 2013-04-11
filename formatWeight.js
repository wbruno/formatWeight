function id(el){
    return document.getElementById(el);
}
function formatWeight(v){
	var integer = v.split(',')[0],
		zeroFill = 0,
		c = '';

	v = v.replace(/\D/g, "");
	v = v.replace(/^[0]+/, "");

	if(v.length <= 4 || !integer)
	{
		zeroFill = 4 - v.length;
		while(zeroFill--) {
			c += '0';
		}
		v = '0,' + c + v;

	} else {
		v = v.replace(/^(\d{1,})(\d{4})$/, "$1,$2");
	}

	return v;
}