const ChangeLog = require('../db/models/change_log');

class ChangeLogRepository {
  constructor() {
    this.changeLog = ChangeLog
  }

  async save(data) {
    const newChangeLog = await this.changeLog.create({
      userId: data.userId,
      action: data.action,
      entity: data.entity,
      entityId: data.entityId,
      before: data.before,
      after: data.after
    });

    return newChangeLog
  }

  async getAll() {
    const changeLogs = await this.changeLog.findAll()
    return changeLogs
  }
}

module.exports = ChangeLogRepository
