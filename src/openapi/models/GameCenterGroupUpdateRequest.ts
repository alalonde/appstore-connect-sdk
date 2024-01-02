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
import type { GameCenterGroupUpdateRequestData } from './GameCenterGroupUpdateRequestData';
import {
    GameCenterGroupUpdateRequestDataFromJSON,
    GameCenterGroupUpdateRequestDataFromJSONTyped,
    GameCenterGroupUpdateRequestDataToJSON,
} from './GameCenterGroupUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterGroupUpdateRequest
 */
export interface GameCenterGroupUpdateRequest {
    /**
     * 
     * @type {GameCenterGroupUpdateRequestData}
     * @memberof GameCenterGroupUpdateRequest
     */
    data: GameCenterGroupUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterGroupUpdateRequest interface.
 */
export function instanceOfGameCenterGroupUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterGroupUpdateRequestFromJSON(json: any): GameCenterGroupUpdateRequest {
    return GameCenterGroupUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterGroupUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterGroupUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterGroupUpdateRequestToJSON(value?: GameCenterGroupUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterGroupUpdateRequestDataToJSON(value.data),
    };
}

