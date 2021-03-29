const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.join(__dirname, 'db', 'contacts.json');
// console.log('contactsPath:', contactsPath);

// В функциях используй модуль fs и его методы readFile() и writeFile()
// TODO: задокументировать каждую функцию

function listContacts() {
  console.log('Вызов listContacts()');
  fs.readFile(contactsPath)
    .then(data => {
      console.log(data.toString());
    })
    .catch(err => console.error(err.message));
}

function getContactById(contactId) {
  console.log('Вызов getContactById(contactId)');
  fs.readFile(contactsPath)
    .then(data => data.toString().split())
    .then(contacts => {
      console.log('typeof contacts:', typeof contacts);
      //   contacts.map(contact => contact.id);
      console.log('Key:', Object.keys(contacts));
      console.log('Values:', Object.values(contacts));
      for (const key in contacts) {
        console.log('Key: ', key);
      }
    })
    .catch(err => console.error(err.message));
}

function removeContact(contactId) {
  console.log('Вызов removeContact(contactId)');
}

function addContact(name, email, phone) {
  console.log('Вызов addContact(name, email, phone)');
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
