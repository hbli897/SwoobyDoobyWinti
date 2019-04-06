
const Output = document.getElementById("Output");
//var Start_Notifications = ['Einkaufen', '10.04.2019', 'Aufr�umen', '8.04.2019'];
//var Dataarray_1 = [Date_input.value, Discription_input.value];
var Date_inputv;
var Discription_inputv; 

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
            for (let i = 0; i < Old_Notifications.length; i += 2) {
                document.getElementById(this.Output_id).innerHTML += `${Old_Notifications[i + 1]}: ${Old_Notifications[i]} <button type="button" id="Input_BTN_erledigt" onclick="Aufgaben.clear_Element(${i})">Erledigt</button><br \>`;
            }
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
let Aufgaben = new Store_Data('Aufgaben' , 'Output_Aufgaben');

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
    Aufgaben.write_data();
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
                switch(Compare_Dates(Old_Notifications[i + 1], Old_Notifications[u + 1])) {
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

