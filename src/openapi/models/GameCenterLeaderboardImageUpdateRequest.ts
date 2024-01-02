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
import type { GameCenterLeaderboardImageUpdateRequestData } from './GameCenterLeaderboardImageUpdateRequestData';
import {
    GameCenterLeaderboardImageUpdateRequestDataFromJSON,
    GameCenterLeaderboardImageUpdateRequestDataFromJSONTyped,
    GameCenterLeaderboardImageUpdateRequestDataToJSON,
} from './GameCenterLeaderboardImageUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageUpdateRequest
 */
export interface GameCenterLeaderboardImageUpdateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardImageUpdateRequestData}
     * @memberof GameCenterLeaderboardImageUpdateRequest
     */
    data: GameCenterLeaderboardImageUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageUpdateRequest interface.
 */
export function instanceOfGameCenterLeaderboardImageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardImageUpdateRequestFromJSON(json: any): GameCenterLeaderboardImageUpdateRequest {
    return GameCenterLeaderboardImageUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardImageUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardImageUpdateRequestToJSON(value?: GameCenterLeaderboardImageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardImageUpdateRequestDataToJSON(value.data),
    };
}

