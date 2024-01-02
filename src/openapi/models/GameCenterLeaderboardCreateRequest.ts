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
import type { GameCenterLeaderboardCreateRequestData } from './GameCenterLeaderboardCreateRequestData';
import {
    GameCenterLeaderboardCreateRequestDataFromJSON,
    GameCenterLeaderboardCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardCreateRequestDataToJSON,
} from './GameCenterLeaderboardCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardCreateRequest
 */
export interface GameCenterLeaderboardCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardCreateRequestData}
     * @memberof GameCenterLeaderboardCreateRequest
     */
    data: GameCenterLeaderboardCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardCreateRequestFromJSON(json: any): GameCenterLeaderboardCreateRequest {
    return GameCenterLeaderboardCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardCreateRequestToJSON(value?: GameCenterLeaderboardCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardCreateRequestDataToJSON(value.data),
    };
}

