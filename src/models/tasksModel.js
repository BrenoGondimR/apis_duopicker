const connection = require('./connection');



const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};


const createTask = async (task) => {
    const {title} =  task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);

    return {insertId: createdTask.insertId};
};


const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const getById = async (id) => {
    const [taskId] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    return taskId;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    getById
    
};