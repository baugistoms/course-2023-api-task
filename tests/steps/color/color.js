import { request } from '../../utils/requests.js'
import { addColorToProject } from '../../utils/requestBodyGenerator/color.js'
import { config } from '../../../config.js'

export async function getAllColors() {
    it('Get all colors in a project', async function () {
        await request(this, 'GET', `/projects/${config.project_id}/colors`, undefined, true, 
            {
                statusCode : 200
            }
        )
    })
}

export async function addColor() {
    it('Add new color to project', async function () {
        const requestBody = await addColorToProject()
        await request(this, 'POST', `/projects/${config.project_id}/colors`, requestBody, true, 
            {
                statusCode : 200,
                expectedFields: ['id'],
                executionVariables: [
                    {path: 'id', name: 'latestColorId'},
                ]
            }
        )
    })
}

export async function getLatestColorAddedToProject() {
    it('Ensure latest color is successfully added to project', async function () {
        await request(this, 'GET', `/projects/${config.project_id}/colors?limit=100`, undefined, true, 
            {
                statusCode : 200,
                expectedSpecificValues: [
                    {path: 'name', value: global.executionVariables['latestColorName']},
                    {path: 'r', value: global.executionVariables['latestColorRedGradient']},
                    {path: 'g', value: global.executionVariables['latestColorGreenGradient']},
                    {path: 'b', value: global.executionVariables['latestColorBlueGradient']},
                    {path: 'a', value: global.executionVariables['latestColorAlphaGradient']},
                    {path: 'source', value: {
                        project: {
                            id: config.project_id,
                            name: global.executionVariables['currentProjectName'],
                            platform: 'web'
                        }
                    }}
                ]
            }
        )
    })
}

export async function tryToCreateColorWithNoProjectId() {
    it('Try to create color with no project id', async function () {
        await request(this, 'POST', `/projects//colors`, undefined, true, 
            {
                statusCode : 404,
                expectedValues: [
                                    {path: 'message', value: `Not Found`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorWithNoRequestBody() {
    it('Try to create color with no request body', async function () {
        await request(this, 'POST', `/projects/${config.project_id}/colors`, undefined, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"name" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyParameter() {
    it('Try to create color with invalid request body parameter', async function () {
        const invalidRequestBody = { 
            naame: 'Invalid',
            r: 1,
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"name" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyNoName() {
    it('Try to create color with name parameter not present in request body', async function () {
        const invalidRequestBody = { 
            r: 1,
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"name" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyNoRedGradient() {
    it('Try to create color with r parameter not present in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"r" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyNoGreenGradient() {
    it('Try to create color with g parameter not present in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"g" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyNoBlueGradient() {
    it('Try to create color with b parameter not present in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 2,
            g: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"b" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyNoAlphaGradient() {
    it('Try to create color with a parameter not present in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 2,
            g: 3,
            b: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"a" is required`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyName() {
    it('Try to create color with invalid name parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: 1,
            r: 1,
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"name" must be a string`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodySourceId() {
    it('Try to create color with invalid source_id parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: "Color",
            source_id: 1,
            r: 1,
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"source_id" must be a string`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyRedGradient() {
    it('Try to create color with invalid r parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: "1",
            g: 2,
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"r" must be a number`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyGreenGradient() {
    it('Try to create color with invalid g parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 1,
            g: "2",
            b: 3,
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"g" must be a number`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyBlueGradient() {
    it('Try to create color with invalid b parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 1,
            g: 2,
            b: "3",
            a: 0
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"b" must be a number`},
                                ]
            }
        )
    })
}

export async function tryToCreateColorInvalidRequestBodyAlphaGradient() {
    it('Try to create color with invalid a parameter value in request body', async function () {
        const invalidRequestBody = { 
            name: 'Color',
            r: 1,
            g: 2,
            b: 3,
            a: "0"
        };
        await request(this, 'POST', `/projects/${config.project_id}/colors`, invalidRequestBody, true, 
            {
                statusCode : 400,
                expectedValues: [
                                    {path: 'message', value: `"a" must be a number`},
                                ]
            }
        )
    })
}