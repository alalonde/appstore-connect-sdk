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
import type { GameCenterAchievementLocalizationCreateRequestDataAttributes } from './GameCenterAchievementLocalizationCreateRequestDataAttributes';
import {
    GameCenterAchievementLocalizationCreateRequestDataAttributesFromJSON,
    GameCenterAchievementLocalizationCreateRequestDataAttributesFromJSONTyped,
    GameCenterAchievementLocalizationCreateRequestDataAttributesToJSON,
} from './GameCenterAchievementLocalizationCreateRequestDataAttributes';
import type { GameCenterAchievementLocalizationCreateRequestDataRelationships } from './GameCenterAchievementLocalizationCreateRequestDataRelationships';
import {
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSON,
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterAchievementLocalizationCreateRequestDataRelationshipsToJSON,
} from './GameCenterAchievementLocalizationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalizationCreateRequestData
 */
export interface GameCenterAchievementLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalizationCreateRequestData
     */
    type: GameCenterAchievementLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterAchievementLocalizationCreateRequestDataAttributes}
     * @memberof GameCenterAchievementLocalizationCreateRequestData
     */
    attributes: GameCenterAchievementLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterAchievementLocalizationCreateRequestDataRelationships}
     * @memberof GameCenterAchievementLocalizationCreateRequestData
     */
    relationships: GameCenterAchievementLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterAchievementLocalizationCreateRequestDataTypeEnum = {
    GameCenterAchievementLocalizations: 'gameCenterAchievementLocalizations'
} as const;
export type GameCenterAchievementLocalizationCreateRequestDataTypeEnum = typeof GameCenterAchievementLocalizationCreateRequestDataTypeEnum[keyof typeof GameCenterAchievementLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementLocalizationCreateRequestData interface.
 */
export function instanceOfGameCenterAchievementLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterAchievementLocalizationCreateRequestDataFromJSON(json: any): GameCenterAchievementLocalizationCreateRequestData {
    return GameCenterAchievementLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterAchievementLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': GameCenterAchievementLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterAchievementLocalizationCreateRequestDataToJSON(value?: GameCenterAchievementLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GameCenterAchievementLocalizationCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': GameCenterAchievementLocalizationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

