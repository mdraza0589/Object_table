let obj = [
    {
        img: 'photo/image1.avif',
        name: 'raza',
        age: 22,
        college: 'IES College of Technology',
        address: 'Bhopal',
        rollNumber: '0177CE211044',
        rollNumber: '0177CE211042'
    },
    {
        img: 'photo/image2.avif',
        name: 'raza',
        age: 22,
        college: 'IES College of Technology',
        address: 'Bhopal',
        rollNumber: '0177CE211044',
        rollNumber: '0177CE211042'
    },
    {
        img: 'photo/image3.avif',
        name: 'raza',
        age: 22,
        college: 'IES College of Technology',
        address: 'Bhopal',
        rollNumber: '0177CE211044',
        rollNumber: '0177CE211042'
    },
    {
        img: 'photo/image4.avif',
        name: 'raza',
        age: 22,
        college: 'IES College of Technology',
        address: 'Bhopal',
        rollNumber: '0177CE211044',
        rollNumber: '0177CE211042'
    },
    {
        img: 'photo/image5.avif',
        name: 'raza',
        age: 22,
        college: 'IES College of Technology',
        address: 'Bhopal',
        rollNumber: '0177CE211044',
        rollNumber: '0177CE211042'
    },
]

let table = document.getElementById('table');

table.innerHTML = obj.map((item) => `
        <tr>
            <td>${item.name}</td>
            <td><img width='120px' height='80px' src="${item.img}" alt=""></td>
            <td>${item.age}</td>
            <td cellpadding='10px'>${item.rollNumber}</td>
            <td>${item.address}</td>
        </tr>
    `).join('')
