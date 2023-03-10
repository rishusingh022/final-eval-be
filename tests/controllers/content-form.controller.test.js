const contentFormService = require('../../src/services/content-form.services');
const contentFormController = require('../../src/controllers/content-form.controller');
const { HTTPError } = require('../../src/utils/errorHandler');
describe('Content Form Controller', () => {
  describe('getAllForm', () => {
    it('should return 200 status code and all forms', async () => {
      const forms = [{}];
      jest.spyOn(contentFormService, 'getAllForm').mockResolvedValue(forms);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = {};
      await contentFormController.getAllForm(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(forms);
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'getAllForm')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = {};
      await contentFormController.getAllForm(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('createForm', () => {
    it('should return 201 status code and form', async () => {
      const form = {};
      jest.spyOn(contentFormService, 'createForm').mockResolvedValue(form);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {} };
      await contentFormController.createForm(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form created successfully',
        data: form,
      });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'createForm')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {} };
      await contentFormController.createForm(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('getFormById', () => {
    it('should return 200 status code and form', async () => {
      const form = {};
      jest.spyOn(contentFormService, 'getFormById').mockResolvedValue(form);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormController.getFormById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form fetched successfully',
        data: form,
      });
    });
    it('should return 404 status code and error message when form not found', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'getFormById')
        .mockRejectedValue(new HTTPError(errorMessage, 404));
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormController.getFormById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'getFormById')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormController.getFormById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('addFormFields', () => {
    it('should return 200 status code and form', async () => {
      const form = {};
      jest.spyOn(contentFormService, 'addFormFields').mockResolvedValue(form);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.addFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form updated successfully',
        data: form,
      });
    });
    it('should return 404 status code and error message when form not found', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'addFormFields')
        .mockRejectedValue(new HTTPError(errorMessage, 404));
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.addFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'addFormFields')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.addFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('editFormFieldsById', () => {
    it('should return 200 status code and form', async () => {
      const form = {};
      jest
        .spyOn(contentFormService, 'editFormFieldsById')
        .mockResolvedValue(form);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.editFormFieldsById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form field updated successfully',
        data: form,
      });
    });
    it('should return 404 status code and error message when form not found', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'editFormFieldsById')
        .mockRejectedValue(new HTTPError(errorMessage, 404));
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.editFormFieldsById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'editFormFieldsById')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.editFormFieldsById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('deleteFormFields', () => {
    it('should return 200 status code and form', async () => {
      const form = {};
      jest
        .spyOn(contentFormService, 'deleteFormFields')
        .mockResolvedValue(form);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.deleteFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form field deleted successfully',
        data: form,
      });
    });
    it('should return 404 status code and error message when form not found', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'deleteFormFields')
        .mockRejectedValue(new HTTPError(errorMessage, 404));
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.deleteFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: errorMessage });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(contentFormService, 'deleteFormFields')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {}, params: { id: 1 } };
      await contentFormController.deleteFormFields(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
});
