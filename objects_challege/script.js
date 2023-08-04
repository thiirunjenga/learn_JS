const library = [
    {
        title: 'book one',
        author: 'author 1',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'book two',
        author: 'author two',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'book three',
        author: 'author three',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook} = library[0];

const output = JSON.stringify(library);


console.log(library);
console.log(firstBook);
console.table(output);

