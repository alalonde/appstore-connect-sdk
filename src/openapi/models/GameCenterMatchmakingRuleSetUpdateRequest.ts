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
import type { GameCenterMatchmakingRuleSetUpdateRequestData } from './GameCenterMatchmakingRuleSetUpdateRequestData';
import {
    GameCenterMatchmakingRuleSetUpdateRequestDataFromJSON,
    GameCenterMatchmakingRuleSetUpdateRequestDataFromJSONTyped,
    GameCenterMatchmakingRuleSetUpdateRequestDataToJSON,
} from './GameCenterMatchmakingRuleSetUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetUpdateRequest
 */
export interface GameCenterMatchmakingRuleSetUpdateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetUpdateRequestData}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequest
     */
    data: GameCenterMatchmakingRuleSetUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetUpdateRequest interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetUpdateRequestFromJSON(json: any): GameCenterMatchmakingRuleSetUpdateRequest {
    return GameCenterMatchmakingRuleSetUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleSetUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingRuleSetUpdateRequestToJSON(value?: GameCenterMatchmakingRuleSetUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingRuleSetUpdateRequestDataToJSON(value.data),
    };
}

