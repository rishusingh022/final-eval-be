const { contentFormResponse } = require('../../database/models');

const getAllFormResponses = async () => {
  const formResponses = await contentFormResponse.findAll();
  return formResponses;
};

const addFormResponse = async (body) => {
  const { formName, formResponse } = body;
  const formResponses = await contentFormResponse.findOne({
    where: { formName: formName },
  });
  if (!formResponses) {
    const newFormResponse = await contentFormResponse.create({
      formName: formName,
      formResponses: [
        {
          id: 1,
          ...formResponse,
        },
      ],
    });
    return newFormResponse;
  }
  const updatedFormResponse = await contentFormResponse.update(
    {
      formResponses: [
        ...formResponses.formResponses,
        {
          id: formResponses.formResponses.length + 1,
          ...formResponse,
        },
      ],
    },
    { where: { formName: formName } }
  );
  return updatedFormResponse;
};

const updateFormResponse = async (formid, body) => {
  const { responseId, formResponse } = body;
  const formResponses = await contentFormResponse.findOne({
    where: { id: formid },
  });
  if (!formResponses) {
    return null;
  }
  const updatedFormResponse = await contentFormResponse.update(
    {
      formResponses: formResponses.formResponses.map((response) => {
        if (response.id === parseInt(responseId)) {
          return {
            ...response,
            ...formResponse,
          };
        }
        return response;
      }),
    },
    { where: { id: formid } }
  );
  return updatedFormResponse;
};

const deleteFormResponse = async (formid, body) => {
  const { responseId } = body;
  const formResponses = await contentFormResponse.findOne({
    where: { id: formid },
  });
  if (!formResponses) {
    return null;
  }
  console.log(formResponses.formResponses);
  const updatedFormResponse = await contentFormResponse.update(
    {
      formResponses: formResponses.formResponses.filter(
        (response) => parseInt(response.id) !== parseInt(responseId)
      ),
    },
    { where: { id: formid } }
  );
  return updatedFormResponse;
};

const getFormResponseById = async (formid) => {
  const formResponses = await contentFormResponse.findOne({
    where: { id: formid },
  });
  return formResponses;
};

const getSpecificPersonResponse = async (formid, responseId) => {
  const formResponses = await contentFormResponse.findOne({
    where: { id: formid },
  });
  if (!formResponses) {
    return null;
  }
  const specificResponse = formResponses.formResponses.find(
    (response) => response.id === parseInt(responseId)
  );
  return specificResponse;
};

const updateFromFieldUtils = async (formName, fields) => {
  const formResponse = await contentFormResponse.findOne({
    where: { formName: formName },
  });
  if (!formResponse) {
    return null;
  }
  if (formResponse.formResponses.length === 0) {
    const updatedFormResponse = await contentFormResponse.update(
      {
        formResponses: [
          {
            id: 1,
            [Object.keys(fields)[0]]: `${fields[Object.keys(fields)[0]]}`,
          },
        ],
      },
      { where: { formName: formName } }
    );
    console.log(updatedFormResponse);
  } else {
    const updatedFormResponse = await contentFormResponse.update(
      {
        formResponses: [
          {
            ...formResponse.formResponses[0],
            [Object.keys(fields)[0]]: `${fields[Object.keys(fields)[0]]}`,
          },
          ...formResponse.formResponses.slice(1),
        ],
      },
      { where: { formName: formName } }
    );
    console.log(updatedFormResponse);
  }
};
module.exports = {
  getAllFormResponses,
  addFormResponse,
  updateFormResponse,
  deleteFormResponse,
  getFormResponseById,
  getSpecificPersonResponse,
  updateFromFieldUtils,
};
