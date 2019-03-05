const router = require('express').Router();
const mongoose = require('mongoose');

const Role = require('../models/role');

router.get('/', (req, res) => {
    Role.find({}).then(data => {
        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
        res.send(data);
    });
});

router.get('/:id', (req, res) => {
    Role.findById(req.params.id).then(data => {
        if (!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});

// router.post('/', (req, res) => {
//     const roleData = req.body;

//     new Role({ ...roleData }).save().then(data => {
//         res.send(data);
//     }).catch(err => res.status(400).send(err));
// })

// router.delete('/:id', (req, res) => {
//     Role.findByIdAndDelete(req.params.id).then(data => {
//         res.send(data);
//     });
// });

// router.patch('/role/:id', (req, res) => {
//     // que sea un id valido de mongo
//     if (!mongoose.Types.ObjectId.isValid(req.params.id))
//         return res.status(400).send('El ID no es un ID valido');

//     // que  no me envie el body vacio
//     if (!req.body)
//         return res.status(400).send('Hace falta enviar datos para actualizar.');

//     Role.findByIdAndUpdate(
//         req.params.id,
//         { ...req.body },
//         {
//             new: true,
//             // que valide los datos al actualizar
//             runValidators: true
//         }
//     ).then(data => {
//         // que exista un rol con su id.
//         if (!data) return res.status(404).send('No existe');

//         res.send(data);
//     }).catch(err => {
//         // responder con error de validacion si se da el caso.
//         res.status(400).send(err)
//     })
// });

// router.put('/:id', (req, res) => {
//     Role.findByIdAndUpdate(
//         req.params.id,
//         {
//             ...req.body
//         },
//         {
//             new: true,
//             overwrite: true,
//             runValidators: true
//         }
//     ).then(data => {
//         res.send(data);
//     }).catch(err => res.status(400).send(err))
// })


module.exports = router;