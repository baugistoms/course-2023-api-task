import updateProjectRequestBody from '../../data/project/update_project.json' assert { type: 'json' }

export async function getUpdateProjectRequestBody() {
    const currentDate = Date.now();

    const updatedProjectName = `UpdatedProject-${currentDate}`;
    const updatedProjectDescription = `UpdatedDescription-${Date(currentDate)}`;

    global.executionVariables['updatedProjectName'] = updatedProjectName;
    global.executionVariables['currentProjectName'] = updatedProjectName;
    global.executionVariables['updatedProjectDescription'] = updatedProjectDescription;

    updateProjectRequestBody.name = updatedProjectName;
    updateProjectRequestBody.description = updatedProjectDescription;
    
    return updateProjectRequestBody;
}