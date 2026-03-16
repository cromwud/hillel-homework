const contactBook = {
  contacts: [
    {
      name: "Ivan",
      phone: "+380501234567",
      email: "ivan@gmail.com"
    },
    {
      name: "Oleg",
      phone: "+380671112233",
      email: "oleg@gmail.com"
    }
  ],

  findContact(name) {
    return this.contacts.find(contact => contact.name === name);
  },

  addContact(name, phone, email) {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };

    this.contacts.push(newContact);
  }
};

console.log(contactBook.findContact("Oleg"));

contactBook.addContact("Anna", "+380991234567", "anna@gmail.com");

console.log(contactBook.contacts);