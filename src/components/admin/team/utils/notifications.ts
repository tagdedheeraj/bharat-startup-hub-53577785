
export const notifyTeamMembersUpdated = () => {
  console.log("Setting team-members-updated flag in localStorage");
  localStorage.setItem('team-members-updated', Date.now().toString());
  
  try {
    window.dispatchEvent(new CustomEvent('team-members-updated'));
  } catch (error) {
    console.error("Error dispatching team-members-updated event:", error);
  }
};
