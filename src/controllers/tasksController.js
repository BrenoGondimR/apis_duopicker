const tasksModel = require('../models/tasksModel');



const getAll = async (request, response) => {

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
};

const getById = async (request, response) => {
    const {id} = request.params;

    const taskId = await tasksModel.getById(id);

    return response.status(200).json(taskId);
};


const createTask = async (request, response) => {

    const createdTask = await tasksModel.createTask(request.body);

    return response.status(201).json(createdTask);
};


const deleteTask = async (request, response) => {
    const {id} = request.params;

    await tasksModel.deleteTask(id);
    return response.status(204).json();
};


module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
};