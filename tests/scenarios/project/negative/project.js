import { tryToUpdateProjectWithNoRequestBody, tryToUpdateProjectInvalidRequestBodyDescription, tryToUpdateProjectInvalidRequestBodyName, tryToUpdateProjectInvalidRequestBodyParameter, tryToUpdateProjectInvalidRequestBodyStyleguideId, tryToUpdateProjectInvalidRequestBodyWorkflowId, tryToUpdateProjectWithNoProjectId } from '../../../steps/project/project.js'

it('Project negative', () => {
    describe(`Try to get project with invalid ID`, () => {
        tryToUpdateProjectWithNoProjectId();
        tryToUpdateProjectWithNoRequestBody();
        tryToUpdateProjectInvalidRequestBodyParameter();
        tryToUpdateProjectInvalidRequestBodyName()
        tryToUpdateProjectInvalidRequestBodyDescription();
        tryToUpdateProjectInvalidRequestBodyWorkflowId();
        tryToUpdateProjectInvalidRequestBodyStyleguideId();
    })
})