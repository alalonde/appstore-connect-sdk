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
import type { GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup } from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup';
import {
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSONTyped,
    GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON,
} from './GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup';
import type { GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard } from './GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard';
import {
    GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardFromJSON,
    GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardFromJSONTyped,
    GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardToJSON,
} from './GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterDetailUpdateRequestDataRelationships
 */
export interface GameCenterDetailUpdateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    gameCenterGroup?: GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup;
    /**
     * 
     * @type {GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultLeaderboard?: GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard;
    /**
     * 
     * @type {GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultGroupLeaderboard?: GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard;
}

/**
 * Check if a given object implements the GameCenterDetailUpdateRequestDataRelationships interface.
 */
export function instanceOfGameCenterDetailUpdateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterDetailUpdateRequestDataRelationshipsFromJSON(json: any): GameCenterDetailUpdateRequestDataRelationships {
    return GameCenterDetailUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterDetailUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailUpdateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterGroup': !exists(json, 'gameCenterGroup') ? undefined : GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON(json['gameCenterGroup']),
        'defaultLeaderboard': !exists(json, 'defaultLeaderboard') ? undefined : GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardFromJSON(json['defaultLeaderboard']),
        'defaultGroupLeaderboard': !exists(json, 'defaultGroupLeaderboard') ? undefined : GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardFromJSON(json['defaultGroupLeaderboard']),
    };
}

export function GameCenterDetailUpdateRequestDataRelationshipsToJSON(value?: GameCenterDetailUpdateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterGroup': GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON(value.gameCenterGroup),
        'defaultLeaderboard': GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardToJSON(value.defaultLeaderboard),
        'defaultGroupLeaderboard': GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboardToJSON(value.defaultGroupLeaderboard),
    };
}

