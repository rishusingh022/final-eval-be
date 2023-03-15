const { contentFormResponse } = require('../../database/models');
const contentFormResponseService = require('../../src/services/content-form-responses.services');
const {
  mockFormResponseWithName,
  mockBodyWithFormName,
  mockBodyWithResponseId,
} = require('../__mocks__/content-form-responses');
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
    jest
      .spyOn(contentFormResponse, 'findOne')
      .mockResolvedValue(mockFormResponseWithName);
    jest
      .spyOn(contentFormResponse, 'create')
      .mockResolvedValue(mockFormResponseWithName);
    jest
      .spyOn(contentFormResponse, 'update')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.addFormResponse(
      mockBodyWithFormName
    );
    expect(result).toEqual(mockFormResponseWithName);
  });
  it('should update form response when responseId and formResponse are provided', async () => {
    const formId = 1;
    jest
      .spyOn(contentFormResponse, 'findOne')
      .mockResolvedValue(mockFormResponseWithName);
    jest
      .spyOn(contentFormResponse, 'update')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.updateFormResponse(
      formId,
      mockBodyWithResponseId
    );
    expect(result).toEqual(mockFormResponseWithName);
  });
  it('should update form response when responseId and formResponse are provided', async () => {
    const formId = 1;
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(null);
    jest
      .spyOn(contentFormResponse, 'update')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.updateFormResponse(
      formId,
      mockBodyWithResponseId
    );
    expect(result).toEqual(null);
  });
  it('should delete form response when formId is provided and body is provided', async () => {
    const formid = 1;
    const body = { responseId: 1 };
    jest
      .spyOn(contentFormResponse, 'findOne')
      .mockResolvedValue(mockFormResponseWithName);
    jest
      .spyOn(contentFormResponse, 'update')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.deleteFormResponse(
      formid,
      body
    );
    expect(result).toEqual(mockFormResponseWithName);
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
    jest
      .spyOn(contentFormResponse, 'findOne')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.getSpecificPersonResponse(
      mockFormId,
      mockFormResponseId
    );
    expect(result).toEqual(...mockFormResponseWithName.formResponses);
  });
  it('should return null when formId and formResponseId is invalid', async () => {
    const mockFormId = 1;
    const mockFormResponseId = 1;
    jest
      .spyOn(contentFormResponse, 'findOne')
      .mockResolvedValue(mockFormResponseWithName);
    const result = await contentFormResponseService.getSpecificPersonResponse(
      mockFormId,
      mockFormResponseId
    );
    expect(result).toEqual(...mockFormResponseWithName.formResponses);
  });
  it('should update when formName and fields are provided', async () => {
    const formResponse = {
      formName: 'Form',
      id: 1,
      formResponses: [
        {
          name: 'Name',
          value: 'value',
        },
      ],
    };
    const formName = 'Form';
    const fields = { name: 'Name' };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.updateFromFieldUtils(
      formName,
      fields
    );
    expect(result).toEqual(undefined);
  });
  it('should return null when formName and fields are provided but formResponse is null', async () => {
    const formResponse = {
      formName: 'Form',
      id: 1,
      formResponses: [
        {
          name: 'Name',
          value: 'value',
        },
      ],
    };
    const formName = 'Form';
    const fields = { name: 'Name' };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(null);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.updateFromFieldUtils(
      formName,
      fields
    );
    expect(result).toEqual(null);
  });
  it('should return null when formName and fields are provided but formResponse is null', async () => {
    const formResponse = {
      formName: 'Form',
      id: 1,
      formResponses: [],
    };
    const formName = 'Form';
    const fields = { name: 'Name' };
    jest.spyOn(contentFormResponse, 'findOne').mockResolvedValue(formResponse);
    jest.spyOn(contentFormResponse, 'update').mockResolvedValue(formResponse);
    const result = await contentFormResponseService.updateFromFieldUtils(
      formName,
      fields
    );
    expect(result).toEqual(undefined);
  });
});
