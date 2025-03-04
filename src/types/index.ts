/**
 * User type definition
 */
export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
    [key: string]: any;
  };
  app_metadata?: {
    provider?: string;
    [key: string]: any;
  };
}

/**
 * Bio type definition
 */
export interface Bio {
  id: string;
  user_id: string;
  title: string;
  content: string;
  platform: Platform;
  tone?: Tone;
  length?: Length;
  created_at: string;
  updated_at: string;
}

/**
 * Bio input for creation/update
 */
export interface BioInput {
  title: string;
  content: string;
  platform: Platform;
  tone?: Tone;
  length?: Length;
}

/**
 * Bio generation parameters
 */
export interface BioGenerationParams {
  name: string;
  profession: string;
  experience?: string;
  skills?: string;
  achievements?: string;
  platform: Platform;
  tone?: Tone;
  length?: Length;
}

/**
 * Supported platforms for bio generation
 */
export type Platform = 
  | 'LinkedIn'
  | 'Twitter'
  | 'Instagram'
  | 'Facebook'
  | 'GitHub'
  | 'Medium'
  | 'Personal Website'
  | 'Speaker Bio'
  | 'Email Signature'
  | 'Company Profile'
  | 'Other';

/**
 * Tone options for bio generation
 */
export type Tone = 
  | 'professional'
  | 'casual'
  | 'creative'
  | 'formal'
  | 'friendly';

/**
 * Length options for bio generation
 */
export type Length = 
  | 'short'
  | 'medium'
  | 'long';

/**
 * API response structure
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Subscription plan types
 */
export type SubscriptionPlan = 
  | 'free'
  | 'pro'
  | 'business'
  | 'enterprise';

/**
 * User profile with subscription info
 */
export interface UserProfile extends User {
  subscription?: {
    plan: SubscriptionPlan;
    status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'incomplete';
    current_period_end: string;
    cancel_at_period_end: boolean;
  };
  usage?: {
    bios_generated: number;
    bios_limit: number;
  };
}

/**
 * Theme mode
 */
export type ThemeMode = 'light' | 'dark' | 'system';
