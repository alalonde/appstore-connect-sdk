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
import type { GameCenterAchievementImageAttributes } from './GameCenterAchievementImageAttributes';
import {
    GameCenterAchievementImageAttributesFromJSON,
    GameCenterAchievementImageAttributesFromJSONTyped,
    GameCenterAchievementImageAttributesToJSON,
} from './GameCenterAchievementImageAttributes';
import type { GameCenterLeaderboardSetImageRelationships } from './GameCenterLeaderboardSetImageRelationships';
import {
    GameCenterLeaderboardSetImageRelationshipsFromJSON,
    GameCenterLeaderboardSetImageRelationshipsFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsToJSON,
} from './GameCenterLeaderboardSetImageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImage
 */
export interface GameCenterLeaderboardSetImage {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImage
     */
    type: GameCenterLeaderboardSetImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImage
     */
    id: string;
    /**
     * 
     * @type {GameCenterAchievementImageAttributes}
     * @memberof GameCenterLeaderboardSetImage
     */
    attributes?: GameCenterAchievementImageAttributes;
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationships}
     * @memberof GameCenterLeaderboardSetImage
     */
    relationships?: GameCenterLeaderboardSetImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardSetImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageTypeEnum = {
    GameCenterLeaderboardSetImages: 'gameCenterLeaderboardSetImages'
} as const;
export type GameCenterLeaderboardSetImageTypeEnum = typeof GameCenterLeaderboardSetImageTypeEnum[keyof typeof GameCenterLeaderboardSetImageTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImage interface.
 */
export function instanceOfGameCenterLeaderboardSetImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetImageFromJSON(json: any): GameCenterLeaderboardSetImage {
    return GameCenterLeaderboardSetImageFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterAchievementImageAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterLeaderboardSetImageRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetImageToJSON(value?: GameCenterLeaderboardSetImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterAchievementImageAttributesToJSON(value.attributes),
        'relationships': GameCenterLeaderboardSetImageRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

