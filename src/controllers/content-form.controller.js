const contentFormService = require('../services/content-form.services.js');
const { HTTPError } = require('../utils/errorHandler');
const getAllForm = async (req, res) => {
  try {
    const forms = await contentFormService.getAllForm();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createForm = async (req, res) => {
  try {
    const form = await contentFormService.createForm(req.body);
    res.status(201).json({
      message: 'Form created successfully',
      data: form,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFormById = async (req, res) => {
  try {
    const form = await contentFormService.getFormById(req.params.formId);
    if (!form) {
      throw new HTTPError('Form not found', 404);
    }
    res.status(200).json({
      message: 'Form fetched successfully',
      data: form,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const addFormFields = async (req, res) => {
  try {
    const form = await contentFormService.addFormFields(
      req.params.formId,
      req.body
    );
    if (!form) {
      throw new HTTPError('Form not found', 404);
    }
    res.status(200).json({
      message: 'Form updated successfully',
      data: form,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const deleteFormFields = async (req, res) => {
  try {
    const form = await contentFormService.deleteFormFields(
      req.params.formId,
      req.body.fieldName
    );
    if (!form) {
      throw new HTTPError('Form not found', 404);
    }
    res.status(200).json({
      message: 'Form updated successfully',
      data: form,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

const editFormFieldsById = async (req, res) => {
  try {
    const form = await contentFormService.editFormFieldsById(
      req.params.formId,
      req.params.formFieldsId,
      req.body
    );
    if (!form) {
      throw new HTTPError('Form not found', 404);
    }
    res.status(200).json({
      message: 'Form field updated successfully',
      data: form,
    });
  } catch (error) {
    if (error instanceof HTTPError) {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllForm,
  createForm,
  getFormById,
  addFormFields,
  deleteFormFields,
  editFormFieldsById,
};
