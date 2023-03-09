const formResponseService = require('../../src/services/content-form-responses.services');

const getAllFormResponses = async (req, res) => {
  try {
    const formResponses = await formResponseService.getAllFormResponses();
    res.status(200).json(formResponses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFormResponse = async (req, res) => {
  try {
    const formResponse = await formResponseService.addFormResponse(req.body);
    res.status(201).json({
      message: 'Form response created successfully',
      data: formResponse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFormResponse = async (req, res) => {
  try {
    const formResponse = await formResponseService.updateFormResponse(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: 'Form response updated successfully',
      data: formResponse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFormResponse = async (req, res) => {
  try {
    await formResponseService.deleteFormResponse(req.params.id, req.body);
    res.status(200).json({
      message: 'Form response deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFormResponsesById = async (req, res) => {
  try {
    const formResponse = await formResponseService.getFormResponseById(
      req.params.id
    );
    if (!formResponse) {
      res.status(404).json({ message: 'Form response collection not found' });
    }
    res.status(200).json(formResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSpecificPersonResponse = async (req, res) => {
  try {
    const formResponse = await formResponseService.getSpecificPersonResponse(
      req.params.id,
      req.params.responseId
    );
    if (!formResponse) {
      res.status(404).json({ message: 'Specific Form response does not exits' });
    }
    res.status(200).json(formResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFormResponses,
  addFormResponse,
  updateFormResponse,
  deleteFormResponse,
  getFormResponsesById,
  getSpecificPersonResponse,
};
