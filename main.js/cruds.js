// let title = document.getElementById('title');
// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let discount = document.getElementById('discount');
// let count = document.getElementById('count');
// let category = document.getElementById('category');
// let total = document.getElementById('total');
// let submit = document.getElementById('submit');
// let tbody = document.getElementById('tbody');


// // get total
// function getTotal() {
//     if (price.value != '') {
//         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
//         total.innerHTML = result;
//         total.style.background = '#040';
//     } else {
//         total.innerHTML = '';
//         total.style.background = 'rgb(42, 165, 159)';
//     }
// }


// // creat product
// let dataPro;
// if (localStorage.product != null) {
//     dataPro = JSON.parse(localStorage.product)
// } else {
//     dataPro = [];
// }
// function creat() {
//     let newProduct = {
//         title: title.value.toLowerCase(),
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value.toLowerCase(),
//     }
//     dataPro.push(newProduct);
//     // save localstorage
//     localStorage.setItem('product', JSON.stringify(dataPro));
//     clear();
//     showData();
// }


// // clear data

// function clearData() {
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';

// }



// // read
// function showData() {
//     let table = '';
//     for (let i = 0; i < dataPro.length; i++) {
//         table += `
//         <tr>
//             <td>${i}</td>
//             <td>${dataPro[i].title}</td>
//             <td>${dataPro[i].price}</td>
//             <td>${dataPro[i].taxes}</td>
//             <td>${dataPro[i].ads}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].count}</td>
//             <td>${dataPro[i].category}</td>
//             <td><button id="update">update</button></td>
//             <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
//         </tr>
//           `
//     }
//     document.getElementById('tbody').innerHTML = table;
//     clearData();
// }
// showData()


// // delete
// function deleteData(i) {
//     dataPro.splice(i, 1);
//     localStorage.product = JSON.stringify(dataPro);
//     showData();
// }






















// button scroll

let but = document.getElementById('but1');

window.onscroll = () => {
    if (scrollY >= 200) {
        but.style.display = 'block';
    }
    else {
        but.style.display = 'none';
    }
}
but.onclick = () => {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// let but2 = document.getElementById('but2');

// window.onscroll = ()=>{
//     if(scrollY <= 200)
//     {
//         but2.style.display= 'block';
//     }
//     else
//     {
//         but2.style.display= 'none';
//     }
// }
// but2.onclick = ()=>{
//     scroll({
//         right:0,
//         bottom :0,
//         behavior:"smooth"
//     })
// }


// get total

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.style.background = 'green';
        total.innerHTML = result;
    }
    else {
        total.innerHTML = '';
        total.style.background = 'rgb(219, 57, 65) '
    }
}


// create product

let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];

}

submit.onclick = function () {
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }

    // count

    if (title.value != ''
        && price.value != ''
        && category.value != ''
        && newPro.count < 100) {

        if (mood === 'create') {

            if (newPro.count > 1) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
            clearData()
        } else {

            dataPro[tmp] = newPro;
            mood = 'create';
            count.style.display = 'block';
            submit.innerHTML = 'create';

        }
    } else {
        clearData();
    }

    // save localstorage
    localStorage.setItem('product', JSON.stringify(dataPro))

    showData()
}

// clear inputs


function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}




// read


function showData() {
    getTotal();
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table +=
            `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
        `;
    }



    document.getElementById('tbody').innerHTML = table;

    let butDelete = document.getElementById('deleteAll');
    if (dataPro.length > 0) {
        butDelete.innerHTML =
            `
        <button onclick="deleteAll()" >delete All (${dataPro.length})</button>
        `
    } else {
        butDelete.innerHTML = '';
    }
} showData()


// delete and delete All



function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}

function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();
}

// upDate
function updateData(i) {

    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display = 'none';
    category.value = dataPro[i].category;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;

    scroll({
        top: 0,
        behavior: "smooth",
    }
    )
}

// search
let searchMood = 'title';

function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id == 'searchTitle') {
        searchMood = 'title';
    }
    else {
        searchMood = 'category';
    }
    search.placeholder = 'Search By ' + searchMood;
    search.focus()
    search.value = '';
    showData()
}


function searchDate(value) {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {


        if (searchMood == 'title') {
            if (dataPro[i].title.includes(value.toLowerCase())) {


                table +=
                    `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
        `;

            }

        }

        else {
            if (dataPro[i].category.includes(value.toLowerCase())) {


                table +=
                    `
                    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>
            `;

            }


        }
    }
    document.getElementById('tbody').innerHTML = table;

}

















































































// let but = document.getElementById('but1')

// window.onscroll = () => {
//     if (scrollY >= 100) {
//         but.style.display = 'block';

//     } else {
//         but.style.display = 'none';
//     }

// }

// but.onclick = () => {
//     scroll({
//         left: 0,
//         top: 0,
//         behavior: 'smooth'
//     })

// }


// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let discount = document.getElementById('discount');
// let total = document.getElementById('total');
// let count = document.getElementById('count');
// let category = document.getElementById('category');
// let tbody = document.getElementById('tbody');


// function getTotal() {
//     if (price.value != '') {
//         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
//         total.innerHTML = result;
//         total.style.background = 'green';
//     } else {
//         total.innerHTML = '';
//         total.style.background = 'red';
//     }
// }

// // SAVE DATA...............................................................

// let myPro = [];

// submit.onclick = function data() {
//     let dataPro = {
//         title: title.value.toLowerCase(),
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value.toLowerCase(),
//     }
//     myPro.push(dataPro);
//     localStorage.setItem('product', JSON.stringify(myPro));
//     showData();
//     clearData();
// }
// // showData()

// //  CREAT PRODUCT
// if (localStorage.product != null) {
//     myPro = JSON.parse(localStorage.product);
// } else {
//     myPro = [];
// }
// // SHOW DATA
// function showData() {
//     getTotal();
//     let table = '';
//     for (let i = 0; i < myPro.length; i++) {
//         table +=
//             `
    
//         <tr>
//                           <td>${i + 1}</td>
//                           <td>${myPro[i].title}</td>
//                           <td>${myPro[i].price}</td>
//                           <td>${myPro[i].taxes}</td>
//                           <td>${myPro[i].ads}</td>
//                           <td>${myPro[i].discount}</td>
//                           <td>${myPro[i].total}</td>
//                           <td>${myPro[i].category}</td>
//                           <td><button id="update" onclick="upData(${i})">update</button></td>
//                           <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
//                       </tr>
//         `;
//     }

//     tbody.innerHTML = table;
// }

// // CLEAR INPUTS
// function clearData() {
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';
//     total.style.background = 'red';
// }

// function deleteData(i) {
//     myPro.splice(i, 1);
//     localStorage.product = JSON.stringify(myPro);
//     showData();
// }

// // UP DATA
// function upData(i) {
//     title.value = myPro[i].title;
//     price.value = myPro[i].price;
//     taxes.value = myPro[i].taxes;
//     ads.value = myPro[i].ads;
//     discount.value = myPro[i].discount;
//     getTotal();
//     category.value = myPro[i].category;
//     count.style.display = 'none';
//     submit.innerHTML = 'Updata';

//     myPro.splice(i, 1);
//     localStorage.product = JSON.stringify(myPro);

//     scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })

// }




















