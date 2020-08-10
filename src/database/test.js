const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Joás Lopes" , 
        avatar: "https://avatars1.githubusercontent.com/u/40728090?s=460&u=0f3ea86b16113cf25303a30fb71e84f1408a056c&v=4",
        whatsapp: "33999565689",
        bio: "Sou legal"
    }

    classValue = {
        subject: 1,
        cost: "28"
        // O proffy do id virá pelo banco de dados
    }

    classScheduleValues = [
        // O class_id virá pelo Banco de Dados, após cadstrarmos a class
        {
            weekday: 1, 
            time_from: [720],
            time_to: [1220]
        },
        {
            weekday: 0, 
            time_from: [520],
            time_to: [1220]
        }
    ]

    // return await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // E trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // O horário de trabalho é das 8h - 18h
    // O time_from (8h) precisa ser maior ou igual (<=) ao horário solicitado
    // O time_to precisa maior (>)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"

    `)

    console.log(selectClassesSchedules)

})
