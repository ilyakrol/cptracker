/* eslint-disable no-template-curly-in-string */
const db = require('./config');

const getAllProjects = () => db.any('SELECT * FROM projects');

const addProject = project => db.none('INSERT INTO projects (is_personal, framework, language, description, duration, difficulty, company, link) VALUES (${isPersonal}, ${framework}, ${language}, ${description}, ${duration}, ${difficulty}, ${company}, ${link})', project);

const updateProject = project => db.none('UPDATE projects SET is_personal = ${isPersonal}, framework = ${framework}, language = ${language}, description = ${description}, duration = ${duration}, difficulty = ${difficulty}, company = ${company}, link = ${link} WHERE id = ${id}', project);

const removeProject = id => db.any('DELETE FROM projects WHERE id = $1', id);

const removeAllProjects = () => db.any('DELETE FROM projects');

module.exports = {
  getAllProjects,
  addProject,
  updateProject,
  removeProject,
  removeAllProjects,
};
