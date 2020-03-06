const bodyParser = require('body-parser');
const router = require('express').Router();
const jwtCheck = require('./helpers/jwt');

router.use(bodyParser.json());
router.use(require('./controllers/auth/user'))
router.use('/cars', jwtCheck, require('./controllers/car/car'))
router.use('/tenant', jwtCheck, require('./controllers/tenant/tenant'))
router.use('/organization', jwtCheck, require('./controllers/organization/organization'))
router.use('/contract', jwtCheck, require('./controllers/contract/contract'))
router.use('/salary', jwtCheck, require('./controllers/salary/salary'))
router.use('/office', jwtCheck, require('./controllers/office/office'))

module.exports = router; 