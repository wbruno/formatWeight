describe("formatWeight", function() {

	var arrIn = [
		'1', '12', '123', '1234', '12345', '123456', '1234567', 'abc', 'a1b2c3'
	],
	arrOut = [
		'0,0001', '0,0012', '0,0123', '0,1234', '1,2345', '12,3456', '123,4567', '0,0000', '0,0123'
	],
	i,
	arrInLength = arrIn.length;


	for(i = 0; i<arrInLength; i++) {

		(function(entry, output_expected){

			it( entry + " should be equal " + output_expected, function() {
				expect(formatWeight(entry)).toEqual(output_expected);
			});

		}(arrIn[i], arrOut[i]));
	}

});