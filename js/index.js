const elem = document.getElementById('elem')

function createCalendar(elem, year, month){

    const firstDayOfMonth = new Date(year,month-1)
    const lastDayOfMonth = new Date(year,month,0)
    console.log(lastDayOfMonth.getDate())
    const rowsCount = Math.ceil(lastDayOfMonth.getDate()/7)
    const table = document.createElement('table')
    const arrayOfDates = new Array(rowsCount*7)
    for (let i = 0; i < arrayOfDates.length-1; i++) {
        if (i===firstDayOfMonth.getDay()-1){
            for (let j = 0; j < lastDayOfMonth.getDate(); j++) {
                arrayOfDates[i+j]=j+1
            }
        }

    }
    console.log(arrayOfDates)

    table.innerHTML = '<tr>\n' +
        '    <th>пн</th>\n' +
        '    <th>вт</th>\n' +
        '    <th>ср</th>\n' +
        '    <th>чт</th>\n' +
        '    <th>пт</th>\n' +
        '    <th>сб</th>\n' +
        '    <th>вс</th></tr>'

    for (let i = 0; i < rowsCount*7; i++) {
        if (!(i%7)){
            const row = document.createElement('tr')
            for (let j = 0; j < 7; j++) {
                const day = document.createElement('td')
                if(arrayOfDates[0]){
                    day.innerHTML=arrayOfDates.shift().toString()
                }else{
                    arrayOfDates.shift()
                }

                row.append(day)
            }
            table.firstElementChild.append(row)
        }


    }

    elem.prepend(table)

}


createCalendar(elem,2012,10)