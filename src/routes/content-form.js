const express = require('express');
const formController = require('../controllers/content-form.controller');
const router = express.Router();
const { validateToken } = require('../middlewares/auth.validator');
router.get('/', validateToken, formController.getAllForm);
router.post('/', validateToken, formController.createForm);
router.get('/:formId', validateToken, formController.getFormById);
router.put('/:formId', validateToken, formController.addFormFields);
router.delete('/:formId', validateToken, formController.deleteFormFields);
router.put(
  '/:formId/:formFieldsId',
  validateToken,
  formController.editFormFieldsById
);

module.exports = router;
