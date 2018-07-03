class Project {
  constructor({
    id = -1, isPersonal, framework, language, description, duration, difficulty, company = null, link = null,
  }) {
    this.id = id;
    this.isPersonal = isPersonal;
    this.framework = framework;
    this.language = language;
    this.description = description;
    this.duration = duration;
    this.difficulty = difficulty;
    this.company = company;
    this.link = link;
  }
}

module.exports = Project;
