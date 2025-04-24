// models.js - JavaScript classes matching Java entities

/**
 * Represents a user
 */
export class User {
  constructor(data = {}) {
    this.userId = data.userId || null;
    this.username = data.username || '';
    this.email = data.email || '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.token = data.userId || '';  // TODO: This will eventually need to be an actual JWT
  }

  isNew() {
    return this.userId === null;
  }
}

/**
 * Represents an activity type
 */
export class ActivityType {
  constructor(data = {}) {
    this.typeId = data.typeId || null;
    this.typeName = data.typeName || '';
    this.description = data.description || '';
    this.iconClass = data.iconClass || '';
  }

  getIconHTML() {
    return `<i class="fas ${this.iconClass}"></i>`;
  }
}

/**
 * Represents a daily activity record
 */
export class DailyActivity {
  constructor(data = {}) {
    this.activityId = data.activityId || null;
    this.activityDate = data.activityDate ? new Date(data.activityDate) : new Date();
    this.completedGoals = data.completedGoals || 0;
    this.streakCount = data.streakCount || 0;

    // Convert activity details to ActivityDetail objects
    this.activityDetails = [];
    if (data.activityDetails && Array.isArray(data.activityDetails)) {
      this.activityDetails = data.activityDetails.map(detail =>
        new ActivityDetail(detail)
      );
    }
  }

  getTotalDuration() {
    return this.activityDetails.reduce(
      (total, detail) => total + (detail.durationMinutes || 0),
      0
    );
  }

  getActivityCountByType() {
    const countMap = {};
    this.activityDetails.forEach(detail => {
      const typeId = detail.activityType.typeId;
      countMap[typeId] = (countMap[typeId] || 0) + 1;
    });
    return countMap;
  }
}

/**
 * Represents an activity detail
 */
export class ActivityDetail {
  constructor(data = {}) {
    this.detailId = data.detailId || null;
    this.durationMinutes = data.durationMinutes || 0;
    this.notes = data.notes || '';
    this.completed = data.completed !== undefined ? data.completed : true;

    // Handle nested activity type
    if (data.activityType) {
      this.activityType = new ActivityType(data.activityType);
    } else {
      this.activityType = new ActivityType();
    }
  }

  getFormattedDuration() {
    const hours = Math.floor(this.durationMinutes / 60);
    const minutes = this.durationMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }
}

/**
 * Represents a study goal
 */
export class StudyGoal {
  constructor(data = {}) {
    this.goalId = data.goalId || null;
    this.goalTitle = data.goalTitle || '';
    this.goalDescription = data.goalDescription || '';
    this.goalDeadline = data.goalDeadline ? new Date(data.goalDeadline) : null;
    this.goalCompleted = data.goalCompleted || false;
    this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date();
  }

  getDaysRemaining() {
    if (!this.goalDeadline) {
      return null;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(this.goalDeadline);
    deadline.setHours(0, 0, 0, 0);

    const diffTime = deadline - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isOverdue() {
    const daysRemaining = this.getDaysRemaining();
    return !this.goalCompleted && daysRemaining !== null && daysRemaining < 0;
  }
}