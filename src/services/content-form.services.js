const { contentForm } = require('../../database/models/');

const getAllForm = async () => {
  const forms = await contentForm.findAll();
  return forms;
};

const createForm = async (form) => {
  const newForm = await contentForm.create({
    formName: form.formName,
    formFields: [],
  });
  return newForm;
};

const getFormById = async (formId) => {
  const form = await contentForm.findOne({ where: { id: formId } });
  return form;
};

const addFormFields = async (formId, fields) => {
  const form = await contentForm.findOne({ where: { id: formId } });
  if (!form) {
    return null;
  }
  const updatedForm = await contentForm.update(
    { formFields: [...form.formFields, fields] },
    { where: { id: formId } }
  );
  return updatedForm;
};

const deleteFormFields = async (formId, formFieldsName) => {
  const form = await contentForm.findOne({ where: { id: formId } });
  if (!form) {
    return null;
  }
  const updatedFormFields = form.formFields.filter((field) => {
    console.log(field);
    let key = Object.keys(field)[0];
    return key !== formFieldsName;
  });
  const updatedForm = await contentForm.update(
    {
      formFields: updatedFormFields,
    },
    { where: { id: formId } }
  );
  return updatedForm;
};

module.exports = {
  getAllForm,
  createForm,
  getFormById,
  addFormFields,
  deleteFormFields,
};
