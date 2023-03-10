const formResponseService = require('../../src/services/content-form-responses.services');
const contentFormResponsesController = require('../../src/controllers/content-form-responses.controller');
describe('Content Form Responses Controller', () => {
  describe('getAllFormResponses', () => {
    it('should return 200 status code and all form responses', async () => {
      const formResponses = [{}];
      jest
        .spyOn(formResponseService, 'getAllFormResponses')
        .mockResolvedValue(formResponses);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = {};
      await contentFormResponsesController.getAllFormResponses(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(formResponses);
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'getAllFormResponses')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = {};
      await contentFormResponsesController.getAllFormResponses(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('addFormResponse', () => {
    it('should return 201 status code and form response', async () => {
      const formResponse = {};
      jest
        .spyOn(formResponseService, 'addFormResponse')
        .mockResolvedValue(formResponse);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {} };
      await contentFormResponsesController.addFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form response created successfully',
        data: formResponse,
      });
    });
    it('should return 500 status code and error message when something went wrong', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'addFormResponse')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { body: {} };
      await contentFormResponsesController.addFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('updateFormResponse', () => {
    it('should return 200 status code and form response', async () => {
      const formResponse = {};
      jest
        .spyOn(formResponseService, 'updateFormResponse')
        .mockResolvedValue(formResponse);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 }, body: {} };
      await contentFormResponsesController.updateFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form response updated successfully',
        data: formResponse,
      });
    });
    it('should return 500 status code and error message', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'updateFormResponse')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 }, body: {} };
      await contentFormResponsesController.updateFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('deleteFormResponse', () => {
    it('should return 200 status code and form response when successfully validated', async () => {
      const formResponse = {};
      jest
        .spyOn(formResponseService, 'deleteFormResponse')
        .mockResolvedValue(formResponse);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.deleteFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form response deleted successfully',
      });
    });
    it('should return 500 status code and error message', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'deleteFormResponse')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.deleteFormResponse(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('getFormResponseById', () => {
    it('should return 200 status code and form response', async () => {
      const formResponse = {};
      jest
        .spyOn(formResponseService, 'getFormResponseById')
        .mockResolvedValue(formResponse);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getFormResponsesById(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(formResponse);
    });
    it('should return 404 status code and error message when form response not found', async () => {
      jest
        .spyOn(formResponseService, 'getFormResponseById')
        .mockResolvedValue(null);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getFormResponsesById(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Form response collection not found',
      });
    });
    it('should return 500 status code and error message', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'getFormResponseById')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getFormResponsesById(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
  describe('getSpecificPersonResponse', () => {
    it('should return 200 status code and form response', async () => {
      const formResponse = {};
      jest
        .spyOn(formResponseService, 'getSpecificPersonResponse')
        .mockResolvedValue(formResponse);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getSpecificPersonResponse(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(formResponse);
    });
    it('should return 404 status code and error message when form response not found', async () => {
      jest
        .spyOn(formResponseService, 'getSpecificPersonResponse')
        .mockResolvedValue(null);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getSpecificPersonResponse(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Specific Form response does not exits',
      });
    });
    it('should return 500 status code and error message', async () => {
      const errorMessage = 'Error';
      jest
        .spyOn(formResponseService, 'getSpecificPersonResponse')
        .mockRejectedValue(errorMessage);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockReq = { params: { id: 1 } };
      await contentFormResponsesController.getSpecificPersonResponse(
        mockReq,
        mockRes
      );
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: undefined });
    });
  });
});
