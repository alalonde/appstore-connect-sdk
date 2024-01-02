/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GameCenterLeaderboardSetUpdateRequestData } from './GameCenterLeaderboardSetUpdateRequestData';
import {
    GameCenterLeaderboardSetUpdateRequestDataFromJSON,
    GameCenterLeaderboardSetUpdateRequestDataFromJSONTyped,
    GameCenterLeaderboardSetUpdateRequestDataToJSON,
} from './GameCenterLeaderboardSetUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetUpdateRequest
 */
export interface GameCenterLeaderboardSetUpdateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardSetUpdateRequestData}
     * @memberof GameCenterLeaderboardSetUpdateRequest
     */
    data: GameCenterLeaderboardSetUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetUpdateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetUpdateRequestFromJSON(json: any): GameCenterLeaderboardSetUpdateRequest {
    return GameCenterLeaderboardSetUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetUpdateRequestToJSON(value?: GameCenterLeaderboardSetUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardSetUpdateRequestDataToJSON(value.data),
    };
}

