function Dahej() {
    let Damaadname = document.getElementById('name').value;
    let Damaadage = document.getElementById('age').value;
    let DamaadStatus = document.getElementById('job').value;
    let DamaadIncome = document.getElementById('salary').value;

    if (!Damaadname) {
        alert('Please enter the name of the groom.');
        return;
    }

    if (!Damaadage || isNaN(Damaadage) || Damaadage <= 0) {
        alert('Please enter a valid age for the groom.');
        return;
    }

    if (!DamaadStatus) {
        alert('Please enter the profession of the groom.');
        return;
    }

    if (!DamaadIncome || isNaN(DamaadIncome) || DamaadIncome <= 0) {
        alert('Please enter a valid income for the groom.');
        return;
    }

    Damaadage = Number(Damaadage);
    DamaadIncome = Number(DamaadIncome);

    let dowary = DamaadIncome * 2 + 100000;

    let ResultMessage;
    if (Damaadage < 18) {
        ResultMessage = "Pehle ande se to nikal ja bsdk!";
    } else if (DamaadIncome < 40000) {
        ResultMessage = "Income thodi badha le pehle!";
    } else {
        ResultMessage = `Sab thik hai! Dowry should be ₹${dowary}.`;
    }

    alert(ResultMessage);

  
    document.getElementById('dowryForm').reset();
}


