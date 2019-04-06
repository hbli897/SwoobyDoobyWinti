const Date_input = document.getElementById("Inputdate");
const Discription_input = document.getElementById("Inputdisc");
const Output = document.getElementById("Output");
var Start_Notifications = ['Einkaufen', '10.04.2019', 'Aufräumen', '8.04.2019'];
write();
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



}
function write() {
    var retrievedObject = localStorage.getItem('Notifications');
    var Old_Notifications = JSON.parse(retrievedObject);
    if (Old_Notifications) {
        for (let i = 0; i < Old_Notifications.length; i += 2) {
            document.getElementById("Output").innerHTML += `${Old_Notifications[i + 1]}: ${Old_Notifications[i]} <button type="button" id="Input_BTN_erledigt" onclick="clear_element(${i})">Erledigt</button><br \>`;
        }
    }
}
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

