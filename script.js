function p() {
    // document.getElementById("periode").innerHTML = `<h1 class="periodep"></h1>`
    document.getElementById("periode").innerHTML = `<h1 class="periodep">${new Intl.DateTimeFormat("id-ID", {month: "long", year: "numeric"}).format(new Date(new Date().getFullYear(), new Date().getMonth() -1)).toUpperCase()}</h1>`
}
function showTopvoter() {
    fetch(`${secrets.API}`)
    .then((res) => res.json())
    .then(data => {
        var date = new Date();
        let currentMonth = date.getMonth() + 1;
        let previousMonth = date.getMonth()
        let year = date.getFullYear();
        let daysPreviousMonth = new Date(year, previousMonth, 0).getDate();
        let daysCurrentMonth = new Date(year, currentMonth, 0).getDate();
        let str = ''
        for (const top of data.voters.filter(p => p.votes == daysPreviousMonth)) {
            let list = document.getElementById("list")
            str += `<tr><td>${top.nickname}</td><td>${top.votes}</td></tr>`
            
            list.innerHTML = str;
        }
    })

        

}
function experiment() {
    // let tanggal = new Intl.DateTimeFormat("id-ID", {day: "numeric"}).format(new Date())

    console.log(daysInMonth)
    // console.log(month)
    console.log(year)
}
    p()
    // experiment()

    showTopvoter()

    document.querySelector('button').addEventListener('click', function() {
        html2canvas(document.querySelector('.output'), {
            onrendered: function(canvas) {
            // document.body.appendChild(canvas);
            // let url = document.createElement('a')

            return Canvas2Image.saveAsPNG(canvas);
          }
        });
      });



    
