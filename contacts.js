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
  console.log('Вызов removeContact(contactId)');
  fs.readFile(contactsPath)
    .then(data => JSON.parse(data))
    .then(contacts =>
      console.log(Object.values(contacts).filter(i => i.id !== contactId)),
    )
    .catch(err => console.error(err.message));
}

function addContact(name, email, phone) {
  console.log('Вызов addContact(name, email, phone)');
  fs.writeFile(contactsPath, name, { flag: 'a+' }).catch(err =>
    console.error(err),
  );
  fs.writeFile(contactsPath, email, { flag: 'a+' }).catch(err =>
    console.error(err),
  );
  fs.writeFile(contactsPath, phone, { flag: 'a+' }).catch(err =>
    console.error(err),
  );
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
