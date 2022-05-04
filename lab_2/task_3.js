const monday = [
    {
        name: 'Przygotowania do zajęć z AI',
        duration: 180
    },
    {
        name: 'Realizacja projektu z AI',
        duration: 120
    }
]
const tuesday = [
    {
        name: 'Rozbudowa swojego bloga',
        duration: 240
    },
    {
        name: 'Administrowanie serwisem szkoły',
        duration: 180
    },
    {
        name: 'Słuchanie koncertu online',
        duration: 240
    }
]

const priceForBothDaysForActivitiesOver2Hours = [...monday, ...tuesday]
    .map(task => {
        return {
            ...task,
            'duration': task.duration / 60
        }
    })
    .filter(task => task.duration > 2)
    .map(task => {
        return {
            ...task,
            'price': task.duration * 35
        }
    })
    .reduce((acc, task) => {
        return acc + task.price
    }, 0)
    .toFixed(2)

console.log(priceForBothDaysForActivitiesOver2Hours)