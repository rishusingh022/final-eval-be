const { contentForm } = require('../../database/models');
const contentFormService = require('../../src/services/content-form.services');

describe('Content Form Service', () => {
  it('should return all forms', async () => {
    const forms = [{}];
    jest.spyOn(contentForm, 'findAll').mockResolvedValue(forms);
    const result = await contentFormService.getAllForm();
    expect(result).toEqual(forms);
  });
  it('should create form when formName is provided', async () => {
    const form = { formName: 'Form' };
    jest.spyOn(contentForm, 'create').mockResolvedValue(form);
    const result = await contentFormService.createForm(form);
    expect(result).toEqual(form);
  });
  it('should get form when id is provided', async () => {
    const form = { id: 1 };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(form);
    const result = await contentFormService.getFormById(form.id);
    expect(result).toEqual(form);
  });
  it('should return with current id does not exit', async () => {
    const form = { id: 1 };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(null);
    const result = await contentFormService.getFormById(form.id);
    expect(result).toEqual(null);
  });
  it('should add field to form when formId and fields are provided', async () => {
    const form = { formName: 'Form', id: 1, formFields: [] };
    const fields = { name: 'Name' };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(form);
    jest.spyOn(contentForm, 'update').mockResolvedValue(form);
    const result = await contentFormService.addFormFields(form.id, fields);
    expect(result).toEqual(form);
  });
  it('should return when curreent id does not exits', async () => {
    const form = { id: 1, formFields: [] };
    const fields = { name: 'Name' };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(null);
    const result = await contentFormService.addFormFields(form.id, fields);
    expect(result).toEqual(null);
  });
  it('should delete field from form when formId and formFieldsName are provided', async () => {
    const form = { formName: 'Form', id: 1, formFields: [{ name: 'Name' }] };
    const formFieldsName = 'name';
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(form);
    jest.spyOn(contentForm, 'update').mockResolvedValue(form);
    const result = await contentFormService.deleteFormFields(
      form.id,
      formFieldsName
    );
    expect(result).toEqual(form);
  });
  it('should return when formId and formFieldsName does not exit', async () => {
    const form = { id: 1, formFields: [{ name: 'Name' }] };
    const formFieldsName = 'name';
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(null);
    const result = await contentFormService.deleteFormFields(
      form.id,
      formFieldsName
    );
    expect(result).toEqual(null);
  });
  it('should edit form field when formId, formFieldsName and fields are provided', async () => {
    const form = { id: 1, formFields: [{ name: 'Name' }] };
    const formFieldsName = 'name';
    const fields = { name: 'Name', type: 'text' };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(form);
    jest.spyOn(contentForm, 'update').mockResolvedValue(form);
    const result = await contentFormService.editFormFieldsById(
      form.id,
      formFieldsName,
      fields
    );
    expect(result).toEqual(form);
  });
  it('should  return when formId, formFieldsName and fields does not exits', async () => {
    const form = { id: 1, formFields: [{ name: 'Name' }] };
    const formFieldsName = 'name';
    const fields = { name: 'Name', type: 'text' };
    jest.spyOn(contentForm, 'findOne').mockResolvedValue(null);
    const result = await contentFormService.editFormFieldsById(
      form.id,
      formFieldsName,
      fields
    );
    expect(result).toEqual(null);
  });
});
