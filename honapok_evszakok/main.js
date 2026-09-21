let months = [
    {month: "Január", season: "Tél", days: 31, holiday: "Újév"},
    {month: "Február", season: "Tél", days: 28, holiday: "Farsang"},
    {month: "Március", season: "Tavasz", days: 31, holiday: "Március 15."},
    {month: "Április", season: "Tavasz", days: 30, holiday: "Húsvét"},
    {month: "Május", season: "Tavasz", days: 31, holiday: "A munka ünnepe"},
    {month: "Június", season: "Nyár", days: 30, holiday: "Pünkösd"},
    {month: "Július", season: "Nyár", days: 31, holiday: "Nincs ünnep"},
    {month: "Augusztus", season: "Nyár", days: 31, holiday: "Államalapítás ünnepe"},
    {month: "Szeptember", season: "Ősz", days: 30, holiday: "Nincs ünnep"},
    {month: "Október", season: "Ősz", days: 31, holiday: "Október 23."},
    {month: "November", season: "Ősz", days: 30, holiday: "Mindenszentek"},
    {month: "December", season: "Tél", days: 31, holiday: "Karácsony"}
];


function getMonthInfo(monthInput){
    return months[monthInput - 1];
}

function start(){
    
    try{
        let month = Number(document.getElementById("monthInput").value);
        
        let output = document.getElementById("output")

        if(isNaN(month)){
            throw new Error("Nem számot adtál meg!")
        }
        else if(month < 1 || month > 12){
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }
        
        let monthID = getMonthInfo(month);
        output.textContent = `Hónap: ${monthID.month}, Évszak: ${monthID.season}, Napok száma: ${monthID.days}, Ünnep: ${monthID.holiday}`;
        
    }
    catch(error){
        output.textContent = "Hiba: " + error.message;
    }
    document.getElementById("monthInput").value = "";
}

function modifyHoliday(){
    document.getElementById("outputMonth").textContent = ""
    document.getElementById("outputSeason").textContent = ""
    document.getElementById("outputDays").textContent = ""
    document.getElementById("outputHoliday").textContent = ""
    try{
        let month = Number(document.getElementById("monthInput").value);

        if(isNaN(month)){
            throw new Error("Nem számot adtál meg!")
        }
        else if(month < 1 || month > 12){
            
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }
        
        let monthID = getMonthInfo(month);
        document.getElementById("outputMonth").textContent = `Hónap: ${monthID.month}`
        document.getElementById("outputSeason").textContent = `Évszak: ${monthID.season}`
        document.getElementById("outputDays").textContent = `Napok száma: ${monthID.days}`

        let holidayModify = document.createElement("input")
        holidayModify.value = months[month-1].holiday
        document.getElementById("outputHoliday").textContent = `Ünnep:`
        document.getElementById("outputHoliday").appendChild(holidayModify)

        let save = document.createElement("button")
        save.textContent = "Mentés"
        save.onclick = function mentes(){
            months[month-1].holiday = holidayModify.value
            let newHoliday = getMonthInfo(month)
            document.getElementById("outputNewHoliday").textContent = `Új ünnep: ${newHoliday.holiday}`
        }
        document.getElementById("outputHoliday").appendChild(save)
        document.getElementById("outputNewHoliday").textContent = ""
        
    }
    catch(error){
        outputMonth.textContent = "Hiba: " + error.message;
    }
    document.getElementById("monthInput").value = "";
    

}
