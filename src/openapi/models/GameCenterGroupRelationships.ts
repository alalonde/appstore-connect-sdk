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
import type { GameCenterDetailRelationshipsGameCenterAchievements } from './GameCenterDetailRelationshipsGameCenterAchievements';
import {
    GameCenterDetailRelationshipsGameCenterAchievementsFromJSON,
    GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterAchievementsToJSON,
} from './GameCenterDetailRelationshipsGameCenterAchievements';
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSets } from './GameCenterDetailRelationshipsGameCenterLeaderboardSets';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSets';
import type { GameCenterDetailRelationshipsGameCenterLeaderboards } from './GameCenterDetailRelationshipsGameCenterLeaderboards';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboards';
import type { GameCenterGroupRelationshipsGameCenterDetails } from './GameCenterGroupRelationshipsGameCenterDetails';
import {
    GameCenterGroupRelationshipsGameCenterDetailsFromJSON,
    GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped,
    GameCenterGroupRelationshipsGameCenterDetailsToJSON,
} from './GameCenterGroupRelationshipsGameCenterDetails';

/**
 * 
 * @export
 * @interface GameCenterGroupRelationships
 */
export interface GameCenterGroupRelationships {
    /**
     * 
     * @type {GameCenterGroupRelationshipsGameCenterDetails}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterDetails?: GameCenterGroupRelationshipsGameCenterDetails;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboards}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterLeaderboards?: GameCenterDetailRelationshipsGameCenterLeaderboards;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSets}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterLeaderboardSets?: GameCenterDetailRelationshipsGameCenterLeaderboardSets;
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterAchievements}
     * @memberof GameCenterGroupRelationships
     */
    gameCenterAchievements?: GameCenterDetailRelationshipsGameCenterAchievements;
}

/**
 * Check if a given object implements the GameCenterGroupRelationships interface.
 */
export function instanceOfGameCenterGroupRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterGroupRelationshipsFromJSON(json: any): GameCenterGroupRelationships {
    return GameCenterGroupRelationshipsFromJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterDetails': !exists(json, 'gameCenterDetails') ? undefined : GameCenterGroupRelationshipsGameCenterDetailsFromJSON(json['gameCenterDetails']),
        'gameCenterLeaderboards': !exists(json, 'gameCenterLeaderboards') ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON(json['gameCenterLeaderboards']),
        'gameCenterLeaderboardSets': !exists(json, 'gameCenterLeaderboardSets') ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardSetsFromJSON(json['gameCenterLeaderboardSets']),
        'gameCenterAchievements': !exists(json, 'gameCenterAchievements') ? undefined : GameCenterDetailRelationshipsGameCenterAchievementsFromJSON(json['gameCenterAchievements']),
    };
}

export function GameCenterGroupRelationshipsToJSON(value?: GameCenterGroupRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterDetails': GameCenterGroupRelationshipsGameCenterDetailsToJSON(value.gameCenterDetails),
        'gameCenterLeaderboards': GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON(value.gameCenterLeaderboards),
        'gameCenterLeaderboardSets': GameCenterDetailRelationshipsGameCenterLeaderboardSetsToJSON(value.gameCenterLeaderboardSets),
        'gameCenterAchievements': GameCenterDetailRelationshipsGameCenterAchievementsToJSON(value.gameCenterAchievements),
    };
}

