'use client';

import Clarity from '@microsoft/clarity';

export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'yqshy6xy2n';

/**
 * Initializes Microsoft Clarity analytics
 */
export function initClarity(projectId: string = CLARITY_PROJECT_ID) {
  if (typeof window !== 'undefined' && projectId) {
    try {
      Clarity.init(projectId);
    } catch (e) {
      console.error('Failed to initialize Microsoft Clarity:', e);
    }
  }
}

/**
 * Identify API - Send custom identifiers for visitors
 * For optimal user tracking, can be called on page transitions
 */
export function clarityIdentify(
  customId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.identify(customId, customSessionId, customPageId, friendlyName);
    } catch {
      // ignore in environments where clarity is not loaded
    }
  }
}

/**
 * Custom Tags API - Apply arbitrary tags to the Clarity session
 */
export function clarityTag(key: string, value: string | string[]) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.setTag(key, value);
    } catch {
      // ignore
    }
  }
}

/**
 * Custom Events API - Instrument user actions manually
 */
export function clarityEvent(eventName: string) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.event(eventName);
    } catch {
      // ignore
    }
  }
}

/**
 * Upgrade Session API - Prioritize sessions with key events (e.g. leads, conversions)
 */
export function clarityUpgrade(reason: string) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.upgrade(reason);
    } catch {
      // ignore
    }
  }
}

/**
 * Cookie Consent API v2 (recommended)
 */
export function clarityConsentV2(options: {
  ad_Storage: 'granted' | 'denied';
  analytics_Storage: 'granted' | 'denied';
} = { ad_Storage: 'granted', analytics_Storage: 'granted' }) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.consentV2(options);
    } catch {
      // ignore
    }
  }
}

/**
 * Cookie Consent API v1
 */
export function clarityConsent(consent: boolean = true) {
  if (typeof window !== 'undefined') {
    try {
      Clarity.consent(consent);
    } catch {
      // ignore
    }
  }
}

export default Clarity;
