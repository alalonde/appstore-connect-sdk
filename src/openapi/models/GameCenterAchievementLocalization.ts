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
import type { GameCenterAchievementLocalizationAttributes } from './GameCenterAchievementLocalizationAttributes';
import {
    GameCenterAchievementLocalizationAttributesFromJSON,
    GameCenterAchievementLocalizationAttributesFromJSONTyped,
    GameCenterAchievementLocalizationAttributesToJSON,
} from './GameCenterAchievementLocalizationAttributes';
import type { GameCenterAchievementLocalizationRelationships } from './GameCenterAchievementLocalizationRelationships';
import {
    GameCenterAchievementLocalizationRelationshipsFromJSON,
    GameCenterAchievementLocalizationRelationshipsFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsToJSON,
} from './GameCenterAchievementLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterAchievementLocalization
 */
export interface GameCenterAchievementLocalization {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalization
     */
    type: GameCenterAchievementLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementLocalization
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementLocalizationAttributes}
     * @memberof GameCenterAchievementLocalization
     */
    attributes?: GameCenterAchievementLocalizationAttributes;
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationships}
     * @memberof GameCenterAchievementLocalization
     */
    relationships?: GameCenterAchievementLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAchievementLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAchievementLocalizationTypeEnum = {
    GameCenterAchievementLocalizations: 'gameCenterAchievementLocalizations'
} as const;
export type GameCenterAchievementLocalizationTypeEnum = typeof GameCenterAchievementLocalizationTypeEnum[keyof typeof GameCenterAchievementLocalizationTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementLocalization interface.
 */
export function instanceOfGameCenterAchievementLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementLocalizationFromJSON(json: any): GameCenterAchievementLocalization {
    return GameCenterAchievementLocalizationFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterAchievementLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAchievementLocalizationToJSON(value?: GameCenterAchievementLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementLocalizationAttributesToJSON(value.attributes),
        'relationships': GameCenterAchievementLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

