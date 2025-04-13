
import { getDocument, updateDocument, createDocument } from './coreOperations';

/**
 * Get an investor profile by user ID
 */
export const getInvestorProfile = async (userId: string) => {
  return getDocument('investorProfiles', userId);
};

/**
 * Update an investor profile by user ID
 */
export const updateInvestorProfile = async (userId: string, data: any) => {
  return updateDocument('investorProfiles', userId, data);
};

/**
 * Save a new investment record
 */
export const saveInvestment = async (investmentData: any) => {
  return createDocument('investments', investmentData);
};
