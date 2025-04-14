
// Export all mobile performance utilities
export * from './detection';
export * from './optimization';
export * from './cleanup';
export * from './throttle';

// Re-export the main functions that were previously exported by mobilePerformance.ts
export { isLowPerformanceDevice } from './detection';
export { applyMobileOptimizations, setupPeriodicCleanup } from './optimization';
export { cleanupDOM } from './cleanup';
export { throttle } from './throttle';
