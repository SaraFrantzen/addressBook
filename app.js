const  storage = window.localStorage

const  renderContacts = () => {
  const  contacts = JSON.parse(storage.getItem('contacts'))

  let  div = document.querySelector('#contact-list')
  if (contacts) {
	div.innerHTML = ''
	const  ul = document.createElement('ul')

	contacts.forEach(contact  => {
		let  li = document.createElement('li')

		li.innerHTML = `
		  <span>${contact.name}</span> |
		  <span>${contact.email}</span> |
		  <span>${contact.phone}</span> |
		  <span>${contact.github}</span> |
		  <span>${contact.instagram}</span>
	    `
	    ul.appendChild(li)
	  })
			
	  div.appendChild(ul)
	} else {
	  div.innerHTML = '<p>You have no contacts in your address book</p>'
	}
}
//change button color

let clickedButton = document.getElementById('add-contact');
 turnButtonPurple = () => {
	clickedButton.style.backgroundColor = '#990099';
	idiotButton.innerHTML = "Hide Form";
       }
	   clickedButton.onclick = turnButtonPurple;


document.addEventListener('DOMContentLoaded', () => {
	renderContacts()
	const  contactForm = document.getElementById('new-contact-form')
	const  toggleFormVisibilityButton = document.getElementById('add-contact')
	contactForm.style.display = 'none'

 
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
		}
	})   
    
    contactForm.addEventListener('submit', event  => {
		event.preventDefault()

		// 1. Read all the input fields and get their values
		const { name, email, phone, github, instagram } = contactForm.elements

		const  contact = {
			name:  name.value,
			email:  email.value,
			phone:  phone.value,
			github:  github.value,
			instagram:  instagram.value,
		}

		console.log(contact)

		let  contacts = JSON.parse(storage.getItem('contacts')) || []

		contacts.push(contact)

		// 2. Save them to our storage
		storage.setItem('contacts', JSON.stringify(contacts))
		renderContacts()
		contactForm.reset()
   })
})