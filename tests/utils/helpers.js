import supertest from 'supertest'
import { config } from '../../config.js'

export async function getCurrentProjectName() {
    const path = `/projects/${config.project_id}`;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${config.token}`
    }

    const response = await supertest(config.host).get(path).set(headers);

    global.executionVariables['currentProjectName'] = response.body.name;
}

export async function getRandomNumber(min, max, type) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let res;
    if (type === 'decimal') {
      res = Math.floor(Math.random() * (max - min + 1) + min) / 100;
    } else {
      res = Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    return res;
}