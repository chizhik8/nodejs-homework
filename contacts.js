const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath)
    .then(data => {
      console.table(JSON.parse(data));
    })
    .catch(err => console.error(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then(data => JSON.parse(data))
    .then(contacts => {
      contacts.find(contact => {
        if (contact.id === contactId) {
          console.log(contact);
        }
      });
    })
    .catch(err => console.error(err.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then(data => JSON.parse(data))
    .then(contacts =>
      console.log(Object.values(contacts).filter(i => i.id !== contactId)),
    )
    .catch(err => console.error(err.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
    .then(data => {
      JSON.parse(data);
      let contact = {
        id: Object.keys(JSON.parse(data)).length + 1,
        name: name,
        email: email,
        phone: phone,
      };
      fs.writeFile(contactsPath, JSON.stringify(contact), {
        flag: 'a+',
      }).catch(err => console.error(err));
    })
    .catch(err => console.error(err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
