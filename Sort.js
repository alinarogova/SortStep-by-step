/**
 * Created by Алина on 10.03.2016.
 */

function Sort(str) {

    if (typeof str != 'string') {
        str = document.getElementById("inputNumber").value;
    }
    document.body.removeChild(document.getElementById("inputNumber"));

    if (typeof str == 'string'){
    createButton();
    document.body.insertBefore(document.createElement("br"), document.body.children[0]);
    createMainDiv();

    var div = [];
    createDivForNumber(str);
    var i = 1, j = div.length - 1;
    }

    function createButton() {
        var button1 = document.createElement('input');
        button1.type = 'button';
        button1.style.margin = '0 10px';
		button1.id = 'button1';
		document.body.insertBefore(button1, document.body.children[0]);
		button1.onclick = reset;
		button1.value = 'сброс';
		
		var button2 = button1.cloneNode();
		button2.id = 'button2';
		document.body.insertBefore(button2, document.body.children[1]);
		button2.onclick = oneStep;
		button2.value = 'шаг вперёд';
    }

    function createMainDiv() {
        mainDiv = document.createElement('div');
        mainDiv.id = "mainDiv";
        mainDiv.style = "margin: 10px 0 0 10px;" +
            "height: 32px;" +
            "font-weight: bold; " +
            "text-align: center;";
        mainDiv.className = 'mainDiv';
        document.body.insertBefore(mainDiv, document.body.children[0]);
    }

    function createDivForNumber() {
        for (i = 0; i < str.split(",").length; i++) {
            div[i] = document.createElement('div');
            div[i].style = "font-size: 15px;" +
                "border: 1px solid #000;" +
                "width: 30px; " +
                "height:30px;" +
                "float:left;" +
                "padding-top:5px;" +
                "box-sizing: border-box;";
            div[i].innerHTML = parseInt(str.split(",")[i]);
            mainDiv.appendChild(div[i]);
        }
    }

    function reset() {
		
        document.body.removeChild(document.getElementById("mainDiv"));
        document.body.removeChild(document.getElementById("button1"));
        document.body.removeChild(document.getElementById("button2"));

        var input = document.createElement('input');
        input.onchange = Sort;
        input.id = "inputNumber";
        input.style.margin = "15px" ;
        document.body.insertBefore(input, document.body.children[0]);
		
    }

    function oneStep() {
        if (j > 0) {
            if (i > 1)
                div[i - 2].style.backgroundColor = "#fff";
			
            else if (j != div.length - 1) {
                div[j].style.backgroundColor = "#fff";
                div[j + 1].style.backgroundColor = "#c1c1c1";

            }
            if (+div[i].innerHTML < +div[i - 1].innerHTML) {
                var temp = div[i].innerHTML;
                div[i].innerHTML = div[i - 1].innerHTML;
                div[i - 1].innerHTML = temp;

            }

            div[i-1].style.backgroundColor = "#ffc100";
			div[i].style.backgroundColor = "#ffc100";


            if (i == j) {
                i = 1;
                j--;
            }
            else
                i++;
        }
        else {
            if(div.length != 1) 
				div[1].style.backgroundColor = "#c1c1c1";
            div[0].style.backgroundColor = "#c1c1c1";
			alert('Уже отсортирован!');
        }
		
    }
}


