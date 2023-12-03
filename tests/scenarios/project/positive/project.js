import { updateProjectNameAndDescription, checkProjectUpdatedSuccessfully } from '../../../steps/project/project.js'

it('Project positive', () => {
    describe(`Update project name and description`, () => {
        updateProjectNameAndDescription();
        checkProjectUpdatedSuccessfully();
    })
})