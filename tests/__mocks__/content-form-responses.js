const mockFormResponseWithName = {
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
const mockBodyWithFormName = {
  formName: 'Form',
  formResponse: {
    Name: 'Swapnil kumar singh',
  },
};

const mockBodyWithResponseId = {
  responseId: 1,
  formResponse: {
    Name: 'Swapnil kumar singh',
  },
};

module.exports = {
  mockFormResponseWithName,
  mockBodyWithFormName,
  mockBodyWithResponseId,
};
