const express = require('express');
const formResponseController = require('../controllers/content-form-responses.controller');
const router = express.Router();
const { validateToken } = require('../middlewares/auth.validator');
router.get('/', validateToken, formResponseController.getAllFormResponses);
router.post('/', validateToken, formResponseController.addFormResponse);
router.put('/:id', validateToken, formResponseController.updateFormResponse);
router.delete('/:id', validateToken, formResponseController.deleteFormResponse);
router.get('/:id', validateToken, formResponseController.getFormResponsesById);
router.get(
  '/:id/:responseId',
  formResponseController.getSpecificPersonResponse
);
module.exports = router;
