import { addColor, getLatestColorAddedToProject } from '../../../steps/color/color.js'
import { getCurrentProjectName } from '../../../utils/helpers.js'

before(async () => {
    await getCurrentProjectName()
})

it('Colors positive', () => {
    describe(`Add color to project`, () => {
        addColor();
    })
    describe('Ensure that latest color added to project is present', () => {
        getLatestColorAddedToProject();
    })
})