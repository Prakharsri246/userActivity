// Sample input data
const activities = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'logout', timestamp: '2024-06-14T10:05:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 2, activityType: 'view', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 3, activityType: 'logout', timestamp: '2024-06-14T10:25:00Z' },
    { userId: 1, activityType: 'logout', timestamp: '2024-06-14T10:30:00Z' }
  ];
  
  // Function to count the number of unique users
  function countUniqueUsers(data) {
    const userIds = new Set(data.map(activity => activity.userId));
    return userIds.size;
  }
  
  // Function to find the most common activity type
  function mostCommonActivityType(data) {
    const activityCounts = data.reduce((counts, activity) => {
      counts[activity.activityType] = (counts[activity.activityType] || 0) + 1;
      return counts;
    }, {});
    
    return Object.keys(activityCounts).reduce((a, b) => activityCounts[a] > activityCounts[b] ? a : b);
  }
  
  // Function to generate a timeline of activities for each user, sorted by timestamp
  function generateUserTimelines(data) {
    const userTimelines = data.reduce((timelines, activity) => {
      if (!timelines[activity.userId]) {
        timelines[activity.userId] = [];
      }
      timelines[activity.userId].push({ activityType: activity.activityType, timestamp: activity.timestamp });
      return timelines;
    }, {});
  
    for (let userId in userTimelines) {
      userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
    
    return userTimelines;
  }
  

  console.log('Number of unique users:', countUniqueUsers(activities)); // 3
  console.log('Most common activity type:', mostCommonActivityType(activities)); // 'login'
  console.log('User timelines:', generateUserTimelines(activities));
  