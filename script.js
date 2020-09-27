var Geel =  prompt("is de kaas geel");
Geel = Geel.toLowerCase();
if(Geel == "ja"){
	alert("de kaas is geel")
	var Gat = prompt("Zitten er gaten in de kaas?")}
		else{
			alert("de kaas is niet geel")
			var Schimmels = prompt("Heeft de kaas blauwe schimels?")
		}
		if(Schimmels == "ja"){
			alert("Er zitten geen schimmels op de kaas")
			var Korst = prompt("Heeft de kaas een korst?")}
			else{
				var NKorst = prompt("Heeft de kaas een korst?")
				if(NKorst == "ja"){
					alert("U bedoelt: Camembert")
				}
				else{
					alert("U bedoelt: Mozzarella")
				}

			}
			if(Korst == "ja"){
				alert("U bedoelt: Bleu de Rochbaron")
			}
			else{
				alert("Foume d`Ambert")
			}
		if(Gat == "ja"){ 
			alert("er zitten gaten in de kaas")
			var Duur = prompt("Is de kaas belachelijk duur?")}
		else{
			alert("Er zitten geen gaten in de kaas")
			var Hard = prompt("Is de kaas zo hard als een steen?")
				if(Hard == "ja"){
					alert("U bedoelt: Pammigiano Reggiano")

				}
				else{
						alert("U bedoelt: Goudse kaas")
					}
		}
				if(Duur == "ja"){
				alert("U bedoelt: Emmenthaler")
			}
				else{
					alert("U bedoelt: Leerdammer")
				}
