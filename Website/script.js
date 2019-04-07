
const Output = document.getElementById("Output");
//var Start_Notifications = ['Einkaufen', '10.04.2019', 'Aufräumen', '8.04.2019'];
//var Dataarray_1 = [Date_input.value, Discription_input.value];
var Date_inputv;
var Discription_inputv;
var People

class Person {
	constructor(Name, Gebiet, Bild_id, Output_id) {
		this.Name = Name;
		this.Gebiet = Gebiet;
		this.Bild_id = Bild_id;
		this.Output_id = Output_id;
		this.HTMLcode =`
			< fieldset id = "fieldset" > 
				< img id = "profile_pic" src = "profile_pic.png"; /> 
					< h1 id = "Titel" > Name</h1 >
					<br />
				<p class="Text Position">Position</p>
			</fieldset > `;
	}
}

class Store_Data {
	constructor(Name, Output_id) {
		this.Name = Name;

		this.Output_id = Output_id;
	}


	Upload_data(data1, data2) {
		console.log(this.Name);
		const Data1 = data1;
		const Data2 = data2;
		const MyName = this.Name;
		var retrievedObject = localStorage.getItem(this.Name);
		var Old_Dataarray = JSON.parse(retrievedObject);
		if (Data1 && Data2) {
			this.Name = [Data1, Data2];
			console.log(this.Name);
			if (Old_Dataarray) {
				var new_Dataarray = Old_Dataarray.concat(this.Name);
			}
			else {
				var new_Dataarray = this.Name;
			}
			console.log(new_Dataarray);
			localStorage.setItem(MyName, JSON.stringify(new_Dataarray));
			location.reload();
			console.log(JSON.stringify(new_Dataarray));
			console.log("OK2");
		}


	}
	write_data() {
		var retrievedObject = localStorage.getItem(this.Name);
		var Old_Notifications = JSON.parse(retrievedObject);
		if (Old_Notifications) {
			document.getElementById(this.Output_id).innerHTML += `
				<table>
					<thead>
						<tr>
							<th class="Spalte">
								Datum
							</th>
							<th class="Spalte">
								Beschreibung
							</th>
							<th class="Spalte"> 
								abgeschlossen?
							</th>
						</tr>
					</thead>`
			for (let i = 0; i < Old_Notifications.length; i += 2) {
				document.getElementById(this.Output_id).innerHTML += `
					<table>
						<tr>
							<th class="Spalte">
								${Old_Notifications[i]}
							</th>
							<th class="Spalte">
								${Old_Notifications[i + 1]}
							</th>
							<th class="Spalte">
								<button type="button" id="Input_BTN_erledigt" onclick="${this.Name}.clear_Element(${i})">
									Erledigt
								</button>
							</th>
						</tr>
					</table>`;
			}
			document.getElementById(this.Output_id).innerHTML += `</table>`;
		}
	}
	clear_Element(num) {
		var retrievedObject = localStorage.getItem(this.Name);
		var Old_Notifications = JSON.parse(retrievedObject);
		for (let i = num; i < Old_Notifications.length; i += 2) {
			Old_Notifications[i] = Old_Notifications[i + 2];
			Old_Notifications[i + 1] = Old_Notifications[i + 3];
		}
		Old_Notifications.pop();
		Old_Notifications.pop();
		localStorage.setItem(this.Name, JSON.stringify(Old_Notifications));
		location.reload();
	}


}

let Aufgaben = new Store_Data('Aufgaben', 'Output_Aufgaben');
let Aktuell = new Store_Data('Aktuell', 'Output_Aktuell');

function Upload_Data(input_id) {
	Date_inputv = document.getElementById("Inputdate").value;
	Discription_inputv = document.getElementById("Inputdisc").value;

	switch (input_id) {
		case 'Input_BTN':
			console.log("OK1");
			console.log(Date_inputv + " : " + Discription_inputv);

			Aufgaben.Upload_data(Date_inputv, Discription_inputv);
			break;
	}
}

function write_all() {

<<<<<<< HEAD
    People = [  new Person('Ben'    , 'Persoenlicher Kontakt'   , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Anna'   , 'Suchtprobleme'           , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Tom'    , 'Steuern'                 , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Felix'  , 'Versicherungen'          , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Klara'  , 'Familie'                 , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Matt'   , 'Nachhilfe'               , 'Pictures/profile_pic', 'Chatfield'),
                new Person('Bob'    , 'Alles'                   , 'Pictures/profile_pic', 'Chatfield')];

    Aufgaben.write_data();
    console.log(People.length);
    console.log(People);
    //document.getElementById("Chatfield").innerHTML += `<fieldset id = "fieldset"> <img id = "profile_pic" src = "profile_pic.png";/> <h1 id = "Titel">Name</h1><br /><p class="Text Position">Position</p></fieldset >`;

    for (let i = 0; i < People.length; i++) {

        console.log(i);
        document.getElementById(People[i].Output_id).innerHTML += `<fieldset id = "fieldset" ><table><tr><th id="thpic"> <img id="profile_pic" src="profile_pic.png" ;/></th><th> <h1 class="h1"> ${People[i].Name}</h1> <br /> <p class="Text">${People[i].Gebiet}</p ></th ></tr ></table ></fieldset >`;
    }
=======
	People = [new Person('Ben', 'Persoenlicher Kontakt', 'profile_pic', 'Chatfield'),
	new Person('Anna', 'Suchtprobleme', 'profile_pic', 'Chatfield'),
	new Person('Tom', 'Steuern', 'profile_pic', 'Chatfield'),
	new Person('Felix', 'Versicherungen', 'profile_pic', 'Chatfield'),
	new Person('Klara', 'Familie', 'profile_pic', 'Chatfield'),
	new Person('Matt', 'Nachhilfe', 'profile_pic', 'Chatfield'),
	new Person('Bob', 'Alles', 'profile_pic', 'Chatfield')];

	Aufgaben.write_data();
	console.log(People.length);
	console.log(People);
	//document.getElementById("Chatfield").innerHTML += `<fieldset id = "fieldset"> <img id = "profile_pic" src = "profile_pic.png";/> <h1 id = "Titel">Name</h1><br /><p class="Text Position">Position</p></fieldset >`;

	for (let i = 0; i < People.length; i++) {

		console.log(i);
		document.getElementById(People[i].Output_id).innerHTML +=
			`<fieldset id = "fieldset" >
				<table>
					<tr>
						<th id="thpic">
							<img id="profile_pic" src="profile_pic.png" ;/>
						</th>
						<th>
							<h1 class="h1">
								${People[i].Name}
							</h1>
							<br />
							<p class="Text">
								${People[i].Gebiet}
							</p >
						</th >
					</tr >
				</table >
			</fieldset >`;
	}
>>>>>>> 258288d2a9a089f047d185e59d732ae052a1fdf8
}
write_all();
/*
function Upload_data() {

    const Date = Date_input.value;
    const Discription = Discription_input.value;

    var retrievedObject = localStorage.getItem('Notifications');
    var Old_Notifications = JSON.parse(retrievedObject);

    if (Date && Discription) {

        var Notification = [Discription, Date];
        if (Old_Notifications) {
            var new_Notifications = Old_Notifications.concat(Notification);
        }
        else {
            var new_Notifications = Notification;
        }
        localStorage.setItem('Notifications', JSON.stringify(new_Notifications));
        location.reload();
        
    }



}*//*
function write() {
    var retrievedObject = localStorage.getItem('Notifications');
    var Old_Notifications = JSON.parse(retrievedObject);
    if (Old_Notifications) {
        for (let i = 0; i < Old_Notifications.length; i += 2) {
            document.getElementById("Output").innerHTML += `${Old_Notifications[i + 1]}: ${Old_Notifications[i]} <button type="button" id="Input_BTN_erledigt" onclick="clear_element(${i})">Erledigt</button><br \>`;
        }
    }
}*//*
function clear_element(num) {
    var retrievedObject = localStorage.getItem('Notifications');
    var Old_Notifications = JSON.parse(retrievedObject);
    for (let i = num; i < Old_Notifications.length; i += 2) {
        Old_Notifications[i] = Old_Notifications[i + 2];
        Old_Notifications[i + 1] = Old_Notifications[i + 3];
    }
    Old_Notifications.pop();
    Old_Notifications.pop();
    localStorage.setItem('Notifications', JSON.stringify(Old_Notifications));
    location.reload();
}
*/




function Notifications_Sort_By_Date() {
	var retrievedObject = localStorage.getItem('Notifications');
	var Old_Notifications = JSON.parse(retrievedObject);
	var New_Notifications;
	if (Old_Notifications.length >= 2) {
		for (let i = 0; i < Old_Notifications.length; i += 2) {

			for (let u = 0; u < Old_Notifications.length; u += 2) {
				switch (Compare_Dates(Old_Notifications[i + 1], Old_Notifications[u + 1])) {
					case 0:
						break;
					case 1:



						break;
					case 2:

						break;

					// Bitte beenden ich bin gerade Brainfucked
				}
			}

		}
	}
}

function Compare_Dates(Date1, Date2) {
	var Tag1 = parseInt(Date1.substring(0, 2), 10);
	var Tag2 = parseInt(Date2.substring(0, 2), 10);

	var Monat1 = parseInt(Date1.substring(3, 5), 10);
	var Monat2 = parseInt(Date2.substring(3, 5), 10);

	var Jahr1 = parseInt(Date1.substring(6, 9), 10);
	var Jahr2 = parseInt(Date2.substring(6, 9), 10);
	var ergebins = 0;
	if (Jahr1 == Jahr2) {
		if (Monat1 == Monat2) {
			if (Tag1 > Tag2) {
				ergebins = 1;
			} else {
				ergebnis = 2;
			}
		}
		else {
			if (Monat1 > Monat2) {
				ergebnis = 1;

			} else {
				ergebnis = 2;
			}
		}
	}
	else {
		if (Jahr1 > Jahr2) {
			ergebnis = 1;
		}
		else {
			ergebnis = 2;
		}
	}
	return ergebnis;
}

//divid is a string
function Add_Header(DivID) {
	document.getElementById(DivID).innerHTML =
		`<a href="Aufgaben.html" , class="BTN_big "> Aufgaben </a>
            <a href="Chats.html" , class="BTN_big "> Chats </a>
            <a href="Kalender.html" , class="BTN_big "> Kalender</a>

            <a href="Help.html" , class="BTN_big "> Help </a>
            <a href="Profil.html" , class="BTN_big "> Profil</a>
            <a href="Rewards.html" , class="BTN_big "> Rewards</a>`;
}

function Add_Header_To_Kacheln() {
	Add_Header("Kacheln");
}

function Add_Menue_Bar() {
	document.getElementById("Menu_bar").innerHTML =
		`<a href="Index.html" , class="BTN_small "><img id="ICON" src="Pictures/Dashboard.png" ; /></a>
		<a href="Aufgaben.html" , class="BTN_small "><img id="ICON" src="Pictures/Aufgabe.png" ; /></a>
		<a href="Kalender.html" , class="BTN_small "><img id="ICON" src="Pictures/Kalender.png" ; /></a>
		<a href="Help.html" , class="BTN_small "> <img id="ICON" src="Pictures/Help.png" ; /></a>
		<a href="Profil.html" , class="BTN_small "> <img id="ICON" src="Pictures/Profil.png" ; /></a>
		<a href="Rewards.html" , class="BTN_small "><img id="ICON" src="Pictures/Rewards.png" ; /></a>`
}
