document.querySelector('#to-marker').addEventListener("click",function(e){
			var ele = document.createElement('CODE');
			var eletext = document.querySelector('#thehexcode').textContent;
			var text = document.createTextNode(eletext);
			ele.appendChild(text);
			var secele = document.createElement('LI');
			secele.appendChild(ele);
			secele.style.backgroundColor = eletext;
			document.querySelector('#laps > ul').appendChild(secele);
});


document.querySelector('#refresh-marker-list').addEventListener("click",function(e){
		var lis = document.querySelectorAll('li');
		for(var i =0 ; i < lis.length;i++)
		{
			lis[i].remove();
		};
});