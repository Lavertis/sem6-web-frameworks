const taskList = [
    {
        id: 1,
        title: "Zrobienie zakupów",
        completed: true
    },
    {
        id: 2,
        title: "Przegląd techniczny samochodu",
        completed: false
    },
    {
        id: 3,
        title: "Wizyta u dentysty",
        completed: false
    },
]

console.log('Foreach task titles')
taskList.forEach(task => {
    console.log(task.title)
})

console.log('\nForeach task titles after map')
const arrayOfTitles = taskList.map(task => {
    return task.title
})
console.log(arrayOfTitles)

console.log('\nForeach task titles after filter and map')
const arrayOfTitlesOfCompletedTasks = taskList.filter(task => {
    return task.completed
}).map(task => {
    return task.title
})
console.log(arrayOfTitlesOfCompletedTasks)