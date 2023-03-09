const express = require('express');
const formController = require('../controllers/content-form.controller');
const router = express.Router();

router.get('/', formController.getAllForm);
router.post('/', formController.createForm);
router.get('/:formId', formController.getFormById);
router.put('/:formId', formController.addFormFields);
router.delete('/:formId', formController.deleteFormFields);

module.exports = router;