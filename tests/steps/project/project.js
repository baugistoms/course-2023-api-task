import { request } from '../../utils/requests.js'
import { getUpdateProjectRequestBody } from '../../utils/requestBodyGenerator/project.js'
import { config } from '../../../config.js'

export async function updateProjectNameAndDescription() {
    it('Update project name and description', async function () {
        const requestBody = await getUpdateProjectRequestBody();
        await request(this, 'PATCH', `/projects/${config.project_id}`, requestBody, true, 
            {
                statusCode : 204,
            }
        )
    })
}

export async function checkProjectUpdatedSuccessfully() {
    it('Check that project name and description properties were updated successfully', async function () {
        await request(this, 'GET', `/projects/${config.project_id}`, undefined, true, 
            {
                statusCode : 200,
                expectedValues: [
                                    {path: 'name', value: global.executionVariables['updatedProjectName']},
                                    {path: 'description', value: global.executionVariables['updatedProjectDescription']},
                                    {path: 'id', value: config.project_id}
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectWithNoProjectId() {
    it('Try to update project with no project id', async function () {
        await request(this, 'PATCH', `/projects/`, undefined, true, 
            {
                statusCode : 404,
                expectedValues: [
                                    {path: 'message', value: `Not Found`},
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectWithNoRequestBody() {
    it('Try to update project with no request body', async function () {
        await request(this, 'PATCH', `/projects/${config.project_id}`, undefined, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"value" must contain at least one of [name, description, workflow_status_id, linked_styleguide_id]`},
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectInvalidRequestBodyParameter() {
    it('Try to update project with invalid request body parameter', async function () {
        const invalidRequestBody = { naame: 'Invalid' };
        await request(this, 'PATCH', `/projects/${config.project_id}`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"${Object.keys(invalidRequestBody)[0]}" is not allowed`},
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectInvalidRequestBodyName() {
    it('Try to update project with invalid request body name parameter', async function () {
        const invalidRequestBody = { name: 1 };
        await request(this, 'PATCH', `/projects/${config.project_id}`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"name" must be a string`},
                                ]
            }
        )
    })
}
export async function tryToUpdateProjectInvalidRequestBodyDescription() {
    it('Try to update project with invalid request body description parameter', async function () {
        const invalidRequestBody = { description: 1 };
        await request(this, 'PATCH', `/projects/${config.project_id}`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"description" must be a string`},
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectInvalidRequestBodyWorkflowId() {
    it('Try to update project with invalid request body workflow status id parameter', async function () {
        const invalidRequestBody = { workflow_status_id: 1 };
        await request(this, 'PATCH', `/projects/${config.project_id}`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"workflow_status_id" must be a string`},
                                ]
            }
        )
    })
}

export async function tryToUpdateProjectInvalidRequestBodyStyleguideId() {
    it('Try to update project with invalid request body linked styleguide id parameter', async function () {
        const invalidRequestBody = { linked_styleguide_id: 1 };
        await request(this, 'PATCH', `/projects/${config.project_id}`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"linked_styleguide_id" must be a string`},
                                ]
            }
        )
    })
}