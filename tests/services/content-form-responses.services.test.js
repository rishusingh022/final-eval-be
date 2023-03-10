const { contentFormResponse } = require('../../database/models');
const contentFormResponseService = require('../../src/services/content-form-responses.services');
describe('Content Form Response Service', () => {
  it('should return all form responses', async () => {
    const formResponses = [{}];
    jest.spyOn(contentFormResponse, 'findAll').mockResolvedValue(formResponses);
    const result = await contentFormResponseService.getAllFormResponses();
    expect(result).toEqual(formResponses);
  });
  it('should update form response when formName and formResponse are provided when it already exits in db', async () => {
    const formResponse = { formName: 'Form', formResponse: {} };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(null);
    jest.spyOn(contentFormResponse, 'create').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.addFormResponse(
      formResponse
    );
    expect(result).toEqual(formResponse);
  });
  it('should create form response when formName and formResponse are provided', async () => {
    const formResponse = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
          'Contact Email': 'test',
          'Phone Number': 12345,
          Addess: 'test',
          PinCode: 12345,
        },
      ],
    };
    const mockBody = {
      formName: 'Form',
      formResponse: {
        Name: 'Swapnil kumar singh',
      },
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'create').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.addFormResponse(mockBody);
    expect(result).toEqual(formResponse);
  });
  it('should update form response when responseId and formResponse are provided', async () => {
    const mockBody = {
      responseId: 1,
      formResponse: {
        Name: 'Swapnil kumar singh',
      },
    };
    const formId = 1;
    const formResponse = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
          'Contact Email': 'test',
          'Phone Number': 12345,
          Addess: 'test',
          PinCode: 12345,
        },
      ],
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.updateFormResponse(
      formId,
      mockBody
    );
    expect(result).toEqual(formResponse);
  });
  it('should update form response when responseId and formResponse are provided', async () => {
    const mockBody = {
      responseId: 1,
      formResponse: {
        Name: 'Swapnil kumar singh',
      },
    };
    const formId = 1;
    const formResponse = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
          'Contact Email': 'test',
          'Phone Number': 12345,
          Addess: 'test',
          PinCode: 12345,
        },
      ],
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(null);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.updateFormResponse(
      formId,
      mockBody
    );
    expect(result).toEqual(null);
  });
  it('should delete form response when formId is provided and body is provided', async () => {
    const formid = 1;
    const body = { responseId: 1 };
    const formResponses = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
          'Contact Email': 'test',
          'Phone Number': 12345,
          Addess: 'test',
          PinCode: 12345,
        },
      ],
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponses);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponses);
    const result = await contentFormResponseService.deleteFormResponse(
      formid,
      body
    );
    expect(result).toEqual(formResponses);
  });
  it('should return null when formId is provided and body is provided but it doed not exits', async () => {
    const formid = 1;
    const body = { responseId: 1 };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(null);
    const result = await contentFormResponseService.deleteFormResponse(
      formid,
      body
    );
    expect(result).toEqual(null);
  });
  it('should get form response when formId is provided', async () => {
    const formResponse = { formName: 'Form', formResponse: {} };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.getFormResponseById(
      formResponse
    );
    expect(result).toEqual(formResponse);
  });
  it('should get specific form response when formId and formResponseId are provided', async () => {
    const mockFormId = 1;
    const mockFormResponseId = 1;
    const formResponse = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
        },
      ],
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.getSpecificPersonResponse(
      mockFormId,
      mockFormResponseId
    );
    expect(result).toEqual(...formResponse.formResponses);
  });
  it('should return null when formId and formResponseId is invalid', async () => {
    const mockFormId = 1;
    const mockFormResponseId = 1;
    const formResponse = {
      formName: 'Form',
      formResponses: [
        {
          id: 1,
          fieldName: 'Swapnil',
          Revenue: 12345,
        },
      ],
    };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.getSpecificPersonResponse(
      mockFormId,
      mockFormResponseId
    );
    expect(result).toEqual(...formResponse.formResponses);
  });
});
