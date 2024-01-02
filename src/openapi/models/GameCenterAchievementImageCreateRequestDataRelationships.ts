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
import type { GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization } from './GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization';
import {
    GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalizationFromJSON,
    GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalizationFromJSONTyped,
    GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalizationToJSON,
} from './GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization';

/**
 * 
 * @export
 * @interface GameCenterAchievementImageCreateRequestDataRelationships
 */
export interface GameCenterAchievementImageCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization}
     * @memberof GameCenterAchievementImageCreateRequestDataRelationships
     */
    gameCenterAchievementLocalization: GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization;
}

/**
 * Check if a given object implements the GameCenterAchievementImageCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterAchievementImageCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameCenterAchievementLocalization" in value;

    return isInstance;
}

export function GameCenterAchievementImageCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementImageCreateRequestDataRelationships {
    return GameCenterAchievementImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterAchievementLocalization': GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalizationFromJSON(json['gameCenterAchievementLocalization']),
    };
}

export function GameCenterAchievementImageCreateRequestDataRelationshipsToJSON(value?: GameCenterAchievementImageCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterAchievementLocalization': GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalizationToJSON(value.gameCenterAchievementLocalization),
    };
}

