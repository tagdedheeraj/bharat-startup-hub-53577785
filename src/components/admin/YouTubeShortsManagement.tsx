
import React from 'react';
import { SimpleYouTubeShortsManager } from './youtube-shorts';

interface YouTubeShortsManagementProps {
  isOffline?: boolean;
}

/**
 * Legacy component wrapper that now uses the simplified YouTube shorts manager
 */
const YouTubeShortsManagement: React.FC<YouTubeShortsManagementProps> = ({ isOffline = false }) => {
  return <SimpleYouTubeShortsManager isOffline={isOffline} />;
};

export default YouTubeShortsManagement;
