describe("formatWeight", function() {

	var arrIn = [
		'1', '12', '123', '1234', '12345', '123456', '1234567'
	],
	arrOut = [
		'0,0001', '0,0012', '0,0123', '0,1234', '1,2345', '12,3456', '123,4567'
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
	describe("formatWeight weird inputs", function() {
		it( "abc" + " should be equal " + "0,0000", function() {
			expect(formatWeight("abc")).toEqual("0,0000");
		});
		it( "1a2b3c" + " should be equal " + "0,0123", function() {
			expect(formatWeight("1a2b3c")).toEqual("0,0123");
		});
	});

	describe("zeroFill", function() {
		it( "3" + " should be equal " + "000", function() {
			expect(zeroFill(3)).toEqual("000");
		});
		it( "2" + " should be equal " + "00", function() {
			expect(zeroFill(2)).toEqual("00");
		});
		it( "1" + " should be equal " + "0", function() {
			expect(zeroFill(1)).toEqual("0");
		});
	});

});