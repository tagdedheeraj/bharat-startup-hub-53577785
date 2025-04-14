
import { getDocument, updateDocument, createDocument, deleteDocument } from './coreOperations';

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
 * Get startup metrics by ID
 */
export const getStartupMetrics = async (startupId: string) => {
  return getDocument('startupMetrics', startupId);
};

/**
 * Update startup metrics by ID
 */
export const updateStartupMetrics = async (startupId: string, data: any) => {
  return updateDocument('startupMetrics', startupId, data);
};

/**
 * Get startup documents
 */
export const getStartupDocuments = async (startupId: string) => {
  return getDocument('startupDocuments', startupId);
};

/**
 * Add startup document
 */
export const addStartupDocument = async (startupId: string, document: any) => {
  return createDocument('startupDocuments', { startupId, ...document });
};

/**
 * Update startup document
 */
export const updateStartupDocument = async (documentId: string, data: any) => {
  return updateDocument('startupDocuments', documentId, data);
};

/**
 * Remove startup document
 */
export const removeStartupDocument = async (documentId: string) => {
  return deleteDocument('startupDocuments', documentId);
};

/**
 * Save a new funding request
 */
export const saveStartupFundingRequest = async (fundingData: any) => {
  return createDocument('fundingRequests', fundingData);
};
