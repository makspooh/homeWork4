// task 1
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', false);

xhr.send();

if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
} else {
    // console.log(xhr.responseText);
}

// task 2
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json', false);

xhr.send();

if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
} else {
    let visitors = JSON.parse(xhr.responseText);
    let sortVisitors;

    function getSortVisitors() {
        return sortVisitors = [...visitors].sort((a, b) => b.id - a.id);
    }
    getSortVisitors();
    fillTable();

    function getSortVisitorsReverse() {
        return sortVisitors = [...visitors].sort((a, b) => a.id - b.id);
    }

    function getSortByDate() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (new Date(a.createdAt) > new Date(b.createdAt)) {
                return 1;
            }
            if (new Date(a.createdAt) < new Date(b.createdAt)) {
                return -1;
            }
            return 0;            
        })
    }

    function getSortByDateReverse() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (new Date(a.createdAt) < new Date(b.createdAt)) {
                return 1;
            }
            if (new Date(a.createdAt) > new Date(b.createdAt)) {
                return -1;
            }
            return 0;            
        })
    }

    function getSortByName() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;            
        })
    }
    
    function getSortByNameReverse() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;            
        })
    }
    
    function getSortByEmail() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.email > b.email) {
                return 1;
            }
            if (a.email < b.email) {
                return -1;
            }
            return 0;            
        })
    }
    
    function getSortByEmailReverse() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.email < b.email) {
                return 1;
            }
            if (a.email > b.email) {
                return -1;
            }
            return 0;            
        })
    }
    
    function getSortByDescription() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.description > b.description) {
                return 1;
            }
            if (a.description < b.description) {
                return -1;
            }
            return 0;            
        })
    }
    
    function getSortByDescriptionReverse() {
        return sortVisitors = [...visitors].sort(function(a, b) {
            if (a.description < b.description) {
                return 1;
            }
            if (a.description > b.description) {
                return -1;
            }
            return 0;            
        })
    }

    function fillTable() {
        let table = document.querySelector('table');

        for (let i = 0; i < sortVisitors.length; i++) {
            let tableRow = document.createElement('tr');

            table.appendChild(tableRow);
            
            for (let j = 0; j < 1; j++) {
                let date = new Date(sortVisitors[i].createdAt);
                let year = date.getFullYear(4);

                let month = date.getMonth(5);
                if (month < 10) month = '0' + month;

                let day = date.getDate(5);
                if (day < 10) day = '0' + day;

                let tableCell = document.createElement('td');
                tableCell.textContent = sortVisitors[i].id;
                tableRow.appendChild(tableCell);

                tableCell = document.createElement('td');
                tableCell.textContent = year + '.' + month + '.' + day;
                tableRow.appendChild(tableCell);

                tableCell = document.createElement('td');
                tableCell.textContent = sortVisitors[i].name;
                tableRow.appendChild(tableCell);

                tableCell = document.createElement('td');
                tableCell.textContent = sortVisitors[i].email;
                tableRow.appendChild(tableCell);

                tableCell = document.createElement('td');
                tableCell.textContent = sortVisitors[i].description;
                tableRow.appendChild(tableCell);
            }
        }
    }
}

let id = document.getElementById('id');
let date = document.getElementById('date');
let name = document.getElementById('name');
let email = document.getElementById('email');
let description = document.getElementById('description');
let table = document.querySelector('table');

function clearTable() {
    let td = document.querySelectorAll('td');

    for (let i = 0; i < td.length; i++) {
        td[i].remove();
    }

}

id.addEventListener('click', function() {
    let firstTd = document.querySelector('td').textContent;
    let td = document.querySelectorAll('td');
    let lastTd = td[td.length - 5].textContent;

    if (firstTd > lastTd) {
        clearTable();
        getSortVisitorsReverse();
        fillTable();
        firstTd;
    } else {
        clearTable();
        getSortVisitors();
        fillTable();
    }
})

let flag = 0;

name.addEventListener('click', function() {
    if (flag % 2 == 0) {
        clearTable();
        getSortByName();
        fillTable();
        flag += 1;
    } else if (flag % 2 != 0) {
        clearTable();
        getSortByNameReverse();
        fillTable();
        flag += 1;
    }
})

email.addEventListener('click', function() {
    if (flag % 2 == 0) {
        clearTable();
        getSortByEmail();
        fillTable();
        flag += 1;
    } else if (flag % 2 != 0) {
        clearTable();
        getSortByEmailReverse();
        fillTable();
        flag += 1;
    }
})

description.addEventListener('click', function() {
    if (flag % 2 == 0) {
        clearTable();
        getSortByDescription();
        fillTable();
        flag += 1;
    } else if (flag % 2 != 0) {
        clearTable();
        getSortByDescriptionReverse();
        fillTable();
        flag += 1;
    }
})

date.addEventListener('click', function() {
    if (flag % 2 == 0) {
        clearTable();
        getSortByDate();
        fillTable();
        flag += 1;
    } else if (flag % 2 != 0) {
        clearTable();
        getSortByDateReverse();
        fillTable();
        flag += 1;
    }
})

// task 3
var page = 1;

function incPage() {
    page += 1;
}

function request() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`, false);
    
    xhr.send();

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        var visitors = JSON.parse(xhr.responseText);
        
        function fillTable() {
            let table = document.querySelector('table');
    
            for (let i = 0; i < visitors.data.length; i++) {
                let tableRow = document.createElement('tr');
                
                table.appendChild(tableRow);
                
                for (let j = 0; j < 1; j++) {
                    let date = new Date(visitors.data[i].createdAt);
                    let year = date.getFullYear(4);
                    
                    let month = date.getMonth(5);
                    if (month < 10) month = '0' + month;
    
                    let day = date.getDate(5);
                    if (day < 10) day = '0' + day;
    
                    let tableCell = document.createElement('td');
                    tableCell.textContent = visitors.data[i].id;
                    tableRow.appendChild(tableCell);
                    
                    tableCell = document.createElement('td');
                    tableCell.textContent = year + '.' + month + '.' + day;
                    tableRow.appendChild(tableCell);
    
                    tableCell = document.createElement('td');
                    tableCell.textContent = visitors.data[i].name;
                    tableRow.appendChild(tableCell);
    
                    tableCell = document.createElement('td');
                    tableCell.textContent = visitors.data[i].email;
                    tableRow.appendChild(tableCell);
                    
                    tableCell = document.createElement('td');
                    tableCell.textContent = visitors.data[i].description;
                    tableRow.appendChild(tableCell);
                }
            }
        }
    }
    fillTable();
    
    let button = document.querySelector('button');
    
    button.addEventListener('click', function(event) {
        event.stopImmediatePropagation();
        
        if (visitors.loadMore) {
            incPage();
            request();
            fillTable();
            console.log(page);
        }
        console.log(JSON.parse(xhr.responseText))
    })
}
request();