// // task 1
// let xhr1 = new XMLHttpRequest();

// xhr1.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', true);

// xhr1.send();

// xhr1.onreadystatechange = function() {
//   if (xhr1.readyState != 4) return;

//   if (xhr1.status != 200) {
//     alert(xhr1.status + ': ' + xhr1.statusText);
//   } else {
//     console.log(xhr1.responseText);
//   }
// }

// task 2
let xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json', true);

xhr2.send();

xhr2.onreadystatechange = function() {
    
    if (xhr2.status != 200) {
        alert(xhr2.status + ': ' + xhr2.statusText);
    } else {
      console.log(xhr2.responseText);
    }
}

xhr2.onreadystatechange = function() {
    if (xhr2.readyState != 4) return;
    if (xhr2.status != 200) {
        console.log(xhr2.status + ': ' + xhr2.statusText);
    } else {
        let visitors = JSON.parse(xhr2.responseText);
        let sortVisitors;
        var isReverse = true;

        function getSortById() {
            if (isReverse) {
                sortVisitors = [...visitors].sort((a, b) => b.id - a.id);
                isReverse = !isReverse;
            } else {
                sortVisitors = [...visitors].sort((a, b) => a.id - b.id);
                isReverse = !isReverse;
            }
        }
        getSortById();
        fillTable();
    
        function getSortByDate() {
            if (isReverse) {
                isReverse = !isReverse;
                return sortVisitors = [...visitors].sort(function(a, b) {
                    if (new Date(a.createdAt) > new Date(b.createdAt)) {
                        return 1;
                    }
                    if (new Date(a.createdAt) < new Date(b.createdAt)) {
                        return -1;
                    }
                })
            } else {
                isReverse = !isReverse;
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
        }

        function getSortByName(field) {
            console.log(field);
            if (isReverse) {
                isReverse = !isReverse;
                return sortVisitors = [...visitors].sort(function(a, b) {
                    if (a.field > b.field) {
                        return 1;
                    }
                    if (a.field < b.field) {
                        return -1;
                    }
                })
            } else {
                isReverse = !isReverse;
                return sortVisitors = [...visitors].sort(function(a, b) {
                    if (a.field < b.field) {
                        return 1;
                    }
                    if (a.field > b.field) {
                        return -1;
                    }
                    return 0;
                })
            }
        }
        
        function getSortByEmail() {
            if (isReverse) {
                isReverse = !isReverse;
                return sortVisitors = [...visitors].sort(function(a, b) {
                    if (a.email > b.email) {
                        return 1;
                    }
                    if (a.email < b.email) {
                        return -1;
                    }
                })
            } else {
                isReverse = !isReverse;
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
        }
        
        function getSortByDescription() {
            if (isReverse) {
                isReverse = !isReverse;
                return sortVisitors = [...visitors].sort(function(a, b) {
                    if (a.description > b.description) {
                        return 1;
                    }
                    if (a.description < b.description) {
                        return -1;
                    }
                })
            } else {
                isReverse = !isReverse;
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
    let tableName = document.getElementById('name');
    let email = document.getElementById('email');
    let description = document.getElementById('description');
    
    function clearTable() {
        let td = document.querySelectorAll('td');
    
        for (let i = 0; i < td.length; i++) {
            td[i].remove();
        }
    
    }
    
    id.addEventListener('click', function() {
        clearTable();
        getSortById();
        fillTable();
    })
    
    tableName.addEventListener('click', function() {
        clearTable();
        getSortByName(name);
        fillTable();
    })
    
    email.addEventListener('click', function() {
        clearTable();
        getSortByEmail();
        fillTable();
    })
    
    description.addEventListener('click', function() {
        clearTable();
        getSortByDescription();
        fillTable();
    })
    
    date.addEventListener('click', function() {
        clearTable();
        getSortByDate();
        fillTable();
    })
}

// task 3
var page = 1;

function incPage() {
    page += 1;
}

function request() {

    let xhr3 = new XMLHttpRequest();

    xhr3.open('GET', `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`, true);
    
    xhr3.send();

    xhr3.onreadystatechange = function() {
        if (xhr3.readyState != 4) return;
        if (xhr3.status != 200) {
            console.log(xhr3.status + ': ' + xhr3.statusText);
        } else {
            var visitors = JSON.parse(xhr3.responseText);
            
            function fillTable() {
                let table = document.querySelector('table');
        
                for (let i = 0; i < visitors.data.length; i++) {
                    let tableRow = document.createElement('tr');
                    
                    table.appendChild(tableRow);
                    
                    for (let j = 0; j < 1; j++) {
                        let date = new Date(visitors.data[i].createdAt);
                        let year = date.getFullYear();
                        
                        let month = date.getMonth();
                        if (month < 10) month = '0' + month;
        
                        let day = date.getDate();
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
            event.stopPropagation();
            
            if (visitors.loadMore) {
                incPage();
                request();
                fillTable();
                let loadMore = JSON.parse(xhr3.responseText);
                console.log(loadMore);
            }
        })
    }
}
request();
