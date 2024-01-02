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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks } from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData } from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';
import {
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSONTyped,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON,
} from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData}
     * @memberof GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization
     */
    data?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization interface.
 */
export function instanceOfGameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    return GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationToJSON(value?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON(value.data),
    };
}

