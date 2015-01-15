/* function makeID() {
	var text="";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+?><"
	for (var i = 0; i < 11; i++) {
		text += possible.charAt(Math.floor(Math.random()*possible.length));
 	}
 	document.getElementById("password").innerHTML = text;
} */

function makePW() {

	var strength = document.getElementById("pw_strength").value;
	console.log(strength);

	var textArr=[];
	var textStr = "";
	var possible_weak = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var possible_normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
	var possible_strong = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+?";
	var possible_xstrong = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+?áéíóâêîôûäëïöüàèìòù¿¡œ∑®†¥øπ«æ…¬˚∆©ƒ∂ßåΩ≈ç√∫˜µ≤≥÷";

	if (strength == "pw_weak") {
		for (var i = 0; i < 5; i++) {
			textArr.push(possible_weak.charAt(Math.floor(Math.random()*possible_weak.length)));
 		}
	} else if (strength == "pw_normal") {
		for (var i = 0; i < 8; i++) {
			textArr.push(possible_normal.charAt(Math.floor(Math.random()*possible_normal.length)));
 		}
	} else if (strength == "pw_strong") {
		for (var i = 0; i < 12; i++) {
			textArr.push(possible_strong.charAt(Math.floor(Math.random()*possible_strong.length)));
 		}
	} else {
		for (var i = 0; i < 20; i++) {
			textArr.push(possible_xstrong.charAt(Math.floor(Math.random()*possible_xstrong.length)));
 		}
	}

 	textStr = textArr.join("");
 	
 	/* was a failed attempt at escaping < signs so they didn't cut displayed password short
 	for (var x = 0; x < text.length; x++) {
 		if (text.charAt(x) === "<") {
 			console.log("**********");
 			text = [text.slice(0, x), "\\", text.slice(x)].join('');
 			break;
 		}
 	}
 	*/

 	document.getElementById("password").innerHTML = textStr;
}