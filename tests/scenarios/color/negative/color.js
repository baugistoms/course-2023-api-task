import { tryToCreateColorInvalidRequestBodyNoName, tryToCreateColorInvalidRequestBodyNoRedGradient, tryToCreateColorInvalidRequestBodyNoGreenGradient, tryToCreateColorInvalidRequestBodyNoBlueGradient, tryToCreateColorInvalidRequestBodyNoAlphaGradient, tryToCreateColorInvalidRequestBodyAlphaGradient, tryToCreateColorInvalidRequestBodyBlueGradient, tryToCreateColorInvalidRequestBodyGreenGradient, tryToCreateColorInvalidRequestBodyName, tryToCreateColorInvalidRequestBodyParameter, tryToCreateColorInvalidRequestBodyRedGradient, tryToCreateColorInvalidRequestBodySourceId, tryToCreateColorWithNoProjectId, tryToCreateColorWithNoRequestBody } from '../../../steps/color/color.js'

it('Colors negative', () => {
    describe('Try to create color with invalid values', () => {
        tryToCreateColorWithNoProjectId()
        tryToCreateColorWithNoRequestBody()
        tryToCreateColorInvalidRequestBodyParameter()
        tryToCreateColorInvalidRequestBodyNoName();
        tryToCreateColorInvalidRequestBodyNoRedGradient();
        tryToCreateColorInvalidRequestBodyNoGreenGradient();
        tryToCreateColorInvalidRequestBodyNoBlueGradient();
        tryToCreateColorInvalidRequestBodyNoAlphaGradient();
        tryToCreateColorInvalidRequestBodyName();
        tryToCreateColorInvalidRequestBodySourceId();
        tryToCreateColorInvalidRequestBodyRedGradient();
        tryToCreateColorInvalidRequestBodyGreenGradient();
        tryToCreateColorInvalidRequestBodyBlueGradient();
        tryToCreateColorInvalidRequestBodyAlphaGradient();
    })
})