import addColorRequestBody from '../../data/color/add_color.json' assert { type: 'json' }
import { getRandomNumber } from '../helpers.js'

export async function addColorToProject() {
    const currentDate = Date.now();

    const colorName = `NewColor-${currentDate}`;

    const redGradient = await getRandomNumber(0, 255, 'regular');
    const greenGradient = await getRandomNumber(0, 255, 'regular');
    const blueGradient = await getRandomNumber(0, 255, 'regular');
    const alphaGradient = await getRandomNumber(0, 100, 'decimal');

    global.executionVariables['latestColorName'] = colorName;
    global.executionVariables['latestColorRedGradient'] = redGradient;
    global.executionVariables['latestColorGreenGradient'] = greenGradient;
    global.executionVariables['latestColorBlueGradient'] = blueGradient;
    global.executionVariables['latestColorAlphaGradient'] = alphaGradient;
    
    addColorRequestBody.name = colorName;
    addColorRequestBody.r = redGradient;
    addColorRequestBody.g = greenGradient;
    addColorRequestBody.b = blueGradient;
    addColorRequestBody.a = alphaGradient;
    
    return addColorRequestBody;
}