// task 1
let xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'https://tanuhaua.github.io/datas-file-json/data.json', true);

xhr1.send();

xhr1.onreadystatechange = function() {
  if (xhr1.readyState != 4) return;

  if (xhr1.status != 200) {
    alert(xhr1.status + ': ' + xhr1.statusText);
  } else {
    console.log(xhr1.responseText);
  }
}

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

        getSortByField('id');
        fillTable();
    
        function getSortByDate(sortOrder) {
            return sortVisitors = [...visitors].sort(function(a, b) {
                if (new Date(a.createdAt) > new Date(b.createdAt)) {
                    return sortOrder === '1' ? -1 : 1;
                } else {
                    return sortOrder === '1' ? 1 : -1;
                }
            })
        }
        
        function getSortByField(field, sortOrder) {
            return sortVisitors = [...visitors].sort(function(a, b) {
                if (a[field] > b[field]) {
                    return sortOrder === '1' ? -1 : 1;
                } else {
                    return sortOrder === '1' ? 1 : -1;
                }
            });
        }

        function fillTable() {
            let table = document.querySelector('table');

            getDate = function(index) {
                let tableCell = document.createElement('td');

                let date = new Date(sortVisitors[index].createdAt);
                let year = date.getFullYear();
    
                let month = date.getMonth();
                if (month < 10) month = '0' + month;
    
                let day = date.getDate();
                if (day < 10) day = '0' + day;
    
                tableCell = document.createElement('td');
                tableCell.textContent = year + '.' + month + '.' + day;
    
                return tableCell;
            }

            getData = function(index, field) {
                let tableCell = document.createElement('td');

                let userData = sortVisitors[index][field];

                tableCell = document.createElement('td');
                tableCell.textContent = userData;

                return tableCell;
            }
    
            for (let i = 0; i < sortVisitors.length; i++) {
                let tableRow = document.createElement('tr');
    
                table.appendChild(tableRow);
                
                for (let j = 0; j < 1; j++) {
                    tableRow.appendChild(getData(i, 'id'));
                    tableRow.appendChild(getDate(i));
                    tableRow.appendChild(getData(i, 'name'));
                    tableRow.appendChild(getData(i, 'email'));
                    tableRow.appendChild(getData(i, 'description'));
                }
            }
        }
    }
    var id = document.getElementById('id');
    var date = document.getElementById('date');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var description = document.getElementById('description');
    
    function clearTable() {
        let td = document.querySelectorAll('td');
    
        for (let i = 0; i < td.length; i++) {
            td[i].remove();
        }
    }

    id.addEventListener('click', function() {
        const targetDataset = event.target.dataset;
        const sortOrder = targetDataset.sortOrder;

        clearTable();
        getSortByField('id', sortOrder);
        fillTable();

        if (sortOrder === '0') {
            targetDataset.sortOrder = '1';
        } else {
            targetDataset.sortOrder = '0';
        }
    })

    name.addEventListener('click', function() {
        const targetDataset = event.target.dataset;
        const sortOrder = targetDataset.sortOrder;

        clearTable();
        getSortByField('name', sortOrder);
        fillTable();

        if (sortOrder === '0') {
            targetDataset.sortOrder = '1';
        } else {
            targetDataset.sortOrder = '0';
        }
    })

    email.addEventListener('click', function() {
        const targetDataset = event.target.dataset;
        const sortOrder = targetDataset.sortOrder;

        clearTable();
        getSortByField('email', sortOrder);
        fillTable();

        if (sortOrder === '0') {
            targetDataset.sortOrder = '1';
        } else {
            targetDataset.sortOrder = '0';
        }
    })

    description.addEventListener('click', function() {
        const targetDataset = event.target.dataset;
        const sortOrder = targetDataset.sortOrder;

        clearTable();
        getSortByField('description', sortOrder);
        fillTable();

        if (sortOrder === '0') {
            targetDataset.sortOrder = '1';
        } else {
            targetDataset.sortOrder = '0';
        }
    })

    date.addEventListener('click', function() {
        const targetDataset = event.target.dataset;
        const sortOrder = targetDataset.sortOrder;

        clearTable();
        getSortByDate(sortOrder);
        fillTable();

        if (sortOrder === '0') {
            targetDataset.sortOrder = '1';
        } else {
            targetDataset.sortOrder = '0';
        }
    })
}

// task 3
function request(url) {
    var xhr3 = new XMLHttpRequest();
    
    xhr3.open('GET', url, true);

    xhr3.send();

    xhr3.onreadystatechange = function() {
        if (xhr3.readyState != 4) return;
        if (xhr3.status != 200) {
            console.log(xhr3.status + ': ' + xhr3.statusText);
        } else {
            var visitors = JSON.parse(xhr3.responseText);

            let button = document.querySelector('button');

            if (!visitors.loadMore) {
                button.remove();
            }

            function fillTable() {
                let table = document.querySelector('table');
            
                getDate = function(index) {
                    let tableCell = document.createElement('td');
            
                    let date = new Date(visitors.data[index].createdAt);
                    let year = date.getFullYear();
            
                    let month = date.getMonth();
                    if (month < 10) month = '0' + month;
            
                    let day = date.getDate();
                    if (day < 10) day = '0' + day;
            
                    tableCell = document.createElement('td');
                    tableCell.textContent = year + '.' + month + '.' + day;
            
                    return tableCell;
                }
            
                getData = function(index, field) {
                    let tableCell = document.createElement('td');
            
                    let userData = visitors.data[index][field];
            
                    tableCell = document.createElement('td');
                    tableCell.textContent = userData;
            
                    return tableCell;
                }
            
                for (let i = 0; i < visitors.data.length; i++) {
                    let tableRow = document.createElement('tr');
            
                    table.appendChild(tableRow);
                    
                    for (let j = 0; j < 1; j++) {
                        tableRow.appendChild(getData(i, 'id'));
                        tableRow.appendChild(getDate(i));
                        tableRow.appendChild(getData(i, 'name'));
                        tableRow.appendChild(getData(i, 'email'));
                        tableRow.appendChild(getData(i, 'description'));
                    }
                }
            }
            fillTable();
        }
    }
}


let page = 1;
let url = `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`;
let button = document.querySelector('button');

button.addEventListener('click', function() {
    page++;
    let url = `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${page}/users.json`;
    request(url);
})
request(url);
