const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const Project = require('./project');
const {
  getAllProjects, addProject, updateProject, removeProject, removeAllProjects,
} = require('./db/queries');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT);

app.get('/', async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    logger.error(error);
    res.status(500);
  }
});

app.post('/', async (req, res) => {
  try {
    await addProject(new Project(req.body));
    res.status(200);
  } catch (error) {
    logger.error(error.stack);
    res.status(500);
  }
});

app.delete('/', async (req, res) => {
  try {
    const deleted = await removeAllProjects(req.body);
    res.status(200).json(deleted);
  } catch (error) {
    logger.error(error.stack);
    res.status(500);
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const deleted = await removeProject(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    logger.error(error.stack);
    res.status(500);
  }
});

app.put('/', async (req, res) => {
  try {
    await updateProject(new Project(req.body));
    res.status(200);
  } catch (error) {
    logger.error(error.stack);
    res.status(500);
  }
});
