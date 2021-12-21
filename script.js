let people =  [
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Julie',
        age: 20
    },
    {
        name: 'Winston',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Julie',
        age: 20
    },
    {
        name: 'Winston',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Julie',
        age: 20
    },
    {
        name: 'Winston',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Julie',
        age: 20
    },
    {
        name: 'Winston',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
]
const info = document.querySelector('#info')
let details = people.map((item) => {
    return ('<div>' + item.name + ' is ' + item.age + '</div>')
})
info.innerHTML = details.join('\n')