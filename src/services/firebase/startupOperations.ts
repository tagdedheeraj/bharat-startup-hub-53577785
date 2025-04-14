
import { getDocument, updateDocument, createDocument } from './coreOperations';

/**
 * Get a startup profile by ID
 */
export const getStartupProfile = async (startupId: string) => {
  return getDocument('startupProfiles', startupId);
};

/**
 * Update a startup profile by ID
 */
export const updateStartupProfile = async (startupId: string, data: any) => {
  return updateDocument('startupProfiles', startupId, data);
};

/**
 * Save a new funding request
 */
export const saveStartupFundingRequest = async (fundingData: any) => {
  return createDocument('fundingRequests', fundingData);
};
