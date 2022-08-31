let counter = 1
let max = 6
let right = document.getElementById('toright')
let left = document.getElementById('toleft')


right.addEventListener('click', () => {
    let sliderimg = document.getElementById('slider-img')
    
    sliderimg.src =`/img/corona${counter}.jpg` 
    counter++
    if (counter > max ){
        counter = 1
    }
   
})


left.addEventListener('click', () => {
    let sliderimg = document.getElementById('slider-img')
    
    sliderimg.src =`/img/corona${counter}.jpg` 
    counter--

    if ( counter < 1 ){
        counter = max 
    }
})


window.setInterval(() => {
    let sliderimg = document.getElementById('slider-img')
    
    sliderimg.src =`/img/corona${counter}.jpg` 
    counter++
    if (counter > max ){
        counter = 1
    }
   
},3000);





//register



// function register(e){
//     e.preventDefault();
//     let fname = document.getElementById('fname').value,
//     lname = document.getElementById('lname').value,
//     cin = document.getElementById('cin').value,
//     blood = document.getElementById('blood').value,
//     vaccin = document.getElementById('typeofvaccin').value;

//     let vaccinData = JSON.parse(localStorage.getItem('vaccinData')) || [];

//     let exist = vaccinData.length && 
//         JSON.parse(localStorage.getItem('vaccinData')).some(data => 
//             data.cin == cin
//         );
    
        
//       if(!exist){
//         vaccinData.push({fname , lname, cin, blood, vaccin})
//         localStorage.setItem('vaccinData', JSON.stringify(vaccinData));
//         document.querySelector('form').reset();
//         let containerdiv = document.getElementById('person-registred')
//         let title = document.createElement('h2')
//         title.innerText = 'enregistrement'
//       let registertable = document.createElement('table')
//       let tablehead = document.createElement('thead')
//       tablehead.innerHTML = '<th>Nom</th><th>Prenom</th><th>Num CIN</th><th>Type de vaccin</th>' 
      
//       registertable.appendChild(tablehead)
//       containerdiv.appendChild(registertable)
//       containerdiv.appendChild(title)
//       let tablebody= document.createElement('tbody')
//       let row = document.createElement('tr')
      
//       row.innerHTML = `<td> ${fname} </td><td>${lname}</td><td>${cin}</td><td>${vaccin}</td>`
//       console.log(vaccinData)
      
//       containerdiv.appendChild(registertable)
//       registertable.appendChild(tablebody)
//       tablebody.appendChild(row)

//       document.getElementById('register').style.display = "none"


//       }  else {
//         alert('num de cin déja existant !')
//       }
      
// }



 

// showData();
// create the register div
// function showData(){
//     let containerdiv = document.getElementById('person-registred')
//     let registertable = document.createElement('table')
//     let tablehead = document.createElement('thead')
//     tablehead.innerHTML = '<th>Nom</th><th>Prenom</th><th>Num CIN</th><th>Type de vaccin</th>' 

//     registertable.appendChild(tablehead)
//     containerdiv.appendChild(registertable)


//     let vaccinData = JSON.parse(localStorage.getItem('vaccinData')) || [];
// //     let {fname, lname, cin, blood, vaccin} = vaccinData
// // ;
 
//     let tablebody= document.createElement('tbody')
//     let row = document.createElement('tr')

//     row.innerHTML = `<td> ${vaccinData.fname} </td><td>${lname}</td><td>${vaccinData[0].cin}</td><td>${vaccin}</td>`
// console.log(vaccinData)
    
//     containerdiv.appendChild(registertable)
//     registertable.appendChild(tablebody)
//     tablebody.appendChild(row)
// }

    
let currentData = JSON.parse(localStorage.getItem('current_user')) || [];
let containerdiv = document.getElementById('person-registred')
        let title = document.createElement('h2')
        title.innerText = 'enregistrement'
      let registertable = document.createElement('table')
      let tablehead = document.createElement('thead')
      tablehead.innerHTML = '<th>Nom</th><th>Prenom</th><th>Num CIN</th><th>Lieu du vaccin</th><th>Date de vaccination</th>' 
      
      registertable.appendChild(tablehead)
      containerdiv.appendChild(registertable)
      containerdiv.appendChild(title)
      let tablebody= document.createElement('tbody')
      let row = document.createElement('tr')
        let date = new Date()
        let date2 = new Date()
        date2.setFullYear(date.getFullYear())
        date2.setMonth(date.getMonth())
        date2.setDate(date.getDate() + 15)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
        let dateDisplayedLong = date2.toLocaleString('fr-FR', options)

      
      row.innerHTML = `<td> ${currentData.fname} </td><td>${currentData.lname}</td><td>${currentData.cin}</td><td>${currentData.select}</td><td>${dateDisplayedLong}</td>`

      
      containerdiv.appendChild(registertable)
      registertable.appendChild(tablebody)
      tablebody.appendChild(row)




      

      let logoutbtn = document.getElementById('logoutbtn')
      logoutbtn.addEventListener('click', () => {
            localStorage.removeItem('current_user')
            window.location.href = 'signin.html'
          }
      )