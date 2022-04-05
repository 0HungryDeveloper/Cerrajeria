const express = require('express')
const router = express.Router()

// Títulos

const index          = `Cerrajería Las Torres`
const help           = `Cerrajero las 24 horas`
const residential    = `Cerrajero Residencial`
const automotive     = `Cerrajero Automotriz`
const locks          = `Instalación de cerraduras`

// Imágenes

const firstServe     = `https://lacimacerrajeria.com/wp-content/uploads/2019/10/image_preview-23.jpeg`
const secondServe    = `https://lacimacerrajeria.com/wp-content/uploads/2019/11/residencial.jpeg`
const thirdServe     = `https://lacimacerrajeria.com/wp-content/uploads/2021/10/5.jpg`
const fourthServe    = `https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`


router.get('/', (request, response) =>{ 
    response.render('index.html', {
        title: index,
        imgHelp: firstServe,
        textHelp: help,
        imgResidential: secondServe,
        textResidential: residential,
        imgAutomotive: thirdServe,
        textAutomotive: automotive,
        imgLocks: fourthServe,
        textLocks: locks,
    })
})

router.get('/locksmith-help-me', (request, response) =>{ 
    response.render('help-me.html', {
        title: help,
        imgHelp: firstServe,
        textHelp: help,
    })
})

router.get('/residential-locksmith', (request, response) =>{ 
    response.render('residential.html', {
        title: residential,
        imgResidential: secondServe,
        textResidential: residential,
    })
})

router.get('/automotive-locksmith', (request, response) =>{ 
    response.render('automotive.html', {
        title: automotive,
        imgAutomotive: thirdServe,
        textAutomotive: automotive,
    })
})

router.get('/locks', (request, response) =>{ 
    response.render('locks.html', {
        title: locks,
        imgLocks: fourthServe,
        textLocks: locks,
    })
})

module.exports = router