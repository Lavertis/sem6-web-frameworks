const companies = [
    {name: "Abasco", category: "IT", begin: 1999, end: 2010},
    {name: "Redis", category: "IT", begin: 1993, end: 1998},
    {name: "Komp", category: "IT", begin: 2003, end: 2018},
    {name: "Bosco", category: "Technologie", begin: 2011, end: 2014},
    {name: "CCA", category: "IT", begin: 1991, end: 1995},
    {name: "Autosan", category: "Auto", begin: 2009, end: 2018},
    {name: "Broke", category: "Finanse", begin: 1990, end: 1992},
    {name: "Funds", category: "Finanse", begin: 2000, end: 2021}
]

const companiesFromItCategory = companies
    .filter(company => company.category.toUpperCase() === "IT")
console.log('Companies from IT category: ', companiesFromItCategory)

const companiesWhichBeganAndEndedInThe90s = companies
    .filter(company =>
        company.begin >= 1990 && company.end < 2000 &&
        company.begin >= 1990 && company.end < 2000
    )
console.log('Companies which began and ended in the 90s: ', companiesWhichBeganAndEndedInThe90s)

const companiesWhichWereOnTheMarketForOver10Years = companies
    .filter(company => company.end - company.begin > 10)
console.log('Companies which were on the market for over 10 years', companiesWhichWereOnTheMarketForOver10Years)