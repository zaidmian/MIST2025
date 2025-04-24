// activity-service.js - Functions specific to the activities API

import { getData, postData, putData, deleteData } from './api-client.js';

/**
 * Fetches all activity types
 * @returns {Promise<Array>} - Promise resolving to an array of activity types
 */
export async function getActivityTypes(user) {
  return getData('/activities/types', user.token);
}

/**
 * Fetches today's activities for the current user
 * @returns {Promise<Object>} - Promise resolving to today's activity record
 */
export async function getTodayActivities(user) {
  return getData('/activities/today', user.token);
}

/**
 * Adds a new activity for today
 * @param {number} activityTypeId - The ID of the activity type
 * @param {number} durationMinutes - Duration in minutes
 * @param {string} notes - Optional notes about the activity
 * @param {boolean} completed - Whether the activity is completed
 * @returns {Promise<Object>} - Promise resolving to the created activity
 */
export async function addActivity(activityTypeId, durationMinutes, notes, user, completed = true) {
  const activityData = {
    activityTypeId,
    durationMinutes,
    notes,
    completed
  };

  return postData('/activities/details', activityData, user.token);
}

/**
 * Updates an existing activity
 * @param {number} detailId - The ID of the activity detail to update
 * @param {Object} updateData - The data to update
 * @returns {Promise<Object>} - Promise resolving to the updated activity
 */
export async function updateActivity(detailId, updateData, user) {
  return putData(`/activities/details/${detailId}`, updateData, user.token);
}

/**
 * Deletes an activity
 * @param {number} detailId - The ID of the activity detail to delete
 * @returns {Promise<void>} - Promise resolving when deletion is complete
 */
export async function deleteActivity(detailId, user) {
  return deleteData(`/activities/details/${detailId}`, user.token);
}

/**
 * Gets the current streak information
 * @returns {Promise<Object>} - Promise resolving to streak information
 */
export async function getStreakInfo(user) {
  return getData('/activities/streak', user.token);
}