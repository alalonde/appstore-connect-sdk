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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterAchievementGroupAchievementLinkageRequest
 */
export interface GameCenterAchievementGroupAchievementLinkageRequest {
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementGroupAchievementLinkageRequest
     */
    data: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
}

/**
 * Check if a given object implements the GameCenterAchievementGroupAchievementLinkageRequest interface.
 */
export function instanceOfGameCenterAchievementGroupAchievementLinkageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterAchievementGroupAchievementLinkageRequestFromJSON(json: any): GameCenterAchievementGroupAchievementLinkageRequest {
    return GameCenterAchievementGroupAchievementLinkageRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementGroupAchievementLinkageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementGroupAchievementLinkageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementGroupAchievementLinkageRequestToJSON(value?: GameCenterAchievementGroupAchievementLinkageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON(value.data),
    };
}

