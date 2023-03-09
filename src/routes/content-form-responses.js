const express = require('express');
const formResponseController = require('../controllers/content-form-responses.controller');
const router = express.Router();

router.get('/', formResponseController.getAllFormResponses);
router.post('/', formResponseController.addFormResponse);
router.put('/:id', formResponseController.updateFormResponse);
router.delete('/:id', formResponseController.deleteFormResponse);
router.get('/:id', formResponseController.getFormResponsesById);
router.get('/:id/:responseId', formResponseController.getSpecificPersonResponse);
module.exports = router;
