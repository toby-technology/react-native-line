import { AccessToken, AccessTokenVerifyResult, BotFriendshipStatus, LoginArguments, LoginResult, UserProfile } from './types';
export declare const getBotFriendshipStatus: () => Promise<BotFriendshipStatus>;
export declare const getCurrentAccessToken: () => Promise<AccessToken>;
export declare const getProfile: () => Promise<UserProfile>;
export declare const login: (args?: LoginArguments) => Promise<LoginResult>;
export declare const logout: () => any;
export declare const refreshToken: () => Promise<AccessToken>;
export declare const verifyAccessToken: () => Promise<AccessTokenVerifyResult>;
